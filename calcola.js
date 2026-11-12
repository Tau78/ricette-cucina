// Stessi conti di Calcolapizza.kt, Calcolapizza 2.1.
(function () {
  function numero(testo) {
    const pulito = String(testo).trim().replace(",", ".").replace(/\.$/, "");
    if (pulito === "" || pulito === "-") return null;
    const n = Number(pulito);
    return Number.isFinite(n) ? n : null;
  }

  function fisso(valore, cifre) {
    const fattore = 10 ** cifre;
    const scaled = Math.round(valore * fattore);
    if (cifre === 0) return String(scaled);
    const segno = scaled < 0 ? "-" : "";
    const assoluto = String(Math.abs(scaled)).padStart(cifre + 1, "0");
    const taglio = assoluto.length - cifre;
    return segno + assoluto.slice(0, taglio) + "." + assoluto.slice(taglio);
  }

  function grammi(testo) {
    return testo.replace(".", ",") + " g";
  }

  function troncaDue(valore) {
    if (valore <= 0) return 0;
    const trovato = String(valore).match(/^\d+(?:\.\d{0,2})?/);
    return trovato ? Number(trovato[0]) : 0;
  }

  function fattoreRiporto(tipo) {
    if (tipo === "STANCA") return 1 / 300;
    if (tipo === "VIVACE") return 0.01;
    return 0.005;
  }

  function bilancio(idro, sale, grassi) {
    return idro * (sale + grassi) + 1000 * (idro + 100);
  }

  function lievitoPerFarina(idro, sale, ore, frigo, gradi, grassi, teglia) {
    const temperatura = gradi * (teglia ? 0.75 : 1);
    const oreEffettive = ore - 0.9 * frigo;
    const curva = 4.2 * idro - 80 - 0.0305 * idro * idro;
    return (2250 * (1 + sale / 200) * (1 + grassi / 300)) /
      (curva * Math.pow(temperatura, 2.5) * Math.pow(oreEffettive, 1.2));
  }

  function tettoRiporto(idro, sale, ore, frigo, gradi, grassi, teglia, tipo) {
    const rapporto = lievitoPerFarina(idro, sale, ore, frigo, gradi, grassi, teglia);
    const base = bilancio(idro, sale, grassi);
    const grezzo = 1e5 * rapporto * 100 / (1e5 * rapporto + base * fattoreRiporto(tipo));
    return troncaDue(grezzo);
  }

  const NOMI = ["Farina", "Acqua", "Sale", "Olio", "Pasta di riporto", "Lievito di birra fresco"];

  function vuota(errore, campi) {
    return { dosi: NOMI.map((nome) => ({ nome, quantita: "—" })), errore, campi };
  }

  function messaggio(campi, tetto) {
    if (campi.panielli) return "Panielli: un intero, da 1 in su.";
    if (campi.peso) return "Peso: maggiore di zero.";
    if (campi.idro) return "Idratazione: tra 50 e 100.";
    if (campi.sale) return "Sale: tra 0 e 70 g per litro.";
    if (campi.ore) return "Ore: tra 3 e 96.";
    if (campi.frigo) return "Frigo: da 0 fino alle ore meno 1.";
    if (campi.temperatura) return "Temperatura: tra 15 e 35.";
    if (campi.grassi) return "Grassi: tra 0 e 150 g per litro.";
    if (campi.riporto) {
      const testo = tetto == null ? "0" : fisso(tetto, 2).replace(".", ",");
      return "Riporto: da 0 a " + testo + "%.";
    }
    return "Controlla i numeri.";
  }

  function scheda(bozza) {
    const campi = {};
    const panielli = /^\d+$/.test(String(bozza.panielli).trim()) ? Number(bozza.panielli.trim()) : null;
    if (panielli == null || panielli < 1) campi.panielli = true;
    const peso = numero(bozza.peso);
    if (peso == null || peso <= 0) campi.peso = true;
    const idro = numero(bozza.idratazione);
    if (idro == null || idro < 50 || idro > 100) campi.idro = true;
    const sale = numero(bozza.salePerLitro);
    if (sale == null || sale < 0 || sale > 70) campi.sale = true;
    const ore = numero(bozza.ore);
    if (ore == null || ore < 3 || ore > 96) campi.ore = true;
    const frigo = numero(bozza.frigo);
    const oreValide = ore != null && ore >= 3 && ore <= 96;
    const frigoValido = frigo != null && frigo >= 0 && (!oreValide || frigo === 0 || frigo <= ore - 1);
    if (!frigoValido) campi.frigo = true;
    const gradi = numero(bozza.temperatura);
    if (gradi == null || gradi < 15 || gradi > 35) campi.temperatura = true;
    const grassi = numero(bozza.grassiPerLitro);
    if (grassi == null || grassi < 0 || grassi > 150) campi.grassi = true;

    const basi = ["panielli", "peso", "idro", "sale", "ore", "frigo", "temperatura", "grassi"];
    if (basi.some((k) => campi[k])) {
      const riporto = numero(bozza.riporto);
      if (riporto == null || riporto < 0) campi.riporto = true;
      return vuota(messaggio(campi, null), campi);
    }

    const tetto = tettoRiporto(idro, sale, ore, frigo, gradi, grassi, bozza.teglia, bozza.tipo);
    const riporto = numero(bozza.riporto);
    if (riporto == null || riporto < 0 || riporto > tetto) {
      campi.riporto = true;
      return vuota(messaggio(campi, tetto), campi);
    }

    const rapporto = lievitoPerFarina(idro, sale, ore, frigo, gradi, grassi, bozza.teglia);
    const base = bilancio(idro, sale, grassi);
    const fattore = fattoreRiporto(bozza.tipo);
    const massa = panielli * peso;
    const grammiRiporto = massa * riporto / 100;
    const resto = massa - grammiRiporto;
    const farina = 1e5 * resto / base;
    const dosi = [
      grammi(fisso(farina, 0)),
      grammi(fisso(1000 * idro * resto / base, 0)),
      grammi(fisso(sale * idro * resto / base, 0)),
      grammi(fisso(grassi * idro * resto / base, 0)),
      grammi(fisso(grammiRiporto, 0)),
      grammi(fisso(farina * rapporto - fattore * grammiRiporto, 2)),
    ];
    return {
      dosi: NOMI.map((nome, i) => ({ nome, quantita: dosi[i] })),
      errore: null,
      campi: {},
    };
  }

  function minuti(orologio, bozza, fallback) {
    if (orologio === "fisso") return fallback < 1 ? 1 : fallback;
    const tot = bozza ? numero(bozza.ore) : null;
    const fr = bozza ? numero(bozza.frigo) : null;
    if (tot == null || fr == null) return fallback < 1 ? null : fallback;
    const ore = orologio === "frigo" ? fr : tot - fr;
    const risultato = Math.round(ore * 60);
    return risultato < 1 ? null : risultato;
  }

  globalThis.Calcola = { scheda, minuti, numero };
})();
