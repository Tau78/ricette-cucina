const RICETTE = [
  {
    "id": "aglioOlio",
    "nome": "Aglio, olio e peperoncino",
    "sottotitolo": "Scola al dente e salta in padella.",
    "chip": [
      "Primo",
      "Subito"
    ],
    "porzioni": 4,
    "scelte": [
      2,
      4,
      6
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Spaghetti",
        "quantita": "320 g"
      },
      {
        "nome": "Aglio",
        "quantita": "2 spicchi"
      },
      {
        "nome": "Olio",
        "quantita": "40 g"
      },
      {
        "nome": "Peperoncino",
        "quantita": "1"
      },
      {
        "nome": "Sale",
        "quantita": "4 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Cottura",
        "nota": "Scola al dente e salta in padella con aglio, olio e peperoncino.",
        "minuti": 9,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "pizzaInTeglia",
    "nome": "Pizza in teglia",
    "sottotitolo": "Teglia oliata, fondo macchiato.",
    "chip": [
      "Pizza",
      "Lievitazione",
      "In teglia"
    ],
    "porzioni": null,
    "scelte": [],
    "impasto": true,
    "ingredienti": [],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Incorda fino a una palla liscia. L'olio a fine impasto.",
        "minuti": 20,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Pieghe",
        "nota": "Un giro di pieghe a tre. Ricopri.",
        "minuti": 20,
        "allarme": true,
        "ripetizioni": 3,
        "orologio": "fisso"
      },
      {
        "titolo": "Frigo",
        "nota": "Contenitore chiuso in frigorifero.",
        "minuti": 0,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "frigo"
      },
      {
        "titolo": "A temperatura ambiente",
        "nota": "Massa coperta, per le ore rimaste.",
        "minuti": 1440,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "ambiente"
      },
      {
        "titolo": "Stendi",
        "nota": "Teglia oliata. Stendi con i polpastrelli.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Appretto",
        "nota": "In teglia, finché è soffice.",
        "minuti": 90,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno ben caldo. Fondo asciutto e macchiato.",
        "minuti": 16,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "focacciaGenovese",
    "nome": "Focaccia genovese",
    "sottotitolo": "Salamoia e buchi con le dita.",
    "chip": [
      "Focaccia",
      "Lievitazione",
      "In teglia"
    ],
    "porzioni": null,
    "scelte": [],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina",
        "quantita": "500 g"
      },
      {
        "nome": "Acqua",
        "quantita": "375 g"
      },
      {
        "nome": "Sale nell'impasto",
        "quantita": "12 g"
      },
      {
        "nome": "Olio nell'impasto",
        "quantita": "20 g"
      },
      {
        "nome": "Lievito secco",
        "quantita": "2 g"
      },
      {
        "nome": "Salamoia",
        "quantita": "40 g acqua + 30 g olio + 8 g sale"
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Impasto morbido. Il sale sta nell'impasto; la salamoia bagna i buchi.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Pieghe",
        "nota": "Pieghe a tre. Al suono del timer fai il giro successivo.",
        "minuti": 20,
        "allarme": true,
        "ripetizioni": 3,
        "orologio": "fisso"
      },
      {
        "titolo": "Puntata",
        "nota": "Coperto, volume quasi doppio.",
        "minuti": 90,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Stendi",
        "nota": "Teglia con olio sul fondo. Buchi con le dita, senza schiacciare fino in fondo.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Lievita in teglia",
        "nota": "Di nuovo soffice: i buchi si richiudono un poco.",
        "minuti": 60,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Salamoia",
        "nota": "Emulsione di acqua, olio e sale sulla superficie.",
        "minuti": 2,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno caldo. Fondo dorato, superficie lucida.",
        "minuti": 18,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ],
    "litri": {
      "base": 0.375,
      "scelte": [
        0.375,
        0.75,
        1.5
      ]
    }
  },
  {
    "id": "pizzaAllaPala",
    "nome": "Pizza alla pala",
    "sottotitolo": "Sulla pala, forno al massimo.",
    "chip": [
      "Pizza",
      "Lievitazione"
    ],
    "porzioni": null,
    "scelte": [],
    "impasto": false,
    "ingredienti": [],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Incorda senza scaldare l'impasto.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Pieghe",
        "nota": "Un giro di pieghe, poi coperto.",
        "minuti": 20,
        "allarme": true,
        "ripetizioni": 3,
        "orologio": "fisso"
      },
      {
        "titolo": "Frigo",
        "nota": "Contenitore chiuso in frigorifero.",
        "minuti": 0,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "frigo"
      },
      {
        "titolo": "A temperatura ambiente",
        "nota": "Coperto, prima di stendere.",
        "minuti": 1440,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "ambiente"
      },
      {
        "titolo": "Stendi sulla pala",
        "nota": "Rettangolo, poca farina. Condisci dopo la stesura.",
        "minuti": 8,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno al massimo, leccarda già calda. Gira a metà se il fondo è chiaro.",
        "minuti": 8,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "pizzaContemporanea",
    "nome": "Pizza contemporanea",
    "sottotitolo": "Panetti e cornicione alto.",
    "chip": [
      "Pizza",
      "Lievitazione"
    ],
    "porzioni": null,
    "scelte": [],
    "impasto": false,
    "ingredienti": [],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Sciogli il lievito fresco nell'acqua. Farina, poi sale. Incorda senza scaldare.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Pieghe",
        "nota": "Un giro di pieghe a tre. Ricopri.",
        "minuti": 20,
        "allarme": true,
        "ripetizioni": 3,
        "orologio": "fisso"
      },
      {
        "titolo": "Staglio",
        "nota": "Dividi nei panielli e chiudi le palline.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Frigo",
        "nota": "Contenitore chiuso in frigorifero.",
        "minuti": 0,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "frigo"
      },
      {
        "titolo": "A temperatura ambiente",
        "nota": "Coperto, fino alle ore scelte.",
        "minuti": 1440,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "ambiente"
      },
      {
        "titolo": "Stendi",
        "nota": "Dal centro verso il bordo, cornicione alto. Condisci dopo.",
        "minuti": 5,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno al massimo. Un minuto circa, fondo macchiato.",
        "minuti": 1,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "taglioliniLimone",
    "nome": "Tagliolini al limone",
    "sottotitolo": "Burro, limone e timo.",
    "chip": [
      "Primo",
      "Subito"
    ],
    "porzioni": 2,
    "scelte": [
      2,
      4,
      6
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Tagliolini freschi",
        "quantita": "220 g"
      },
      {
        "nome": "Limone",
        "quantita": "1"
      },
      {
        "nome": "Burro",
        "quantita": "60 g"
      },
      {
        "nome": "Timo",
        "quantita": "4 rametti"
      },
      {
        "nome": "Parmigiano",
        "quantita": "40 g"
      },
      {
        "nome": "Sale",
        "quantita": "q.b."
      },
      {
        "nome": "Pepe",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Acqua",
        "nota": "Poco sale. Grattugia la scorza, senza il bianco.",
        "minuti": 8,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Emulsione",
        "nota": "Fuoco dolce: metà burro, timo, due cucchiai di acqua di cottura.",
        "minuti": 3,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Manteca",
        "nota": "Tagliolini 3 minuti. Fuori dal fuoco: burro freddo, succo, Parmigiano.",
        "minuti": 3,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Impiattato",
        "nota": "Nido alto, scorza, pepe, un rametto di timo.",
        "minuti": 1,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "risottoPorcini",
    "nome": "Risotto ai porcini",
    "sottotitolo": "Porcini e olio al rosmarino.",
    "chip": [
      "Primo"
    ],
    "porzioni": 4,
    "scelte": [
      2,
      4,
      6
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Riso Carnaroli",
        "quantita": "320 g"
      },
      {
        "nome": "Porcini",
        "quantita": "300 g"
      },
      {
        "nome": "Brodo vegetale",
        "quantita": "1 l"
      },
      {
        "nome": "Scalogno",
        "quantita": "1"
      },
      {
        "nome": "Rosmarino",
        "quantita": "2 rametti"
      },
      {
        "nome": "Vino bianco",
        "quantita": "50 ml"
      },
      {
        "nome": "Olio",
        "quantita": "4 cucchiai"
      },
      {
        "nome": "Prezzemolo",
        "quantita": "q.b."
      },
      {
        "nome": "Sale",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Olio",
        "nota": "Un rametto di rosmarino nell'olio tiepido. Poi filtra.",
        "minuti": 10,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Porcini",
        "nota": "A fette, padella vivace, dorati.",
        "minuti": 5,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Risotto",
        "nota": "Tosta il riso a secco. Sfuma col vino, scalogno, brodo un mestolo alla volta.",
        "minuti": 16,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Manteca",
        "nota": "Porcini negli ultimi minuti. Fuori dal fuoco, olio al rosmarino.",
        "minuti": 3,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "pappaAlPomodoro",
    "nome": "Pappa al pomodoro",
    "sottotitolo": "Pane raffermo e basilico.",
    "chip": [
      "Primo"
    ],
    "porzioni": 4,
    "scelte": [
      2,
      4,
      6
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Pomodori pelati",
        "quantita": "600 g"
      },
      {
        "nome": "Pane toscano raffermo",
        "quantita": "250 g"
      },
      {
        "nome": "Brodo vegetale",
        "quantita": "500 ml"
      },
      {
        "nome": "Basilico",
        "quantita": "1 mazzetto"
      },
      {
        "nome": "Aglio",
        "quantita": "2 spicchi"
      },
      {
        "nome": "Olio",
        "quantita": "4 cucchiai"
      },
      {
        "nome": "Sale",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Sugo",
        "nota": "Aglio in camicia nell'olio. Pomodori schiacciati, sobbolliscono.",
        "minuti": 10,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Pane",
        "nota": "Togli l'aglio. Pane a pezzi, brodo caldo.",
        "minuti": 1,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Fuoco dolce, con la frusta, finché il pane si sfalda.",
        "minuti": 12,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Basilico",
        "nota": "Fuori dal fuoco, basilico spezzato a mano. Riposo, poi olio a crudo.",
        "minuti": 5,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "focacciaAiPomodorini",
    "nome": "Focaccia ai pomodorini",
    "sottotitolo": "Semola, pomodorini e origano.",
    "chip": [
      "Focaccia",
      "Lievitazione",
      "In teglia"
    ],
    "porzioni": 6,
    "scelte": [
      4,
      6,
      8
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina tipo 1",
        "quantita": "350 g"
      },
      {
        "nome": "Semola rimacinata",
        "quantita": "150 g"
      },
      {
        "nome": "Acqua",
        "quantita": "380 g"
      },
      {
        "nome": "Lievito di birra secco",
        "quantita": "4 g"
      },
      {
        "nome": "Sale",
        "quantita": "10 g"
      },
      {
        "nome": "Olio nell'impasto",
        "quantita": "30 g"
      },
      {
        "nome": "Olio in superficie",
        "quantita": "30 g"
      },
      {
        "nome": "Pomodorini datterini",
        "quantita": "250 g"
      },
      {
        "nome": "Origano",
        "quantita": "1 cucchiaino"
      },
      {
        "nome": "Basilico",
        "quantita": "q.b."
      },
      {
        "nome": "Fiocchi di sale",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Farine, acqua e lievito. Poi sale e l'olio dell'impasto. Se il lievito è fresco, il triplo.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Lievitazione",
        "nota": "Coperto, finché è morbido e cresciuto.",
        "minuti": 120,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Stendi",
        "nota": "Teglia oliata. Fossette con i polpastrelli.",
        "minuti": 5,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Condisci",
        "nota": "Pomodorini a metà, taglio in su. Origano, basilico, olio e un filo d'acqua.",
        "minuti": 5,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno statico a 220 gradi. Dorata, fiocchi di sale.",
        "minuti": 22,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "insalataFinocchiArance",
    "nome": "Insalata di finocchi e arance",
    "sottotitolo": "Finocchi, Tarocco e taggiasche.",
    "chip": [
      "Contorno",
      "Subito"
    ],
    "porzioni": 4,
    "scelte": [
      2,
      4,
      6
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Finocchi",
        "quantita": "2"
      },
      {
        "nome": "Arance Tarocco",
        "quantita": "2"
      },
      {
        "nome": "Olive taggiasche",
        "quantita": "60 g"
      },
      {
        "nome": "Menta",
        "quantita": "q.b."
      },
      {
        "nome": "Olio",
        "quantita": "3 cucchiai"
      },
      {
        "nome": "Sale",
        "quantita": "q.b."
      },
      {
        "nome": "Pepe rosa",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Finocchi",
        "nota": "Fette sottili, in acqua e ghiaccio.",
        "minuti": 5,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Arance",
        "nota": "Pelale a vivo e tieni il succo. Poi a spicchi.",
        "minuti": 4,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Emulsione",
        "nota": "Succo, olio, un pizzico di sale.",
        "minuti": 1,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Componi",
        "nota": "Finocchi scolati, arance, olive, menta, pepe rosa.",
        "minuti": 2,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "funghiArrostiti",
    "nome": "Funghi arrostiti",
    "sottotitolo": "Cardoncelli, erbe e limone.",
    "chip": [
      "Contorno",
      "Subito"
    ],
    "porzioni": 2,
    "scelte": [
      2,
      4,
      6
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Funghi cardoncelli",
        "quantita": "350 g"
      },
      {
        "nome": "Aglio",
        "quantita": "1 spicchio"
      },
      {
        "nome": "Prezzemolo",
        "quantita": "q.b."
      },
      {
        "nome": "Timo",
        "quantita": "q.b."
      },
      {
        "nome": "Limone",
        "quantita": "0,5"
      },
      {
        "nome": "Olio",
        "quantita": "3 cucchiai"
      },
      {
        "nome": "Sale",
        "quantita": "q.b."
      },
      {
        "nome": "Pepe",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Pulisci",
        "nota": "Panno umido. A metà, nel senso della lunghezza. Vanno bene anche i pleurotus.",
        "minuti": 4,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Rosola",
        "nota": "Padella calda, senza sovrapporli. Sei minuti per lato.",
        "minuti": 12,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Erbe",
        "nota": "Limone, prezzemolo e timo. Subito in tavola.",
        "minuti": 2,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "tortaTenerina",
    "nome": "Torta tenerina",
    "sottotitolo": "Fondente, cuore morbido.",
    "chip": [
      "Dolce"
    ],
    "porzioni": 8,
    "scelte": [
      8,
      12,
      16
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Cioccolato fondente 70%",
        "quantita": "200 g"
      },
      {
        "nome": "Burro",
        "quantita": "100 g"
      },
      {
        "nome": "Uova",
        "quantita": "3"
      },
      {
        "nome": "Zucchero di canna",
        "quantita": "120 g"
      },
      {
        "nome": "Farina 00",
        "quantita": "40 g"
      },
      {
        "nome": "Arancia",
        "quantita": "1"
      },
      {
        "nome": "Zucchero a velo",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Cioccolato",
        "nota": "Bagnomaria con il burro e la scorza. Fai intiepidire.",
        "minuti": 6,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Tuorli",
        "nota": "Tuorli con metà zucchero, chiari e spumosi. Unisci il cioccolato.",
        "minuti": 4,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Albumi",
        "nota": "Albumi a neve con lo zucchero restante. Farina setacciata, dal basso.",
        "minuti": 5,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Tortiera da 22 cm per la dose base. 180 gradi, interno umido.",
        "minuti": 25,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "coppaRicottaAgrumi",
    "nome": "Coppa di ricotta e agrumi",
    "sottotitolo": "Ricotta, miele e agrumi.",
    "chip": [
      "Dolce",
      "Subito"
    ],
    "porzioni": 4,
    "scelte": [
      2,
      4,
      6
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Ricotta di pecora",
        "quantita": "350 g"
      },
      {
        "nome": "Miele",
        "quantita": "2 cucchiai"
      },
      {
        "nome": "Arancia",
        "quantita": "1"
      },
      {
        "nome": "Limone",
        "quantita": "1"
      },
      {
        "nome": "Savoiardi",
        "quantita": "8"
      },
      {
        "nome": "Pistacchi",
        "quantita": "30 g"
      },
      {
        "nome": "Acqua di fiori d'arancio",
        "quantita": "1 cucchiaino"
      }
    ],
    "fasi": [
      {
        "titolo": "Crema",
        "nota": "Ricotta setacciata, miele, fiori d'arancio, metà delle scorze.",
        "minuti": 5,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Biscotti",
        "nota": "Sbriciola i savoiardi, un bicchiere a persona.",
        "minuti": 4,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Componi",
        "nota": "Crema, pistacchi, un filo di miele, le scorze rimaste.",
        "minuti": 3,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "farinataGenovese",
    "nome": "Farinata genovese",
    "sottotitolo": "Ceci, olio in teglia, niente lievito.",
    "chip": [
      "Contorno"
    ],
    "porzioni": 4,
    "scelte": [
      4,
      8
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina di ceci",
        "quantita": "190 g"
      },
      {
        "nome": "Acqua",
        "quantita": "570 g"
      },
      {
        "nome": "Sale",
        "quantita": "8 g"
      },
      {
        "nome": "Olio d'oliva",
        "quantita": "90 g"
      },
      {
        "nome": "Pepe",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Pastella",
        "nota": "Farina e acqua, senza grumi. Il sale no: va all'ultimo.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Riposo",
        "nota": "Coperta, a temperatura ambiente. Ogni tanto mescola e togli la schiuma. Meglio 8 ore.",
        "minuti": 240,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Teglia",
        "nota": "Sale nella pastella. Forno al massimo, teglia vuota già calda, poi l'olio. Versa la pastella lungo un cucchiaio, senza rompere l'olio.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Ripiano basso, 280 gradi se il forno ci arriva. Spessore 7–9 mm: queste dosi sono una teglia da 35 cm.",
        "minuti": 20,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Grill",
        "nota": "Solo il grill, crosta nocciola. Pepe, e si mangia calda.",
        "minuti": 5,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "focacciaDiRecco",
    "nome": "Focaccia di Recco",
    "sottotitolo": "Due sfoglie e stracchino, senza lievito.",
    "chip": [
      "Focaccia",
      "In teglia"
    ],
    "porzioni": 4,
    "scelte": [
      4,
      8
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 00 forte",
        "quantita": "250 g"
      },
      {
        "nome": "Acqua",
        "quantita": "125 g"
      },
      {
        "nome": "Olio",
        "quantita": "25 g"
      },
      {
        "nome": "Sale",
        "quantita": "5 g"
      },
      {
        "nome": "Stracchino",
        "quantita": "500 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Farina, acqua, olio e sale. Liscio, senza lievito. La farina deve reggere la stesura: W sopra 300, oppure manitoba.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Riposo",
        "nota": "Coperto. Poi dividi in due.",
        "minuti": 40,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Stendi",
        "nota": "Due sfoglie da un millimetro. Teglia oliata, stracchino a pezzi, chiudi i bordi. Buchi sopra, olio e sale.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno al massimo, ripiano basso. Dorata, formaggio fuso. Si mangia calda.",
        "minuti": 12,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "lingueDiPizzaRosse",
    "nome": "Lingue di pizza rosse",
    "sottotitolo": "Senza lievito, pomodoro fino al bordo.",
    "chip": [
      "Pizza"
    ],
    "porzioni": 6,
    "scelte": [
      6,
      12
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 00",
        "quantita": "300 g"
      },
      {
        "nome": "Acqua",
        "quantita": "160 g"
      },
      {
        "nome": "Sale",
        "quantita": "10 g"
      },
      {
        "nome": "Passata di pomodoro",
        "quantita": "700 g"
      },
      {
        "nome": "Olio",
        "quantita": "q.b."
      },
      {
        "nome": "Origano",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Farina, acqua e sale. Senza lievito. Coperto.",
        "minuti": 8,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Riposo",
        "nota": "Il panetto si rilassa.",
        "minuti": 20,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Stendi",
        "nota": "Sei pezzi, sfoglia sottile sulla semola. Teglia oliata, passata anche sul bordo.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno statico a 250 gradi, ripiano basso. Fuori, altro olio e origano.",
        "minuti": 15,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "pizzaBonci",
    "nome": "Pizza Bonci",
    "sottotitolo": "Idratazione 80 per cento, un giorno in frigo.",
    "chip": [
      "Pizza",
      "Lievitazione",
      "In teglia"
    ],
    "porzioni": 4,
    "scelte": [
      4,
      8
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 0",
        "quantita": "500 g"
      },
      {
        "nome": "Acqua",
        "quantita": "400 g"
      },
      {
        "nome": "Olio",
        "quantita": "20 g"
      },
      {
        "nome": "Sale",
        "quantita": "10 g"
      },
      {
        "nome": "Lievito di birra secco",
        "quantita": "0,5 g"
      },
      {
        "nome": "Semola",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Farina, lievito e quasi tutta l'acqua. Pausa, poi sale, il resto dell'acqua e l'olio. Impasto molle.",
        "minuti": 25,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Pieghe",
        "nota": "Un giro di pieghe. Ricopri.",
        "minuti": 20,
        "allarme": true,
        "ripetizioni": 3,
        "orologio": "fisso"
      },
      {
        "titolo": "Frigo",
        "nota": "Contenitore chiuso. Almeno 18 ore, meglio 24.",
        "minuti": 1440,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Stendi",
        "nota": "Fuori dal frigo mezz'ora. Teglia oliata, stendi con i polpastrelli sulla semola.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Appretto",
        "nota": "In teglia, finché è alta e soffice.",
        "minuti": 120,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno a 250 gradi. Condisci dopo la stesura, mozzarella a metà cottura se fila troppo.",
        "minuti": 15,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "pizzaSorbillo",
    "nome": "Pizza Sorbillo",
    "sottotitolo": "Pochissimo lievito, panetti da 250 g.",
    "chip": [
      "Pizza",
      "Lievitazione"
    ],
    "porzioni": 3,
    "scelte": [
      3,
      6
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 0",
        "quantita": "500 g"
      },
      {
        "nome": "Acqua",
        "quantita": "323 g"
      },
      {
        "nome": "Sale",
        "quantita": "15 g"
      },
      {
        "nome": "Lievito di birra fresco",
        "quantita": "0,3 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Sale nella farina. Lievito sciolto nell'acqua. La ricetta pubblicata è 1 g di lievito su 1,55 kg di farina.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Puntata",
        "nota": "Coperto, a temperatura ambiente.",
        "minuti": 60,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Panetti",
        "nota": "Tre panetti da 250 g. Mozza come una mozzarella.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Lievitazione",
        "nota": "Coperti, a temperatura ambiente, finché raddoppiano.",
        "minuti": 480,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Stendi",
        "nota": "Schiaffo con le mani. Pomodoro, basilico, fiordilatte, olio.",
        "minuti": 5,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno al massimo, pietra o leccarda già calda. In forno a legna è un minuto.",
        "minuti": 4,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "pizzaFritta",
    "nome": "Pizza fritta",
    "sottotitolo": "Mezzaluna fritta, ricotta e cicoli.",
    "chip": [
      "Pizza",
      "Lievitazione"
    ],
    "porzioni": 4,
    "scelte": [
      4,
      8
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 0",
        "quantita": "500 g"
      },
      {
        "nome": "Acqua",
        "quantita": "300 g"
      },
      {
        "nome": "Sale",
        "quantita": "15 g"
      },
      {
        "nome": "Lievito di birra secco",
        "quantita": "2 g"
      },
      {
        "nome": "Ricotta",
        "quantita": "400 g"
      },
      {
        "nome": "Provola affumicata",
        "quantita": "200 g"
      },
      {
        "nome": "Cicoli",
        "quantita": "200 g"
      },
      {
        "nome": "Pepe",
        "quantita": "q.b."
      },
      {
        "nome": "Olio di semi per friggere",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Lievito nell'acqua, poi farina e sale. Liscio.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Puntata",
        "nota": "Coperto, a temperatura ambiente.",
        "minuti": 180,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Panetti",
        "nota": "Quattro panetti da 200 g.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Lievitazione",
        "nota": "Coperti, sulla farina.",
        "minuti": 480,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Farcisci",
        "nota": "Disco, ripieno su metà, chiudi a mezzaluna e sigilla. Ricotta, provola a fette sottili, cicoli, pepe.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Frittura",
        "nota": "Olio a 180 gradi. Un minuto per lato. Scola sulla carta.",
        "minuti": 8,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "pizzaPortafoglio",
    "nome": "Pizza a portafoglio",
    "sottotitolo": "Margherita piccola, piegata appena sfornata.",
    "chip": [
      "Pizza",
      "Lievitazione"
    ],
    "porzioni": 4,
    "scelte": [
      4,
      8
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 0",
        "quantita": "350 g"
      },
      {
        "nome": "Acqua",
        "quantita": "250 g"
      },
      {
        "nome": "Lievito di birra fresco",
        "quantita": "1 g"
      },
      {
        "nome": "Sale",
        "quantita": "12 g"
      },
      {
        "nome": "Pomodori San Marzano",
        "quantita": "400 g"
      },
      {
        "nome": "Fiordilatte",
        "quantita": "200 g"
      },
      {
        "nome": "Basilico",
        "quantita": "q.b."
      },
      {
        "nome": "Olio",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "A mano. Sale nell'impasto. Pagnottine piccole.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Lievitazione",
        "nota": "A temperatura ambiente.",
        "minuti": 480,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Stendi",
        "nota": "Dischi piccoli. Pomodoro passato, olio, fiordilatte. Il sugo non esce dal bordo.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno statico a 250 gradi, ripiano basso.",
        "minuti": 10,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Piega",
        "nota": "Appena sfornata, piegala a metà sulla carta. Si mangia in mano.",
        "minuti": 1,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "pizzaRuotaDiCarro",
    "nome": "Pizza ruota di carro",
    "sottotitolo": "Centro sottilissimo, cornicione che non si schiaccia.",
    "chip": [
      "Pizza",
      "Lievitazione"
    ],
    "porzioni": 4,
    "scelte": [
      4,
      8
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 0",
        "quantita": "500 g"
      },
      {
        "nome": "Acqua",
        "quantita": "325 g"
      },
      {
        "nome": "Sale",
        "quantita": "12 g"
      },
      {
        "nome": "Lievito di birra fresco",
        "quantita": "2 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Farina di forza media. Sale alla fine.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Frigo",
        "nota": "Contenitore chiuso. L'impasto deve lasciarsi stendere senza tornare indietro.",
        "minuti": 1080,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Panetti",
        "nota": "Quattro panetti da 220 g. Un'ora coperti.",
        "minuti": 60,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Stendi",
        "nota": "Dita dal centro, fermati a due centimetri dal bordo. Poi falle girare sui pugni: il centro si assottiglia, il cornicione no.",
        "minuti": 8,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Pietra o leccarda calda da un'ora, forno al massimo. Il forno di casa non fa il leopardato del forno a legna.",
        "minuti": 5,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "pizzaAlTegamino",
    "nome": "Pizza al tegamino",
    "sottotitolo": "Tegame unto, impasto alto, fondo fritto.",
    "chip": [
      "Pizza",
      "Lievitazione",
      "In teglia"
    ],
    "porzioni": 4,
    "scelte": [
      4,
      8
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina",
        "quantita": "500 g"
      },
      {
        "nome": "Acqua",
        "quantita": "400 g"
      },
      {
        "nome": "Lievito di birra fresco",
        "quantita": "4 g"
      },
      {
        "nome": "Olio",
        "quantita": "20 g"
      },
      {
        "nome": "Sale",
        "quantita": "16 g"
      },
      {
        "nome": "Pomodori pelati",
        "quantita": "400 g"
      },
      {
        "nome": "Mozzarella",
        "quantita": "250 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Acqua a più riprese. Olio, sale per ultimo. Molle.",
        "minuti": 20,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Puntata",
        "nota": "Coperto, a temperatura ambiente.",
        "minuti": 300,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Tegamini",
        "nota": "Quattro tegamini di alluminio, tanto olio, niente carta. Stendi fino al bordo.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Lievitazione",
        "nota": "Nei tegamini, coperti.",
        "minuti": 720,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Pomodoro, forno a 250 gradi. Mozzarella negli ultimi minuti. Fondo dorato, non bianco.",
        "minuti": 23,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "piadinePastaMadre",
    "nome": "Piadine da esubero",
    "sottotitolo": "Esubero di un giorno, padella.",
    "chip": [
      "Pane"
    ],
    "porzioni": 4,
    "scelte": [
      4,
      8
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 0",
        "quantita": "150 g"
      },
      {
        "nome": "Esubero di pasta madre",
        "quantita": "100 g"
      },
      {
        "nome": "Acqua",
        "quantita": "80 g"
      },
      {
        "nome": "Olio",
        "quantita": "2 cucchiai"
      },
      {
        "nome": "Sale",
        "quantita": "6 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Esubero di un giorno al massimo, sciolto nell'acqua. Farina, sale, olio alla fine. Se è licoli, aggiungi farina.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Riposo",
        "nota": "Palla coperta.",
        "minuti": 30,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Palline",
        "nota": "Quattro pezzi. Coperti.",
        "minuti": 60,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Stendi e cuoci in padella rovente, un paio di minuti per lato, girando spesso.",
        "minuti": 12,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "paneRustico",
    "nome": "Pane rustico",
    "sottotitolo": "Pagnotta di casa, farina tipo 1.",
    "chip": [
      "Pane",
      "Lievitazione"
    ],
    "porzioni": 8,
    "scelte": [
      8,
      16
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina tipo 1",
        "quantita": "500 g"
      },
      {
        "nome": "Acqua",
        "quantita": "350 g"
      },
      {
        "nome": "Sale",
        "quantita": "10 g"
      },
      {
        "nome": "Lievito di birra fresco",
        "quantita": "4 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Farina e acqua, pausa breve, poi lievito e sale. Pagnotta di casa, idratazione 70 per cento.",
        "minuti": 20,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Pieghe",
        "nota": "Un giro di pieghe. Ricopri.",
        "minuti": 30,
        "allarme": true,
        "ripetizioni": 2,
        "orologio": "fisso"
      },
      {
        "titolo": "Puntata",
        "nota": "Coperto, finché è quasi doppio.",
        "minuti": 90,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Forma",
        "nota": "Pagnotta. Cestino infarinato o tela.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Appretto",
        "nota": "Finché tiene l'impronta del dito e risale piano.",
        "minuti": 45,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno a 230 gradi, teglia d'acqua sul fondo. Taglio sopra. Dopo 15 minuti, 200 gradi.",
        "minuti": 40,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "paneDiAltamura",
    "nome": "Pane di Altamura",
    "sottotitolo": "Dosi del disciplinare, scala di casa.",
    "chip": [
      "Pane",
      "Lievitazione"
    ],
    "porzioni": 8,
    "scelte": [
      8,
      16
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Semola rimacinata",
        "quantita": "500 g"
      },
      {
        "nome": "Lievito madre",
        "quantita": "100 g"
      },
      {
        "nome": "Sale marino",
        "quantita": "10 g"
      },
      {
        "nome": "Acqua",
        "quantita": "300 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Madre con almeno tre rinfreschi. Acqua a 18 gradi. Venti minuti. In casa non è il DOP: mancano il grano del territorio e il forno a legna.",
        "minuti": 20,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Riposo",
        "nota": "Coperto da un telo spesso.",
        "minuti": 90,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Modellatura",
        "nota": "A mano, la pasta resta nel suo involucro.",
        "minuti": 30,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Rimodellatura",
        "nota": "Un altro giro a mano.",
        "minuti": 15,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno a 250 gradi. Quindici minuti con una teglia d'acqua, poi quarantacinque senza. Crosta croccante a sportello aperto negli ultimi minuti.",
        "minuti": 60,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "paneAiCereali",
    "nome": "Pane ai cereali",
    "sottotitolo": "Farina ai cereali e semi.",
    "chip": [
      "Pane",
      "Lievitazione"
    ],
    "porzioni": 8,
    "scelte": [
      8,
      16
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 0",
        "quantita": "300 g"
      },
      {
        "nome": "Farina ai cereali",
        "quantita": "150 g"
      },
      {
        "nome": "Semi misti",
        "quantita": "50 g"
      },
      {
        "nome": "Acqua",
        "quantita": "340 g"
      },
      {
        "nome": "Sale",
        "quantita": "10 g"
      },
      {
        "nome": "Lievito di birra fresco",
        "quantita": "5 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Semi nell'acqua dieci minuti. Farine, lievito, sale alla fine.",
        "minuti": 20,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Pieghe",
        "nota": "Un giro. Ricopri.",
        "minuti": 30,
        "allarme": true,
        "ripetizioni": 2,
        "orologio": "fisso"
      },
      {
        "titolo": "Puntata",
        "nota": "Coperto, volume quasi doppio.",
        "minuti": 90,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Forma",
        "nota": "Filone. Semi anche sopra, se vuoi.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno a 220 gradi, teglia d'acqua. Dopo 15 minuti, 190 gradi.",
        "minuti": 40,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "panFocaccia",
    "nome": "Pan focaccia",
    "sottotitolo": "Pane morbido in stampo, con olio.",
    "chip": [
      "Pane",
      "Lievitazione"
    ],
    "porzioni": 8,
    "scelte": [
      8,
      16
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 0",
        "quantita": "500 g"
      },
      {
        "nome": "Acqua",
        "quantita": "300 g"
      },
      {
        "nome": "Olio",
        "quantita": "30 g"
      },
      {
        "nome": "Sale",
        "quantita": "10 g"
      },
      {
        "nome": "Zucchero",
        "quantita": "10 g"
      },
      {
        "nome": "Lievito di birra fresco",
        "quantita": "8 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Pane morbido in stampo, non la focaccia genovese. Zucchero e lievito nell'acqua, olio e sale alla fine.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Puntata",
        "nota": "Coperto, finché è soffice.",
        "minuti": 60,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Stampo",
        "nota": "Stampo da plumcake unto. La superficie a livello, un filo d'olio sopra.",
        "minuti": 10,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Appretto",
        "nota": "Finché arriva vicino al bordo.",
        "minuti": 40,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno a 180 gradi. Sforna e falle raffreddare prima di tagliare.",
        "minuti": 35,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "panBauletto",
    "nome": "Pan bauletto",
    "sottotitolo": "Stampo, latte, burro e pasta madre.",
    "chip": [
      "Pane",
      "Lievitazione"
    ],
    "porzioni": 8,
    "scelte": [
      8,
      16
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 0",
        "quantita": "500 g"
      },
      {
        "nome": "Latte",
        "quantita": "250 g"
      },
      {
        "nome": "Pasta madre",
        "quantita": "150 g"
      },
      {
        "nome": "Sale",
        "quantita": "10 g"
      },
      {
        "nome": "Burro",
        "quantita": "50 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Autolisi",
        "nota": "Farina e metà del latte, solo amalgamati. Madre rinfrescata, non un esubero vecchio.",
        "minuti": 15,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Impasta",
        "nota": "Madre e il resto del latte. Sale verso la fine. Burro a pezzi, quando l'impasto è già liscio.",
        "minuti": 20,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Pezzi",
        "nota": "Quattro o cinque pezzi da circa 120 g, pirla e metti nello stampo imburrato.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Lievitazione",
        "nota": "Finché supera di poco il bordo. Non guardare l'ora.",
        "minuti": 300,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno a 160 gradi. Sforma e raffredda su una gratella.",
        "minuti": 40,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "baguette",
    "nome": "Baguette",
    "sottotitolo": "Solo farina, acqua, lievito e sale.",
    "chip": [
      "Pane",
      "Lievitazione"
    ],
    "porzioni": 3,
    "scelte": [
      3,
      6
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 0",
        "quantita": "500 g"
      },
      {
        "nome": "Acqua",
        "quantita": "350 g"
      },
      {
        "nome": "Sale",
        "quantita": "10 g"
      },
      {
        "nome": "Lievito di birra fresco",
        "quantita": "3 g"
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Solo farina, acqua, lievito e sale. Niente olio.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Pieghe",
        "nota": "Un giro. Ricopri.",
        "minuti": 30,
        "allarme": true,
        "ripetizioni": 2,
        "orologio": "fisso"
      },
      {
        "titolo": "Frigo",
        "nota": "Contenitore chiuso.",
        "minuti": 720,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Forma",
        "nota": "Tre filoni, punte strette. Mezz'ora. Poi cinque tagli obliqui.",
        "minuti": 40,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno a 240 gradi, teglia d'acqua sul fondo. Dopo dieci minuti, 200 gradi.",
        "minuti": 25,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  },
  {
    "id": "grissiniStirati",
    "nome": "Grissini stirati",
    "sottotitolo": "Tirati dalle punte, non arrotolati.",
    "chip": [
      "Pane",
      "Lievitazione"
    ],
    "porzioni": 8,
    "scelte": [
      8,
      16
    ],
    "impasto": null,
    "ingredienti": [
      {
        "nome": "Farina 0",
        "quantita": "500 g"
      },
      {
        "nome": "Acqua",
        "quantita": "250 g"
      },
      {
        "nome": "Lievito di birra fresco",
        "quantita": "15 g"
      },
      {
        "nome": "Sale",
        "quantita": "8 g"
      },
      {
        "nome": "Olio",
        "quantita": "50 g"
      },
      {
        "nome": "Semola",
        "quantita": "q.b."
      }
    ],
    "fasi": [
      {
        "titolo": "Impasta",
        "nota": "Farina, acqua, lievito, sale e olio. Rettangolo, olio e semola sopra.",
        "minuti": 15,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Lievitazione",
        "nota": "Coperto.",
        "minuti": 60,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Stira",
        "nota": "Strisce larghe un dito, dal lato corto. Tirale dalle punte, senza arrotolarle, lunghe come la teglia.",
        "minuti": 20,
        "allarme": false,
        "ripetizioni": 1,
        "orologio": "fisso"
      },
      {
        "titolo": "Cottura",
        "nota": "Forno a 200 gradi. Devono seccare, non solo dorare. Freddi prima di staccarli.",
        "minuti": 18,
        "allarme": true,
        "ripetizioni": 1,
        "orologio": "fisso"
      }
    ]
  }
];
