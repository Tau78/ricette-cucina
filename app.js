const GRUPPI = [
  ["Portata", ["Primo", "Pizza", "Focaccia", "Pane", "Contorno", "Dolce"]],
  ["Tempo", ["Subito", "Lievitazione", "In teglia"]],
];

const S = {
  vista: "oggi",
  indice: 0,
  ricerca: "",
  soloPreferiti: false,
  chip: new Set(),
  preferiti: leggi("ricette-preferiti", []),
  spunte: leggi("ricette-spunte", {}),
  crono: {},
  timerIndice: -1,
};

function leggi(chiave, fallback) {
  try {
    const raw = localStorage.getItem(chiave);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function salva(chiave, valore) {
  try { localStorage.setItem(chiave, JSON.stringify(valore)); } catch (e) {}
}

function h(testo) {
  return String(testo).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function preset(teglia) {
  return {
    panielli: "1", peso: "200", idratazione: "65", salePerLitro: "50",
    ore: "24", frigo: "0", temperatura: "20", grassiPerLitro: "0",
    riporto: "0", tipo: "NORMALE", teglia: !!teglia,
  };
}

function passiRicetta(ricetta, bozza) {
  const out = [];
  for (const fase of ricetta.fasi) {
    const minuti = Calcola.minuti(fase.orologio, bozza, fase.minuti);
    if (minuti == null) continue;
    const n = fase.ripetizioni < 1 ? 1 : fase.ripetizioni;
    for (let i = 0; i < n; i++) {
      out.push({
        titolo: n === 1 ? fase.titolo : fase.titolo + " " + (i + 1) + " di " + n,
        nota: fase.nota,
        minuti,
        allarme: fase.allarme,
      });
    }
  }
  return out;
}

function bozzaEffettiva(i) {
  const c = S.crono[i];
  if (c && c.impasto) return c.impasto;
  const ricetta = RICETTE[i];
  if (ricetta.impasto === true || ricetta.impasto === false) return preset(ricetta.impasto);
  return null;
}

function passiDi(i) {
  return passiRicetta(RICETTE[i], bozzaEffettiva(i));
}

function formatMinuti(minuti) {
  if (minuti < 60) return minuti + " min";
  const ore = Math.floor(minuti / 60);
  const resto = minuti % 60;
  return resto === 0 ? ore + " h" : ore + " h " + resto + " min";
}

function formatSecondi(totale) {
  const t = totale < 0 ? 0 : totale;
  const ore = Math.floor(t / 3600);
  const minuti = Math.floor((t % 3600) / 60);
  const secondi = t % 60;
  const p = (n) => String(n).padStart(2, "0");
  return ore > 0 ? ore + ":" + p(minuti) + ":" + p(secondi) : p(minuti) + ":" + p(secondi);
}

function formatLitri(n) {
  return Number.isInteger(n) ? String(n) : String(n).replace(".", ",");
}

function scalaQuantita(quantita, fattore) {
  return quantita.replace(/\d+(?:[.,]\d+)?/g, (pezzo) => {
    const decimi = Math.round(Number(pezzo.replace(",", ".")) * fattore * 10);
    const intero = Math.trunc(decimi / 10);
    const resto = Math.abs(decimi % 10);
    return resto === 0 ? String(intero) : intero + "," + resto;
  });
}

function fattoreScala(ricetta, scala) {
  if (ricetta.litri) {
    const n = Number(String(scala).replace(",", ".")) || ricetta.litri.base;
    return n / ricetta.litri.base;
  }
  const n = Number(scala);
  const base = ricetta.porzioni || 1;
  return (Number.isFinite(n) && n > 0 ? n : base) / base;
}

function valoreIniziale(ricetta) {
  if (ricetta.litri) return String(ricetta.litri.base);
  return String(ricetta.porzioni);
}

function cronometro(i) {
  if (!S.crono[i]) {
    const ricetta = RICETTE[i];
    S.crono[i] = {
      passo: 0,
      secondi: -1,
      inCorsa: false,
      endsAt: 0,
      scala: valoreIniziale(ricetta),
      impasto: ricetta.impasto === true || ricetta.impasto === false ? preset(ricetta.impasto) : null,
    };
  }
  const c = S.crono[i];
  if (c.secondi < 0) c.secondi = (passiDi(i)[c.passo]?.minuti || 0) * 60;
  return c;
}

function testoRicetta(ricetta) {
  return [ricetta.nome, ricetta.sottotitolo]
    .concat(ricetta.ingredienti.map((i) => i.nome + " " + i.quantita))
    .join("\n")
    .toLowerCase();
}

function corrisponde(ricetta, chip, query, soloPreferiti) {
  if (soloPreferiti && !S.preferiti.includes(ricetta.nome)) return false;
  const q = query.trim().toLowerCase();
  if (q && !testoRicetta(ricetta).includes(q)) return false;
  return chip.every((c) => ricetta.chip.includes(c));
}

function filtrati() {
  return RICETTE.filter((r) => corrisponde(r, [...S.chip], S.ricerca, S.soloPreferiti));
}

function conteggio(chip) {
  const altre = [...S.chip].filter((c) => c !== chip);
  return RICETTE.filter((r) => r.chip.includes(chip) && corrisponde(r, altre, S.ricerca, S.soloPreferiti)).length;
}

function spuntato(nomeRicetta, nomeIng) {
  return (S.spunte[nomeRicetta] || []).includes(nomeIng);
}

function alternaSpunta(nomeRicetta, nomeIng) {
  const lista = S.spunte[nomeRicetta] ? S.spunte[nomeRicetta].slice() : [];
  const i = lista.indexOf(nomeIng);
  if (i >= 0) lista.splice(i, 1);
  else lista.push(nomeIng);
  S.spunte[nomeRicetta] = lista;
  salva("ricette-spunte", S.spunte);
}

function dosiVisibili(i) {
  const ricetta = RICETTE[i];
  const c = cronometro(i);
  if (c.impasto) return Calcola.scheda(c.impasto).dosi;
  const k = fattoreScala(ricetta, c.scala);
  return ricetta.ingredienti.map((ing) => ({ nome: ing.nome, quantita: scalaQuantita(ing.quantita, k) }));
}

let audioCtx = null;
let sveglia = null;
function suona() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  if (!audioCtx) audioCtx = new AC();
  if (audioCtx.state === "suspended") audioCtx.resume();
  const ora = audioCtx.currentTime;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = "sine";
  o.frequency.value = 880;
  o.connect(g);
  g.connect(audioCtx.destination);
  g.gain.setValueAtTime(0.0001, ora);
  g.gain.exponentialRampToValueAtTime(0.3, ora + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, ora + 0.7);
  o.start(ora);
  o.stop(ora + 0.72);
}

async function tieniSveglio(acceso) {
  if (!navigator.wakeLock) return;
  if (!acceso) {
    if (sveglia) sveglia.release().catch(() => {});
    sveglia = null;
    return;
  }
  if (sveglia) return;
  try { sveglia = await navigator.wakeLock.request("screen"); } catch (e) {}
}

RICETTE.forEach((ricetta) => {
  if (ricetta.impasto === true || ricetta.impasto === false) {
    ricetta.ingredienti = Calcola.scheda(preset(ricetta.impasto)).dosi;
  }
});

function disegna() {
  document.getElementById("app").onclick = null;
  document.title = S.vista === "oggi" ? "Ricette" : RICETTE[S.indice].nome;
  if (S.vista === "oggi") disegnaOggi();
  else if (S.vista === "orologio") disegnaOrologio();
  else disegnaDettaglio();
  tieniSveglio(Object.values(S.crono).some((c) => c.inCorsa));
}

function disegnaOggi() {
  const app = document.getElementById("app");
  app.innerHTML =
    '<div class="schermo"><header class="testa-oggi"><img class="cuoco" src="media/cuoco.jpg" alt="Cuoco della copertina">' +
    '<h1>Cosa cuciniamo oggi?</h1><div class="cerca-riga"><input class="cerca" id="cerca" placeholder="Cerca piatto o ingrediente" value="' +
    h(S.ricerca) + '"><button class="icona" id="chiudi" type="button" aria-label="Cancella ricerca">×</button>' +
    '<button class="preferiti" id="preferiti" type="button"></button></div></header>' +
    '<div class="pannello" id="chip"></div><p class="badge" id="badge"></p><div class="griglia" id="griglia"></div>' +
    '<div class="vuoto" id="vuoto" hidden><p>Nessuna ricetta con questa combinazione</p><button type="button" id="mostra">Mostra tutte</button></div></div>';
  const cerca = document.getElementById("cerca");
  cerca.addEventListener("input", () => {
    S.ricerca = cerca.value;
    aggiornaIndice();
  });
  document.getElementById("chiudi").onclick = () => {
    S.ricerca = "";
    cerca.value = "";
    cerca.focus();
    aggiornaIndice();
  };
  document.getElementById("preferiti").onclick = () => {
    S.soloPreferiti = !S.soloPreferiti;
    aggiornaIndice();
  };
  document.getElementById("mostra").onclick = azzeraFiltri;
  document.getElementById("chip").onclick = (event) => {
    const chip = event.target.closest("[data-chip]");
    if (chip && !chip.disabled) {
      if (S.chip.has(chip.dataset.chip)) S.chip.delete(chip.dataset.chip);
      else S.chip.add(chip.dataset.chip);
      aggiornaIndice();
    }
    if (event.target.closest("[data-azzera]")) azzeraFiltri();
  };
  document.getElementById("griglia").onclick = (event) => {
    const cuore = event.target.closest("[data-cuore]");
    if (cuore) {
      const nome = cuore.dataset.cuore;
      const i = S.preferiti.indexOf(nome);
      if (i >= 0) S.preferiti.splice(i, 1);
      else S.preferiti.push(nome);
      salva("ricette-preferiti", S.preferiti);
      aggiornaIndice();
      return;
    }
    const carta = event.target.closest("[data-apri]");
    if (!carta) return;
    S.indice = Number(carta.dataset.apri);
    cronometro(S.indice);
    S.vista = "dettaglio";
    disegna();
  };
  aggiornaIndice();
}

function azzeraFiltri() {
  S.chip.clear();
  S.soloPreferiti = false;
  S.ricerca = "";
  const cerca = document.getElementById("cerca");
  if (cerca) cerca.value = "";
  aggiornaIndice();
}

function filtriAttivi() {
  return S.chip.size > 0 || S.ricerca.trim() !== "" || S.soloPreferiti;
}

function aggiornaIndice() {
  const chipBox = document.getElementById("chip");
  if (!chipBox) return;
  chipBox.innerHTML = GRUPPI.map((gruppo, indiceGruppo) => {
    const pills = gruppo[1].map((chip) => {
      const n = conteggio(chip);
      const attiva = S.chip.has(chip);
      const spenta = !attiva && n === 0;
      return '<button type="button" class="chip' + (attiva ? " attiva" : "") + '" data-chip="' + h(chip) + '"' +
        (spenta ? " disabled" : "") + ">" + h(chip) + "  " + n + "</button>";
    }).join("");
    const azzera = indiceGruppo === 0
      ? '<button type="button" class="azzera" data-azzera ' + (filtriAttivi() ? "" : "hidden") + ">Azzera</button>"
      : "";
    return '<div class="chip-riga"><span class="gruppo">' + gruppo[0] + '</span><div class="scorrimento">' + pills + "</div>" + azzera + "</div>";
  }).join("");
  const elenco = filtrati();
  document.getElementById("badge").textContent = elenco.length === 1 ? "1 ricetta" : elenco.length + " ricette";
  document.getElementById("vuoto").hidden = elenco.length > 0;
  document.getElementById("griglia").hidden = elenco.length === 0;
  document.getElementById("griglia").innerHTML = elenco.map((ricetta) => {
    const i = RICETTE.indexOf(ricetta);
    const acceso = S.preferiti.includes(ricetta.nome);
    const c = S.crono[i];
    const passi = passiRicetta(ricetta, bozzaEffettiva(i));
    const stato = c && c.inCorsa ? "in corso  " + formatSecondi(c.secondi) : formatMinuti(passi.reduce((s, p) => s + p.minuti, 0));
    return '<div class="carta" data-apri="' + i + '"><i class="barra"></i><div class="corpo"><div class="nome-riga"><strong>' +
      h(ricetta.nome) + '</strong><button type="button" class="cuore" data-cuore="' + h(ricetta.nome) + '" aria-label="' +
      (acceso ? "Togli dai preferiti" : "Metti nei preferiti") + '">' + (acceso ? "♥" : "♡") +
      '</button></div>' + (ricetta.sottotitolo ? '<p class="sotto">' + h(ricetta.sottotitolo) + "</p>" : "") +
      '<p class="stato" data-corsa="' + i + '">' + h(stato) + "</p>" +
      (ricetta.chip.length ? '<p class="etichette">' + h(ricetta.chip.join("  ·  ")) + "</p>" : "") +
      "</div></div>";
  }).join("");
  const preferiti = document.getElementById("preferiti");
  preferiti.textContent = "Preferiti  " + S.preferiti.length;
  preferiti.classList.toggle("acceso", S.soloPreferiti);
  document.getElementById("chiudi").hidden = S.ricerca === "";
}

function titoloScala(ricetta) {
  if (ricetta.litri) return "LITRI";
  return "PORZIONI";
}

function disegnaDettaglio() {
  const i = S.indice;
  const ricetta = RICETTE[i];
  const c = cronometro(i);
  const passi = passiDi(i);
  const passo = passi[c.passo] || null;
  const minutiTot = passi.reduce((s, p) => s + p.minuti, 0);
  const dosi = dosiVisibili(i);
  const dosiHtml = dosi.map((d) => {
    const on = spuntato(ricetta.nome, d.nome);
    return '<button type="button" class="dose' + (on ? " spunta" : "") + '" data-dose="' + h(d.nome) + '">' +
      h(d.quantita + "   " + d.nome) + "</button>";
  }).join("");
  const scala = ricetta.impasto == null ? scalaHtml(ricetta, c) : calcolapizzaHtml(c.impasto);
  const ingredienti = ricetta.impasto == null
    ? '<details class="sezione" open><summary>INGREDIENTI</summary>' + dosiHtml + "</details>"
    : '<section class="blocco"><h2>DOSI</h2>' + dosiHtml + "</section>";
  const elenco = passi.map((p, index) =>
    '<button type="button" class="passo' + (index === c.passo ? " attivo" : "") + '" data-passo="' + index + '">' + h(p.titolo) +
    '</button><p class="passo-nota">' + h(p.nota) + '</p><p class="passo-min" data-minuti="' + index + '">' + formatMinuti(p.minuti) + "</p>"
  ).join("");
  const azioni = passo
    ? '<button type="button" class="fatto" data-azione="fatto">FATTO</button><button type="button" class="avvia" data-azione="avvia">AVVIA</button>'
    : '<button type="button" class="fatto" data-azione="daccapo">DACAPO</button>';
  document.getElementById("app").innerHTML =
    '<div class="foglio"><header class="testa-ricetta"><div class="riga"><button type="button" class="oggi" data-azione="oggi">Oggi</button></div><h1>' +
    h(ricetta.nome) + '</h1><p class="prep" id="durata">tempo di preparazione  ' + formatMinuti(minutiTot) +
    '</p></header><div class="corpo">' + scala + ingredienti +
    '<details class="sezione"><summary>PROCEDIMENTO</summary>' + elenco + '</details><div class="adesso"><h2 id="passo-titolo">' +
    h(passo ? passo.titolo : "Finito") + '</h2><p id="passo-nota">' + h(passo ? passo.nota : "Puoi ricominciare da capo.") +
    '</p><p class="tempo" id="tempo">' + formatSecondi(passo ? c.secondi : 0) + '</p></div></div><div class="azioni">' + azioni + "</div></div>";
  document.getElementById("app").onclick = onclickDettaglio;
  const campi = document.querySelectorAll("[data-campo]");
  campi.forEach((campo) => {
    campo.addEventListener("input", () => cambiaImpasto(campo.dataset.campo, campo.value, false));
  });
}

function scalaHtml(ricetta, c) {
  let pills = "";
  if (ricetta.litri) {
    pills = ricetta.litri.scelte.map((n) => {
      const chiave = String(n);
      return '<button type="button" class="pill' + (c.scala === chiave ? " attiva" : "") + '" data-scala="' + chiave + '">' +
        formatLitri(n) + " l</button>";
    }).join("");
  } else {
    pills = ricetta.scelte.map((n) =>
      '<button type="button" class="pill' + (c.scala === String(n) ? " attiva" : "") + '" data-scala="' + n + '">' + n + "</button>"
    ).join("");
  }
  return '<section class="blocco"><h2>' + titoloScala(ricetta) + '</h2><p class="nota-tempi">I tempi non cambiano.</p><div class="pillole">' +
    pills + "</div></section>";
}

function calcolapizzaHtml(bozza) {
  const scheda = Calcola.scheda(bozza);
  const campi = [
    ["panielli", "Panielli", "numeric"],
    ["peso", "Peso g", "decimal"],
    ["idratazione", "Idro %", "decimal"],
    ["salePerLitro", "Sale g/l", "decimal"],
    ["ore", "Ore", "decimal"],
    ["frigo", "Frigo h", "decimal"],
    ["temperatura", "°C", "decimal"],
    ["grassiPerLitro", "Grassi g/l", "decimal"],
    ["riporto", "Riporto %", "decimal"],
  ];
  const inputs = campi.map(([chiave, etichetta, modo]) =>
    '<label>' + etichetta + '<input data-campo="' + chiave + '" inputmode="' + modo + '" value="' + h(bozza[chiave]) + '"' +
    (scheda.campi[chiave] ? ' class="errato"' : "") + "></label>"
  ).join("");
  const tipi = ["STANCA", "NORMALE", "VIVACE"].map((tipo) =>
    '<button type="button" class="pill' + (bozza.tipo === tipo ? " attiva" : "") + '" data-tipo="' + tipo + '">' +
    tipo.charAt(0) + tipo.slice(1).toLowerCase() + "</button>"
  ).join("");
  return '<section class="blocco"><div class="calcola-testa">CALCOLAPIZZA</div><div class="pillole"><button type="button" class="pill' +
    (bozza.teglia ? " attiva" : "") + '" data-teglia>Pizza in teglia</button>' + tipi +
    '</div><div class="campi">' + inputs + "</div>" +
    (scheda.errore ? '<p class="errore" id="errore">' + h(scheda.errore) + "</p>" : '<p class="errore" id="errore" hidden></p>') +
    '<p class="nota-tempi">Calcolapizza 2.1. Frigo e lievitazione seguono le ore.</p></section>';
}

function onclickDettaglio(event) {
  const nodo = event.target.closest("[data-azione],[data-scala],[data-dose],[data-passo],[data-tipo],[data-teglia]");
  if (!nodo) return;
  if (nodo.dataset.azione === "oggi") {
    S.vista = "oggi";
    disegna();
  }
  if (nodo.dataset.azione === "fatto") fatto();
  if (nodo.dataset.azione === "avvia") avvia();
  if (nodo.dataset.azione === "daccapo") daccapo();
  if (nodo.dataset.scala) {
    cronometro(S.indice).scala = nodo.dataset.scala;
    disegnaDettaglio();
  }
  if (nodo.dataset.dose) {
    alternaSpunta(RICETTE[S.indice].nome, nodo.dataset.dose);
    nodo.classList.toggle("spunta");
  }
  if (nodo.dataset.passo != null) vaiAlPasso(Number(nodo.dataset.passo));
  if (nodo.dataset.tipo) cambiaImpasto("tipo", nodo.dataset.tipo, true);
  if (nodo.hasAttribute("data-teglia")) {
    const bozza = cronometro(S.indice).impasto;
    cambiaImpasto("teglia", !bozza.teglia, true);
  }
}

function cambiaImpasto(campo, valore, ridisegna) {
  const c = cronometro(S.indice);
  const prima = passiDi(S.indice).map((p) => p.titolo + "@" + p.minuti);
  const titolo = passiDi(S.indice)[c.passo]?.titolo;
  c.impasto[campo] = valore;
  const dopo = passiDi(S.indice);
  const dopoChiavi = dopo.map((p) => p.titolo + "@" + p.minuti);
  if (!c.inCorsa && dopoChiavi.join("|") !== prima.join("|")) {
    const idx = titolo ? dopo.findIndex((p) => p.titolo === titolo) : -1;
    if (idx >= 0) {
      c.passo = idx;
      c.secondi = dopo[idx].minuti * 60;
    }
    disegnaDettaglio();
    const diNuovo = document.querySelector('[data-campo="' + campo + '"]');
    if (diNuovo) {
      diNuovo.focus();
      if (diNuovo.setSelectionRange) diNuovo.setSelectionRange(diNuovo.value.length, diNuovo.value.length);
    }
    return;
  }
  if (ridisegna) {
    disegnaDettaglio();
    return;
  }
  const scheda = Calcola.scheda(c.impasto);
  document.querySelectorAll("[data-dose]").forEach((riga, index) => {
    const dose = scheda.dosi[index];
    if (!dose) return;
    riga.textContent = dose.quantita + "   " + dose.nome;
  });
  document.querySelectorAll("[data-campo]").forEach((input) => {
    input.classList.toggle("errato", !!scheda.campi[input.dataset.campo]);
  });
  const errore = document.getElementById("errore");
  if (errore) {
    errore.hidden = !scheda.errore;
    errore.textContent = scheda.errore || "";
  }
  if (!c.inCorsa) {
    dopo.forEach((p, index) => {
      const nodo = document.querySelector('[data-minuti="' + index + '"]');
      if (nodo) nodo.textContent = formatMinuti(p.minuti);
    });
    const attuale = dopo[c.passo];
    const pieno = prima[c.passo] && Number(prima[c.passo].split("@")[1]);
    if (attuale && c.secondi > 0 && c.secondi === pieno * 60 && pieno !== attuale.minuti) {
      c.secondi = attuale.minuti * 60;
      const tempo = document.getElementById("tempo");
      if (tempo) tempo.textContent = formatSecondi(c.secondi);
    }
    const durata = document.getElementById("durata");
    if (durata) durata.textContent = "tempo di preparazione  " + formatMinuti(dopo.reduce((s, p) => s + p.minuti, 0));
  }
}

function fatto() {
  const i = S.indice;
  const c = cronometro(i);
  const passi = passiDi(i);
  ferma(i);
  if (c.passo < passi.length - 1) {
    c.passo += 1;
    c.secondi = passi[c.passo].minuti * 60;
  } else {
    c.passo = passi.length;
    c.secondi = 0;
  }
  if (S.vista === "orologio") disegnaOrologio();
  else disegnaDettaglio();
}

function avvia() {
  const i = S.indice;
  const c = cronometro(i);
  const passo = passiDi(i)[c.passo];
  if (S.timerIndice >= 0 && S.timerIndice !== i) {
    const altro = S.crono[S.timerIndice];
    if (altro) altro.inCorsa = false;
  }
  if (passo && c.secondi > 0) {
    c.inCorsa = true;
    c.endsAt = Date.now() + c.secondi * 1000;
    S.timerIndice = i;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) {
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();
    }
  }
  S.vista = "orologio";
  disegna();
}

function daccapo() {
  const c = cronometro(S.indice);
  ferma(S.indice);
  c.passo = 0;
  c.secondi = (passiDi(S.indice)[0]?.minuti || 0) * 60;
  S.vista = "dettaglio";
  disegna();
}

function vaiAlPasso(index) {
  const c = cronometro(S.indice);
  ferma(S.indice);
  c.passo = index;
  c.secondi = (passiDi(S.indice)[index]?.minuti || 0) * 60;
  disegnaDettaglio();
}

function ferma(i) {
  const c = S.crono[i];
  if (c) c.inCorsa = false;
  if (S.timerIndice === i) S.timerIndice = -1;
}

function disegnaOrologio() {
  const i = S.indice;
  const ricetta = RICETTE[i];
  const c = cronometro(i);
  const passi = passiDi(i);
  const passo = passi[c.passo] || null;
  const dopo = passi[c.passo + 1] || null;
  document.getElementById("app").innerHTML =
    '<div class="orologio" data-azione="riduci" role="button" tabindex="0"><p class="tempo" id="tempo">' +
    formatSecondi(passo ? c.secondi : 0) + "</p><h1>" + h(passo ? passo.titolo : "Finito") +
    '</h1><p class="nota">' + h(passo ? passo.nota : "") + '</p><p class="poi">' +
    (dopo ? "Poi: " + h(dopo.titolo) : "Nessun passo dopo questo.") +
    '</p><p class="torna">Tocca per tornare alla ricetta</p></div>';
  document.getElementById("app").onclick = () => {
    S.vista = "dettaglio";
    disegna();
  };
}

function aggiornaTempoVisibile() {
  const i = S.timerIndice;
  if (i < 0 || S.indice !== i) return;
  const c = S.crono[i];
  const nodo = document.getElementById("tempo");
  if (nodo && (S.vista === "dettaglio" || S.vista === "orologio")) nodo.textContent = formatSecondi(c.secondi);
  const carta = document.querySelector('[data-corsa="' + i + '"]');
  if (carta && c.inCorsa) carta.textContent = "in corso  " + formatSecondi(c.secondi);
}

setInterval(() => {
  const i = S.timerIndice;
  if (i < 0) return;
  const c = S.crono[i];
  if (!c || !c.inCorsa) return;
  const left = Math.max(0, Math.round((c.endsAt - Date.now()) / 1000));
  if (left === c.secondi && left !== 0) return;
  c.secondi = left;
  if (left === 0) {
    c.inCorsa = false;
    S.timerIndice = -1;
    const passo = passiDi(i)[c.passo];
    aggiornaTempoVisibile();
    tieniSveglio(false);
    if (passo && passo.allarme) {
      suona();
      S.indice = i;
      S.vista = "orologio";
      disegna();
    }
    return;
  }
  aggiornaTempoVisibile();
}, 250);

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") tieniSveglio(Object.values(S.crono).some((c) => c.inCorsa));
});

if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
disegna();
