# Inferno: verifica dello stato dopo la revisione pre-freeze

Data: 3 ottobre 2026. Autore: Claude (Cowork), su richiesta di Marco.

Stato verificato: `32554c2` (`main`, già pushato). Confronti con:

- `bce2be1`: Fase 3;
- `9ca3487`: XVII benchmark di Marco;
- `e3f48fb` e `5101303`: revisione teatrale.

Questo documento affianca `REPORT_PRE_FREEZE.md` di Astra e ne controlla le affermazioni. `REPORT_FASE_3.md` non descrive più lo stato dei copioni: le durate e le attestazioni che riporta sono superate.

I numeri di riga si riferiscono a `32554c2`. Accanto a ogni riga ci sono le prime parole del passaggio, così si ritrova anche dopo eventuali modifiche.

## 1. Esito

- **Versi, fatti e cue: confermati.** Si possono congelare.
- **Montaggio: non ancora pronto.**
  - Nei canti allungati dalla revisione teatrale ci sono sezioni stratificate: un commento nuovo dopo ogni blocco di versi, con il vecchio commento di sezione rimasto in coda.
  - Lo stesso passaggio viene detto due o tre volte, e a volte il racconto torna indietro.
- **Proposta (sezione 5): un passaggio di soli tagli prima di congelare il testo.** È in attesa della decisione di Marco: nessuno deve applicarla prima.

## 2. Verificato: regge

- Markdown = campo `markdown` del JavaScript: 34/34.
- Da `bce2be1` a `32554c2` cambiano solo i 34 copioni, i 34 content.js e `REPORT_PRE_FREEZE.md`. Nessun altro file è stato toccato.
- Versi: tutte le posizioni sono presenti, una volta sola e in ordine.
  - Le cinque differenze dall'EPUB (VIII 85, XIX 126, XXVI 106, XXXI 90, XXXI 135) sono correzioni giuste di refusi digitali.
  - XIX 126 «per la via» era sfuggito alla Fase 3. È stato corretto nella revisione teatrale (`e3f48fb`).
- XXVI: rispetto alla Fase 3 cambiano solo due passaggi, entrambi corretti.
  - I «due» visitatori vivi dell'aldilà diventano i due precedenti richiamati da Dante.
  - Enea non «doveva fondare Roma»: da lui discende la stirpe di Roma.
- Cue: il giro di Astra ha solo spostato 11 righe `[Schermo: nero pieno]`. Le altre modifiche ai cue risalgono alla revisione teatrale (sezione 4).
- Durata, con lo stesso modello di Astra: 1040,5 minuti (Astra: 1041,1). Il dettaglio per canto è nell'Appendice D.
- Fatti controllati, tutti corretti:
  - V: Gianciotto «della famiglia dei signori di Rimini»; Guido Novello nipote di Francesca.
  - VII: Machiavelli, licenziamento nel 1512 e arresto nel 1513; lettera a Vettori; Principe XXV.
  - XI: lezioni di Galileo del 1588; Cicerone, leone e volpe; Principe XVIII; fiorino dal 1252.
  - XV: Eliot e la guerra; Little Gidding del 1942; conferenza otto anni dopo; Brunetto nelle bozze.
  - XVIII: la battuta di Terenzio non è di Taide; Dante la conosce tramite Cicerone.
  - XIX: fonte del battistero demolito nel 1576; Anagni 1303; ultime parole di Beatrice su Clemente V; Valla.
  - XX: Tiresia; Aronta; Manto e la diversa genealogia dell'Eneide; Marco Lombardo.
  - XXVIII: Libro della Scala; Asín Palacios nel 1919; ambasceria di Brunetto anteriore alle traduzioni.
  - XXIX: pace con i Sacchetti nel 1342; morte di Guido Cavalcanti nell'agosto 1300.
  - XXX: Maestro Adamo arso nel 1281; il Gianni Schicchi di Puccini.
  - XXXIV: Satana nel libro X di Milton; trasformazione non definitiva.
- Canti letti per intero: XVIII, XIX, XX, XXIII, XXIX, XXXI, XXXII, XXXIV, più il XVII di `9ca3487`.
- I controlli sono stati fatti con script di lavoro di Claude, che non sono nel repo.

## 3. Problema principale: sezioni stratificate

Molti canti sono stati allungati con un commento breve dopo ogni blocco di versi. Il vecchio commento di sezione è rimasto in fondo. Chi ascolta sente lo stesso passaggio spiegato più volte, e a volte il blocco vecchio riapre una scena già commentata.

Esempi dalla lettura:

- **XXXII**
  - R. 1082 «Adesso si entra in Antenora…»: arriva dopo che l'episodio di Bocca è già stato commentato (r. 922 «Lo afferra.», r. 930 «Strappa»).
  - R. 1430 «Il canto non risponde» e r. 1482 «Il canto si ferma qui»: la stessa chiusa detta due volte di seguito.
- **XXXI**
  - Anteo depone i due poeti due volte, quasi con le stesse parole: r. 1183-1203 «Lievemente… Non li scaglia» e r. 1410-1412 «Li depone. Non li scaglia».
  - L'impossibilità di comunicare di Nembrotto torna quattro o cinque volte (r. 264 «Rumore enorme», 684, 776, 854).
  - R. 656 «Il primo è Nembrotto»: arriva quando se ne parla già da r. 258.
- **XXIII**
  - «Come un figlio / come suo figlio»: tre volte (r. 511, 518, 744).
  - «Un pensiero ne genera / produce un altro»: tre volte (r. 117, 278, 394).
  - Caifasso calpestato: in tre blocchi (r. 1518, 1638, 1704).
- **XXIX**
  - «Più pio»: spiegato due volte di seguito (r. 402-427 e r. 487 «Dante non dice che la vendetta è giusta»).
  - «Buona scimia»: commentato tre volte (r. 1222, 1284, 1402).
- **II**
  - «Mosse»: spiegato a r. 741 e di nuovo a r. 828-844 («Qui bisogna fermarsi…»).
  - Il ritorno su «Amor mi mosse» arriva dopo la biografia di Beatrice.

Il controllo automatico trova 28 sezioni di questo tipo in 11 canti (Appendice A). È una stima per difetto: non vede, per esempio, quasi tutto il XXIII.

I numeri vanno nella stessa direzione:

- Dalla Fase 3 a oggi la durata stimata cresce di 235 minuti: circa 153 di prosa e 83 di pause.
- Le pause sono passate dal 13% al 18% del tempo stimato.
- Nel XXIII c'è una pausa ogni 7 parole circa.

Il XVII di Marco (`9ca3487`) arriva alla profondità in un altro modo: un paragrafo denso di lettura ravvicinata per sezione, senza ripetere passaggi già detti.

## 4. Problemi minori

- **XVI, r. 999-1002.** «se torni a riveder / le belle stelle…» è presentata come citazione («una frase bellissima»), ma UTET legge «e torni». Il «se» appartiene al verso precedente: «se campi d'esti luoghi bui».
- **Pause consecutive.** 16 casi, 5 nel XXIII (Appendice B).
- **IX.** Il cue `[Schermo: Doré — l'angelo che cammina sullo Stige]` è stato tolto dal copione in `e3f48fb`, ma `Canto_09_cue_immagini.md` lo prevede ancora per tutto il blocco dell'angelo. Va deciso quale dei due vale.
- **XIV.** Nel copione c'è «Capaneo»; nel file dei cue e nel nome previsto per l'immagine c'è «Capaneus». Non rompe niente, ma conviene allinearli.
- **I e XXXIV.**
  - La revisione teatrale ha tolto dal I tre cue «Doré / selva» e il cue «Doré / lonza».
  - Ha tolto da I e XXXIV il cue di testo «l'Amor che move il sole e l'altre stelle», e ha aggiunto al XXXIV `[Schermo: stelle]`.
  - Sono scelte legittime, segnalate solo per la produzione.
- **Regia scritta come prosa.** Elenco nell'Appendice C.
- **`REPORT_FASE_3.md`.** È superato: va letto come documento storico.

## 5. Proposta: passaggio di soli tagli

**Da non applicare prima della decisione di Marco.** In particolare resta da decidere se si accettano canti sotto i 29 minuti.

1. **Solo tagli.** Nessuna frase nuova, salvo raccordi di poche parole dove un taglio lascia una frase monca.
2. **Una volta per concetto.** Di ogni passaggio ripetuto resta la formulazione migliore, nel punto giusto della sequenza: di solito subito dopo i versi che commenta.
3. **Niente riepiloghi in coda che riaprono la scena** («Adesso si entra in…», «Il primo è…»). Vanno tolti o ridotti a ciò che aggiungono.
4. **Restano intatti:** versi, cue, intestazioni e letture personali segnalate. Il Markdown resta uguale al campo `markdown` del JS. Il XXVI è escluso (freeze).
5. **Nessuna durata da raggiungere.** Stima: da 1 a 3 minuti in meno nei canti più colpiti.
6. **Prova registrata.** Dopo i tagli, registrare due canti (per esempio XXIII e XXXII) per tarare le pause e la durata reale.

## Appendice A. Sezioni stratificate trovate dal controllo automatico

Criterio: nella stessa sezione ci sono frasi nuove inserite fra i blocchi di versi e, dopo l'ultimo blocco di versi, un blocco in coda fatto per almeno metà di frasi già presenti nella Fase 3 (`bce2be1`). Il controllo sottostima: non vede le sezioni con un solo blocco di versi (per esempio quasi tutto il XXIII) né i blocchi vecchi ritoccati.

Per ogni caso: sezione, riga in cui comincia il blocco in coda, prime parole del blocco. Va confrontato con il commento nuovo che lo precede nella stessa sezione.

**II** (`canto-02/scripts/Canto_02_talk_finale.md`)

- [vv. 1-6 - La notte e l'uomo solo] riga 86: «Il canto comincia con il mondo che si spegne. Il giorno se ne va.…»
- [vv. 49-57 - Nel Limbo] riga 634: «Adesso Virgilio fa una cosa decisiva: racconta l'origine. Non dice: mi è sembrato giusto…»
- [vv. 67-74 - Amor mi mosse] riga 776: «Io son Beatrice, che ti faccio andare; È la prima volta che il suo…»
- [vv. 109-114 - La discesa] riga 1118: «Beatrice descrive la sua discesa con un paragone durissimo: più veloce di chi scappa…»
- [vv. 115-120 - Così com'ella volse] riga 1190: «Virgilio chiude il racconto. Adesso Dante sa: non si è salvato da solo. Dante…»
- [vv. 139-142 - Un sol volere] riga 1454: «E alla fine arriva la frase che chiude tutto. "Un sol volere è d'ambedue."…»

**III** (`canto-03/scripts/Canto_03_talk_finale.md`)

- [vv. 10-21 - Paura e spinta] riga 199: «Dante legge. Dante ha paura. Dice: "Maestro, il senso lor m'è duro." Il senso…»

**XXII** (`canto-22/scripts/Canto_22_talk_finale.md`)

- [vv. 97-117 - La proposta] riga 1121: «E qui la frode comincia a lavorare. Toschi. Lombardi. Ve ne faccio venire. Il…»
- [vv. 118-151 - La zuffa] riga 1270: «Sguardo in camera. O tu che leggi, udirai novo ludo. Dante si gira verso…»

**XXIV** (`canto-24/scripts/Canto_24_talk_finale.md`)

- [vv. 22-57 - La salita] riga 345: «Qui il canto si fa fatica pura. Roccia. Schegge. Appigli. Virgilio sale come uno…»
- [vv. 58-78 - La voce dal fosso] riga 661: «Dante si rialza. Fa la voce forte. Parla per non sembrare fievole. Ma dal…»
- [vv. 97-120 - Il morso e la cenere] riga 976: «Un serpente colpisce al collo. E il dannato non cade soltanto. Brucia. Si fa…»

**XXV** (`canto-25/scripts/Canto_25_talk_finale.md`)

- [vv. 97-123 - Lo scambio] riga 1043: «Qui Dante chiama fuori anche Ovidio. Cadmo. Aretusa. Non basta. Perché il punto non…»

**XXVII** (`canto-27/scripts/Canto_27_talk_finale.md`)

- [vv. 16-30 - La domanda sulla Romagna] riga 252: «Appena può parlare, quest’anima non chiede chi sia Dante. Non chiede se è vivo.…»
- [vv. 31-57 - Dante risponde] riga 376: «Qui Dante risponde con nomi propri. Ravenna. Forlì. Rimini. Faenza. Cesena. Non è un…»
- [vv. 85-105 - Bonifacio] riga 792: «Ed ecco Bonifacio. Lo principe de’ novi Farisei, Farisei. Il concilio di Caifasso, crocifisso…»
- [vv. 106-111 - Il consiglio] riga 1012: «Qui Guido cede. Non perché abbia dimenticato il male. Perché cerca di starci dentro…»
- [vv. 112-129 - Il diavolo loico] riga 1127: «Questo è il punto perfetto del canto. Arriva Francesco. Ma il nero cherubino lo…»

**XXVIII** (`canto-28/scripts/Canto_28_talk_finale.md`)

- [vv. 1-21 - Le guerre del mondo] riga 129: «Dante parte dicendo una cosa semplice: non bastano le parole. Neanche se le sciogli…»
- [vv. 91-111 - Curio e Mosca] riga 1115: «Curio ha la lingua tagliata. Lui che aveva sommerso il dubbio in Cesare. Una…»
- [vv. 112-142 - Bertran de Born] riga 1298: «Contrapasso. La parola arriva alla fine. Dopo che abbiamo già visto il principio per…»

**XXIX** (`canto-29/scripts/Canto_29_talk_finale.md`)

- [vv. 1-36 - Geri del Bello] riga 402: «Più pio. Non più giusto. Più vicino. Dante non risolve qui la vendetta. Non…»
- [vv. 58-84 - I falsatori malati] riga 831: «Adesso la bolgia si fa vedere. Corpi malati. Corpi corrosi. Corpi che si grattano…»
- [vv. 85-120 - Griffolino d’Arezzo] riga 1089: «Griffolino è un caso perfetto. Bruciato nel mondo per una beffa. Dannato qui per…»

**XXX** (`canto-30/scripts/Canto_30_talk_finale.md`)

- [vv. 46-90 - Maestro Adamo] riga 610: «Poi il canto si ferma su un corpo solo. Maestro Adamo. Un liuto umano.…»

**XXXI** (`canto-31/scripts/Canto_31_talk_finale.md`)

- [vv. 82-111 - Fialte e Briareo] riga 980: «Fialte è la forza che non è sparita. È stata solo legata. Cinque giri…»

**XXXII** (`canto-32/scripts/Canto_32_talk_finale.md`)

- [vv. 70-123 - L’Antenora e Bocca degli Abati] riga 1082: «Adesso si entra in Antenora. Traditori della patria o della parte. E qui succede…»
- [vv. 124-139 - I due in una buca] riga 1460: «Poi l’ultima immagine. Due in una buca. Uno sopra. Uno sotto. A me il…»

Totale: 28 sezioni.

## Appendice B. Pause consecutive (probabili cuciture)

- I: righe 840 (Pausa. + Lungo silenzio.); 842 (Lungo silenzio. + Pausa lunga.)
- X: righe 730 (Lungo silenzio. + Pausa.)
- XXIII: righe 308 (Pausa lunga. + Pausa.); 711 (Pausa lunga. + Pausa.); 1095 (Pausa lunga. + Pausa.); 1679 (Pausa lunga. + Pausa.); 2002 (Pausa lunga. + Pausa lunga.)
- XXIV: righe 1575 (Pausa lunga. + Pausa lunga.)
- XXV: righe 156 (Pausa lunga. + Pausa lunga.); 1239 (Pausa lunga. + Pausa lunga.)
- XXVII: righe 1189 (Pausa. + Pausa lunga.)
- XXVIII: righe 416 (Pausa lunga. + Pausa lunga.)
- XXXI: righe 198 (Pausa. + Pausa lunga.)
- XXXIII: righe 961 (Lungo silenzio. + Pausa lunga.)
- XXXIV: righe 1572 (Lungo silenzio. + Pausa lunga.)

## Appendice C. Indicazioni di regia scritte come prosa parlata

Erano già presenti prima della revisione teatrale. Non sono errori, ma il teleprompter le mostra come testo da leggere: serve una convenzione (tenerle, metterle fra parentesi quadre, o toglierle).

- IV: riga 743 «che dal palco devi dire piano.»
- XIX: riga 466 «Si volta di lato.»; riga 467 «Sottovoce, con la voce di Virgilio:»; riga 472 «Si gira di nuovo, verso la buca.»; riga 473 «Ad alta voce:»
- XXII: riga 1270 «Sguardo in camera.»
- XXIII: riga 516 «va detta piano.»
- XXIX: riga 340 «Alza l'indice verso la camera.»; riga 345 «Abbassa il dito, piano.»
- XXX: riga 324 «Si rivolge alla camera, con un mezzo sorriso.»

## Appendice D. Durate stimate per canto

Modello: prosa 130 parole/min, versi 100 parole/min, «Pausa.» 1,2 s, «Pausa lunga.» 2,4 s. Titoli e cue non contano. Stima sul testo, non cronometro.

| Canto | Fase 3 (`bce2be1`) min | Oggi (`32554c2`) min | Parole di prosa oggi | Pause oggi | Quota pause |
|---|---:|---:|---:|---:|---:|
| I | 62,3 | 33,5 | 1977 | 286 | 26% |
| II | 25,2 | 31,2 | 2250 | 150 | 14% |
| III | 28,2 | 30,3 | 2317 | 118 | 11% |
| IV | 29,8 | 29,4 | 2190 | 107 | 10% |
| V | 40,0 | 39,5 | 3236 | 192 | 14% |
| VI | 32,7 | 32,3 | 2515 | 182 | 16% |
| VII | 30,8 | 30,8 | 2314 | 161 | 14% |
| VIII | 32,7 | 32,5 | 2399 | 191 | 15% |
| IX | 19,9 | 29,9 | 2164 | 137 | 14% |
| X | 23,0 | 29,4 | 1858 | 194 | 20% |
| XI | 17,3 | 29,5 | 2205 | 156 | 16% |
| XII | 20,1 | 30,0 | 1970 | 167 | 17% |
| XIII | 18,8 | 29,4 | 1861 | 161 | 17% |
| XIV | 18,2 | 29,1 | 1801 | 179 | 19% |
| XV | 36,6 | 36,7 | 2910 | 203 | 16% |
| XVI | 18,3 | 29,5 | 1969 | 167 | 17% |
| XVII | 18,2 | 29,9 | 2102 | 140 | 14% |
| XVIII | 16,9 | 29,1 | 1803 | 191 | 20% |
| XIX | 21,1 | 28,7 | 2026 | 121 | 12% |
| XX | 17,2 | 29,1 | 1925 | 185 | 19% |
| XXI | 17,1 | 29,2 | 1831 | 189 | 20% |
| XXII | 26,6 | 29,7 | 1886 | 177 | 17% |
| XXIII | 18,5 | 34,2 | 1979 | 285 | 25% |
| XXIV | 18,1 | 29,4 | 1706 | 190 | 20% |
| XXV | 18,0 | 29,5 | 1706 | 194 | 20% |
| XXVI | 38,3 | 38,3 | 2908 | 207 | 16% |
| XXVII | 18,7 | 29,1 | 1825 | 185 | 19% |
| XXVIII | 17,3 | 28,6 | 1724 | 187 | 20% |
| XXIX | 15,7 | 28,7 | 1669 | 212 | 22% |
| XXX | 17,3 | 29,3 | 1718 | 196 | 21% |
| XXXI | 15,2 | 29,0 | 1659 | 203 | 21% |
| XXXII | 16,9 | 28,9 | 1701 | 198 | 21% |
| XXXIII | 21,6 | 28,8 | 1603 | 182 | 19% |
| XXXIV | 18,7 | 28,3 | 1674 | 191 | 20% |
| **Totale** | **805,1** | **1040,5** | | | **18%** |

