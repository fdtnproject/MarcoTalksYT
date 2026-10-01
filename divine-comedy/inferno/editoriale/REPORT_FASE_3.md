# Fase 3 · Espansione editoriale dell'Inferno — report per la revisione generale

Data: 1 ottobre 2026 · Base: commit `48d2cc2` · Stato: lavoro concluso sui 34 canti, **nessun commit, nessun push**. In attesa della revisione generale di Marco.

## In breve

- Durata della serie: **695,4 → 805,3 min** (+109,9 min, +16%). Nessun canto è stato allungato per raggiungere una durata: i compatti stanno fra 15,2 e 18,3 minuti (il XXII approvato ne dura 26,6), i pieni fra 17,3 e 32,7 (il XV approvato 36,6).
- 31 canti modificati, 3 intatti: XV e XXII (approvati: verificati, nessun intervento necessario), XXVI (freeze: verificato, nessun errore oggettivo).
- Versi: **4720/4720**, in ordine, senza omissioni, duplicazioni o varianti. md = JS: **34/34**. Nessun asset toccato.
- I fili di serie sono stati chiusi dove la storia li chiudeva: tempo del viaggio, cinque nomi di Ciacco, Bonifacio fuori scena, discesa di Cristo, stelle, profezie, Montaperti, pietà, lingua. Il «folle» resta fra II e XXVI; «com'altrui piacque» resta solo nel XXVI.
- Autori esterni entrati in questa fase, solo dove cambiano la lettura del verso: Kafka (III, poi XXV), Machiavelli (VII), Calvino (IX), Auerbach (X), Galileo (XI, richiamato nel XXXIV), Borges (XII, poi XXXIII), Melville (XIV), Boccaccio lettore (V, XVI, XVII), Shakespeare/Iago (XVII), Dostoevskij (XIX), Puccini (XXX), Milton e Blake (XXXIV); Asín Palacios come studio nel XXVIII. Eliot (XV) e Goethe (XXVI) erano già nei prototipi. Gli autori protetti sono sempre in parafrasi.

## 1. Controlli globali

| Controllo | Esito |
|---|---|
| md = campo `markdown` del JS | 34/34 identici |
| Altri campi del JS | 34/34 invariati (verifica con `node vm`) |
| Versi `>` contro il source UTET | 4720/4720, ordine corretto, nessuna omissione, duplicazione o variante |
| Eccezione nota | VIII v. 85: il source UTET ha «Io regno» (refuso OCR); il copione ha «lo regno». Source non toccato |
| Riprese di versi nel commento | tutte righe semplici (nessun falso duplicato); ogni ripresa nuova controllata sul testo UTET del repository |
| Asset | nessuno: immagini, cue esterni, metadata, HTML, CSS, renderer, stage, source intatti |
| File modificati | 63 (31 canti × md + JS); nessun file nuovo nel repository oltre a questo report |
| Diff | 62 files changed, 5669 insertions(+), 263 deletions(-) |
| Cue | solo cue di testo o di nero, aggiunti con ragione editoriale: I (verso finale del Paradiso), VI (cinque nomi + ritorno al nero), X («ebbe»), XXVIII (cinque nomi + nero), XXXIV (verso finale del Paradiso). Nessun cue esistente modificato o tolto, nessuna immagine nuova |
| Titoli di sezione | uno solo cambiato: III, «Gli ignavi e noi» → «Davanti alla legge» |
| Righe vuote multiple, pause doppie, rischi di lista nel renderer | nessuno |

### File modificati (elenco esatto)

```
divine-comedy/inferno/canto-01/canto01-content.js
divine-comedy/inferno/canto-01/scripts/Canto_01_talk_finale.md
divine-comedy/inferno/canto-02/canto02-content.js
divine-comedy/inferno/canto-02/scripts/Canto_02_talk_finale.md
divine-comedy/inferno/canto-03/canto03-content.js
divine-comedy/inferno/canto-03/scripts/Canto_03_talk_finale.md
divine-comedy/inferno/canto-04/canto04-content.js
divine-comedy/inferno/canto-04/scripts/Canto_04_talk_finale.md
divine-comedy/inferno/canto-05/canto05-content.js
divine-comedy/inferno/canto-05/scripts/Canto_05_talk_finale.md
divine-comedy/inferno/canto-06/canto06-content.js
divine-comedy/inferno/canto-06/scripts/Canto_06_talk_finale.md
divine-comedy/inferno/canto-07/canto07-content.js
divine-comedy/inferno/canto-07/scripts/Canto_07_talk_finale.md
divine-comedy/inferno/canto-08/canto08-content.js
divine-comedy/inferno/canto-08/scripts/Canto_08_talk_finale.md
divine-comedy/inferno/canto-09/canto09-content.js
divine-comedy/inferno/canto-09/scripts/Canto_09_talk_finale.md
divine-comedy/inferno/canto-10/canto10-content.js
divine-comedy/inferno/canto-10/scripts/Canto_10_talk_finale.md
divine-comedy/inferno/canto-11/canto11-content.js
divine-comedy/inferno/canto-11/scripts/Canto_11_talk_finale.md
divine-comedy/inferno/canto-12/canto12-content.js
divine-comedy/inferno/canto-12/scripts/Canto_12_talk_finale.md
divine-comedy/inferno/canto-13/canto13-content.js
divine-comedy/inferno/canto-13/scripts/Canto_13_talk_finale.md
divine-comedy/inferno/canto-14/canto14-content.js
divine-comedy/inferno/canto-14/scripts/Canto_14_talk_finale.md
divine-comedy/inferno/canto-16/canto16-content.js
divine-comedy/inferno/canto-16/scripts/Canto_16_talk_finale.md
divine-comedy/inferno/canto-17/canto17-content.js
divine-comedy/inferno/canto-17/scripts/Canto_17_talk_finale.md
divine-comedy/inferno/canto-18/canto18-content.js
divine-comedy/inferno/canto-18/scripts/Canto_18_talk_finale.md
divine-comedy/inferno/canto-19/canto19-content.js
divine-comedy/inferno/canto-19/scripts/Canto_19_talk_finale.md
divine-comedy/inferno/canto-20/canto20-content.js
divine-comedy/inferno/canto-20/scripts/Canto_20_talk_finale.md
divine-comedy/inferno/canto-21/canto21-content.js
divine-comedy/inferno/canto-21/scripts/Canto_21_talk_finale.md
divine-comedy/inferno/canto-23/canto23-content.js
divine-comedy/inferno/canto-23/scripts/Canto_23_talk_finale.md
divine-comedy/inferno/canto-24/canto24-content.js
divine-comedy/inferno/canto-24/scripts/Canto_24_talk_finale.md
divine-comedy/inferno/canto-25/canto25-content.js
divine-comedy/inferno/canto-25/scripts/Canto_25_talk_finale.md
divine-comedy/inferno/canto-27/canto27-content.js
divine-comedy/inferno/canto-27/scripts/Canto_27_talk_finale.md
divine-comedy/inferno/canto-28/canto28-content.js
divine-comedy/inferno/canto-28/scripts/Canto_28_talk_finale.md
divine-comedy/inferno/canto-29/canto29-content.js
divine-comedy/inferno/canto-29/scripts/Canto_29_talk_finale.md
divine-comedy/inferno/canto-30/canto30-content.js
divine-comedy/inferno/canto-30/scripts/Canto_30_talk_finale.md
divine-comedy/inferno/canto-31/canto31-content.js
divine-comedy/inferno/canto-31/scripts/Canto_31_talk_finale.md
divine-comedy/inferno/canto-32/canto32-content.js
divine-comedy/inferno/canto-32/scripts/Canto_32_talk_finale.md
divine-comedy/inferno/canto-33/canto33-content.js
divine-comedy/inferno/canto-33/scripts/Canto_33_talk_finale.md
divine-comedy/inferno/canto-34/canto34-content.js
divine-comedy/inferno/canto-34/scripts/Canto_34_talk_finale.md
divine-comedy/inferno/editoriale/REPORT_FASE_3.md
```

Canti non toccati: `canto-15`, `canto-22`, `canto-26`.

## 2. Tabella per canto

Durate col modello concordato (prosa 130 parole/min, versi 100, Pausa 1,2 s, Pausa lunga 2,4 s; ±10%).

| Canto | Atto | Cat. | Prima | Dopo | Onde aggiunte | Momento da palco nuovo | Cambiamento principale |
|---|---|---|---|---|---|---|---|
| I | 1 | M | 59,6 | 62,3 | 4, brevi | il verso finale del Paradiso sullo schermo | le «cose belle» = stelle e l'ultimo verso della Commedia (anello col XXXIV); Isaia; «Miserere» |
| II | 1 | P | 22,4 | 25,2 | 3 | «folle» da sola, poi silenzio | Enea e Paolo = Impero e Chiesa (Cacciaguida, «ottanta canti»); il «folle» piantato |
| III | 1 | P | 23,0 | 28,2 | 4 (+ un richiamo di due righe al I: «a metà dei giorni, si va alle porte») | — | Celestino e l'inizio del filo di Bonifacio; Kafka, «Davanti alla legge» |
| IV | 1 | P | 26,7 | 29,8 | 3 | — | Stazio e Rifeo; il possente senza nome (filo della discesa di Cristo); «sesto» |
| V | 2 | M | 37,0 | 40,0 | 4 (+ una riga su «attende») | — | la storia vera dopo il nome; Guinizelli; il libro «corretto» da Francesca |
| VI | 2 | P | 29,8 | 32,7 | 4 | la grafica dei cinque nomi | i cinque nomi (dispositivo di serie); la catena delle profezie; «per le mamme» |
| VII | 2 | P | 27,9 | 30,8 | 3 (+ due righe di seme e una correzione di formulazione) | — | Machiavelli e la Fortuna; Boezio → angelo; seme di Nembrot |
| VIII | 2 | P | 30,2 | 32,7 | 3 (+ due tocchi brevi) | lungo silenzio sulle ciglia «rase» | Argenti/Adimari dichiarato; Dite e Firenze; la prima roccia rotta e Nicodemo |
| IX | 3 | P | 16,6 | 19,9 | 4 | mani sugli occhi | Virgilio mago; il velame; Calvino e Guido che salta le tombe |
| X | 3 | M | 18,3 | 23,0 | 4 (+ tre semi/richiami brevi) | «ebbe» sullo schermo, lungo silenzio | Guido e il confino (Dante priore); «ebbe»; Uberti e piazza della Signoria |
| XI | 3 | C | 14,7 | 17,3 | 4, tutte brevi | — | Galileo misura l'Inferno; il fiorino; l'ora (sabato, prima dell'alba) |
| XII | 3 | P | 16,4 | 20,1 | 4 (+ una lettura ravvicinata su Chirone) | — | Borges/Asterione; la seconda roccia ed Empedocle; Chirone |
| XIII | 3 | M | 14,3 | 18,8 | 4 (+ chiusura di cura) | il ramo secco spezzato | lo stile di Pier della Vigna; Catone come contraddizione aperta; la città di Marte e il Mosca; riga di cura |
| XIV | 3 | P | 15,1 | 18,2 | 3 (+ un seme) | — | Capaneo e Achab; il Veglio: i fiumi sono lacrime |
| XV | 3 | P | 36,6 | 36,6 | — | — | approvato: nessuna modifica |
| XVI | 3 | C | 15,4 | 18,3 | 4 (+ una riga sull'Acquacheta) | la mano destra del giuramento | Montaperti da tre lati; «belle stelle»; «Questa comedìa» |
| XVII | 3 | P | 14,7 | 18,2 | 4 | «Qui si è fermato» + lungo silenzio | Boccaccio a Santo Stefano di Badia (metà stagione); Scrovegni; Iago |
| XVIII | 4 | C | 14,0 | 16,9 | 4, brevi | — | il ponte del giubileo; «sipa»; Taide e il piccolo errore |
| XIX | 4 | P | 15,6 | 21,1 | 4 | il suggeritore | Bonifacio al centro del filo (Anagni); il suggeritore; Valla; il Grande Inquisitore |
| XX | 4 | C | 14,0 | 17,2 | 4 | camminare all'indietro | la pietà; Virgilio corregge l'Eneide; stelle e libertà; la luna all'alba del sabato |
| XXI | 4 | C | 13,2 | 17,1 | 3 (+ due inserti brevi) | l'appello come un sergente | «la mia comedìa»; la data di Malacoda e la bugia; Caprona; l'appello |
| XXII | 4 | C | 26,6 | 26,6 | — | — | approvato: nessuna modifica |
| XXIII | 4 | P | 14,3 | 18,5 | 4 | «Uno come me» (ipocrita = attore) | la madre e il fantolin (Purg. XXX); oro e piombo; ipocrita = attore; i ponti crollati sopra Caifa |
| XXIV | 5 | C | 15,1 | 18,1 | 3 (+ tre inserti brevi) | seduto a terra, poi in piedi | la fenice del sabato; la quarta profezia e i Malaspina; i serpenti di Lucano |
| XXV | 5 | P | 14,9 | 18,0 | 2 grandi + 2 raccolte di filo | dito sulle labbra, dieci secondi | Kafka, «La metamorfosi»; il «Taccia» e i poeti del IV; Capaneo misura Vanni Fucci; i cinque fiorentini |
| XXVI | 5 | M | 38,3 | 38,3 | — | — | freeze: nessuna modifica |
| XXVII | 5 | P | 14,2 | 18,7 | 3 (+ due raccolte di filo) | il sillogismo contato sulle dita | Buonconte e la lagrimetta; il Guido del Convivio; fine del filo di Bonifacio; il sillogismo sulle dita |
| XXVIII | 5 | P | 13,8 | 17,3 | 4 | la lanterna mimata | Maometto contestualizzato e il Libro della Scala; il Mosca chiude i cinque nomi; contrapasso |
| XXIX | 5 | C | 12,7 | 15,7 | 3 (+ un'ora del viaggio) | il dito di Geri | Geri e la vendetta; le febbri di Guido e di Dante; la luna e l'una del sabato |
| XXX | 5 | P | 13,8 | 17,3 | 3 | Schicchi chiede le attenuanti alla camera | Gianni Schicchi e Puccini (il pubblico come Dante); il fiorino e il Casentino; Sinone |
| XXXI | 6 | C | 13,0 | 15,2 | 1 grande + 2 brevi | il grido di Nembrot | Babele, il DVE e Adamo (Par. XXVI); il grido di Nembrot; mente, volere, forza |
| XXXII | 6 | C | 14,3 | 16,9 | 2 + quattro raccolte di filo | il finale sospeso «dimmi ’l perché» | la fama rovesciata; Caina e Francesca; Montaperti e Gano; il finale sospeso |
| XXXIII | 6 | M | 15,8 | 21,6 | 4 grandi + 3 raccolte di filo | il verso e dieci secondi di silenzio | dura terra (Calvario rovesciato); Borges, «Il falso problema di Ugolino»; Enea e Francesca; Branca Doria |
| XXXIV | 6 | M | 13,1 | 18,7 | 2 grandi + chiusura dei fili | lo sguardo in alto, l'ultimo verso della Commedia | Milton; le «cose belle» e le stelle; il nome mai detto di Cristo; l'orologio fino all'alba di Pasqua |

## 3. Analisi della serie

### Durate per atto

| Atto | Canti | Prima | Dopo | Media dopo |
|---|---|---|---|---|
| I · la soglia | I–IV | 131,7 | 145,5 | 36,4 |
| II · le passioni | V–VIII | 124,9 | 136,2 | 34,0 |
| III · dentro Dite | IX–XVII | 162,1 | 190,4 | 21,2 |
| IV · il mercato | XVIII–XXIII | 97,7 | 117,4 | 19,6 |
| V · le metamorfosi | XXIV–XXX | 122,8 | 143,4 | 20,5 |
| VI · il ghiaccio | XXXI–XXXIV | 56,2 | 72,4 | 18,1 |
| **Totale** | I–XXXIV | **695,4** | **805,3** | 23,7 |

### Distribuzione monumentali / pieni / compatti

- **Monumentali** (7): I 62,3, V 40,0, X 23,0, XIII 18,8, XXVI 38,3, XXXIII 21,6, XXXIV 18,7 — totale 222,7 min, media 31,8.
- **Pieni** (17): II 25,2, III 28,2, IV 29,8, VI 32,7, VII 30,8, VIII 32,7, IX 19,9, XII 20,1, XIV 18,2, XV 36,6, XVII 18,2, XIX 21,1, XXIII 18,5, XXV 18,0, XXVII 18,7, XXVIII 17,3, XXX 17,3 — totale 403,3 min, media 23,7.
- **Compatti** (10): XI 17,3, XVI 18,3, XVIII 16,9, XX 17,2, XXI 17,1, XXII 26,6, XXIV 18,1, XXIX 15,7, XXXI 15,2, XXXII 16,9 — totale 179,3 min, media 17,9.

**Cambi di categoria:** nessuno formale. Le etichette restano quelle di Marco, ma vanno lette come peso e non come durata:
- X, XIII, XXXIII e XXXIV sono monumentali per quello che chiudono e per la loro intensità, non per i minuti (fra 19 e 23). XIII in particolare non va allungato: le regole sul suicidio limitano giustamente le onde.
- XIX resta pieno (21 min) ma è di fatto il pilastro dell'Atto IV: tutto il filo di Bonifacio passa da lì.
- XXII resta compatto nel ritmo ma dura 26,6 min (approvato così): è più lungo dei due canti che lo affiancano (XXI 17,1, XXIII 18,5).
- XXXII resta compatto: finisce sospeso, e il XXXIII ne raccoglie la domanda.

### Fili di serie

| Filo | Stazioni | Stato |
|---|---|---|
| Viaggio e tempo | VII tramonto del venerdì · XI due ore prima dell'alba del sabato · XX la luna tramonta, alba del sabato · XXI le sette del mattino (data di Malacoda; giorno discusso: 8 aprile o 25 marzo, entrambi venerdì) · XXIX poco dopo l'una · XXXIV sera del sabato, poi «da man», poi l'alba di Pasqua | chiuso |
| Cinque nomi di Ciacco | VI (grafica) · X Farinata · XIII Mosca annunciato · XVI Tegghiaio e Rusticucci · XXVIII Mosca, grafica ripresa, «Arrigo. Non lo troveremo mai.» | chiuso |
| Bonifacio fuori scena | III Celestino · VI «tal che testé piaggia» · XV · XVIII annunciato · XIX Anagni · XXVII «Lo principe de’ novi Farisei», Palestrina, l'antecessore | chiuso |
| Folle | II piantato · XXVI (freeze) | invariato; il XXV prepara il freno del XXVI senza toccarlo |
| Discesa di Cristo / rocce rotte | IV dichiarato · VIII la porta · XII la frana («qui ed altrove») · XXI l'«altrove» e la data · XXIII tutti i ponti sopra Caifa · XXXIII «la terra resta chiusa» · XXXIV «l'uom che nacque e visse sanza pecca»: il nome di Cristo non è mai detto | chiuso |
| Stelle | I «cose belle» + verso finale del Paradiso · XVI «belle stelle» · XXXIV «de le cose belle / che porta il ciel» + lo stesso cue del I | chiuso ad anello |
| Profezie su Dante | VI Ciacco · X Farinata · XV Brunetto · XXIV Vanni Fucci, «il quarto, l'ultimo dell'Inferno» | chiuso |
| Montaperti | X (Bocca annunciato) · XVI (Tegghiaio) · XXXII «Farinata l'ha vinta. Tegghiaio l'aveva prevista. Bocca l'ha tradita.» | chiuso |
| Federico II | X · XIII · XX · XXVIII la fine della casa (Manfredi, Corradino) | chiuso |
| Catone | XIII · XIV · XVI · XXIV (l'esercito di Lucano) → Purgatorio | aperto verso la prossima stagione |
| La lingua | VII Pape Satàn · XVIII «sipa» · XXXI Babele, DVE e Adamo · XXXIII «il bel paese là dove ’l sì suona» | chiuso |
| La pietà | V · XX dichiarato · XXXII Bocca · XXXIII Alberigo: «lo lascio decidere a te» | chiuso |
| La fama | VI, XIII, XV, XVI, XXIV, XXVII, XXXI · XXXII «Del contrario ho io brama» | chiuso |
| Comedìa | XVI prima volta · XX «l'alta mia tragedia» · XXI «la mia comedìa», ultima volta | chiuso |
| Ospiti che tornano | Kafka III → XXV · Borges XII → XXXIII | chiuso |
| Semi per il Purgatorio | XXIII la madre e il fantolin (Purg. XXX) · XXVII Buonconte (Purg. V) · XXXIV la montagna e l'alba | aperti di proposito |

### Momenti da palco

Al massimo uno per canto, tutti diversi e senza asset nuovi: gesti (mani sugli occhi, camminare all'indietro, seduto/in piedi, dito sulle labbra, lanterna mimata, dito di Geri, conteggio sulle dita), voce (suggeritore, appello, grido di Nembrot), silenzi (X, XXV, XXXIII), uno sguardo alla camera (XXX), un oggetto (il ramo secco del XIII), una struttura (il finale sospeso del XXXII), uno schermo (I e XXXIV). Dove la proposta chiedeva costumi, luci o immagini nuove (mantello dorato, cielo stellato, Carpeaux, Bruegel, la pagina di Poetry, la maschera di Arlecchino) il momento è stato rifatto con il solo corpo e la voce.

### Citazioni della base corrette sul testo UTET

Varianti trovate nelle riprese già presenti nei copioni (non nei versi `>`, che erano già corretti): IX «Ver è ch'altra fïata», «Volgiti 'n dietro»; XVI «‘I’ fui’»; XIX «Viemmi retro.’», «mi misi in borsa»; XXIII «ancor si pare / dal Gardingo»; XXIV «falsamente / fu apposto altrui»; XXVII «Il principe / dei novi Farisei»; XXVIII «Seminator di scandalo / e di divisione», «sé stesso»; XXXIII «Anneghi ogni persona», «Dattero per fico»; III «Le anime triste»; VII «Per ch'una… e l'altra langue», «accidïoso»; VIII «spirito maladetto… ch'i'»; IX «Simile con simile»; XIII la terzina senza «per disdegnoso gusto»; XVI «A costoro». Tutte riportate alla forma UTET. Restano, volutamente, le parafrasi in prosa moderna (es. «Le sue rotazioni non hanno tregua»), che non si presentano come citazioni.

### Episodi ancora deboli o da guardare

1. **Lo squilibrio fra i primi atti e gli ultimi.** I canti I–VIII durano in media 35 minuti (lo erano già nella base); quelli di Malebolge e del ghiaccio 17–19. Il I, a 62 minuti, è un'eccezione che pesa su tutta la serie. In questa fase non ho tagliato oltre le ripetizioni reali: se Marco vuole una serie più omogenea, il prossimo intervento è una cura dimagrante del I (e forse del V, VI, VIII), non altre onde altrove.
2. **Il finale di stagione.** Il XXXIV chiude quasi tutti i fili e dura 18,7 minuti: per contenuto è un finale, per durata è un canto medio. A mio parere la differenza va fatta dalla regia (il momento delle stelle), non da altre onde: è una scelta di produzione che lascio a Marco.
3. **XI e XVIII** restano canti di servizio (la mappa, l'ingresso in Malebolge). Le onde li rendono vivi, ma non diventeranno memorabili come i canti che preparano.
4. **XXIX e XXXI** sono raccordi riusciti ma brevi (15–16 min): Geri e le febbri nel primo, Babele nel secondo reggono il canto, il resto è passaggio.
5. **XV** (approvato, 36,6 min) ora spicca nell'Atto III, dove gli altri canti stanno fra 17 e 23 minuti. Non è un difetto, ma è una differenza di peso da tenere presente nel montaggio.

### Punti aperti per Marco

- **XV**: è ancora presente il segnaposto `[Schermo: testo — DA SCEGLIERE (Marco): la riga di Eliot da Little Gidding, II, con "Londra, 1942"]` della fase prototipi. Va deciso prima della pubblicazione.
- **XIII**: la riga di cura in chiusura rimanda alla descrizione del video («In descrizione trovi dove chiedere aiuto»): il riferimento va messo e verificato al momento della pubblicazione.
- **XXX**: il copione nomina «O mio babbino caro» ma non prevede musica. Se Marco la vuole, serve una registrazione libera da diritti (la musica di Puccini è libera, le registrazioni no).
- **XXXII**: finisce sulla domanda («dimmi ’l perché», lungo silenzio), dopo la linea guida. È l'unica eccezione al formato di chiusura, voluta.
- **XXXIV**: torna sullo schermo il cue del I con l'ultimo verso della Commedia. Il cielo stellato e la luce blu della proposta sono scelte di regia, non inserite.
- **La data del viaggio**: il VII dice «tramonto del venerdì santo», il XXI spiega che il giorno è discusso (UTET/Chimenz preferisce il 25 marzo) e che erano due venerdì. Coerente così; se Marco preferisce una sola formula, è una riga nel VII.
- **Semi di Purgatorio** (XXIII, XXVII, XXXIV): sono promesse alla prossima stagione. Se la serie non proseguisse, si possono togliere senza toccare il resto.

## 4. Dettaglio per canto

Per ogni canto: durata prima/dopo, onde aggiunte, onde scartate rispetto alla proposta, cambiamento principale, interpretazioni personali dichiarate, fonti delicate.

## Canto I · la selva — MONUMENTALE (resta)
- Durata: 59,6 → 62,3 min.
- Onde aggiunte: 4, brevi.
  1. «Nel mezzo» e Isaia 38,10 (*in dimidio dierum meorum vadam ad portas inferi*): il primo verso contiene già la porta del III.
  2. Seme del naufrago (vv. 22–24): «Ricordati di quest'uomo… Lui a riva non ci arriverà» (prepara Ulisse, senza nominarlo).
  3. Le «cose belle» del v. 40 sono le stelle: tornano in Inf. XXXIV 137 e nell'ultimo verso della Commedia. **Momento da palco**: il verso finale del Paradiso da solo sullo schermo al v. 40 (unico cue nuovo).
  4. «Miserere di me»: la prima volta che Dante parla a qualcuno; il latino della preghiera che si spezza nel volgare della paura.
- Scartate: «Cattivo e discacciato» (Boezio, Convivio II xii): il prologo sull'esilio regge da solo e il ritorno al verso cambiava poco. Convivio IV xxiii (35 anni): il copione ha già il ragionamento 35 = metà di 70.
- Tagli: «La sintesi delle tre fiere» ridotta alla triade e alla progressione (ripeteva fiera per fiera).
- Correzioni oggettive: versi '>' allineati a UTET (51 apostrofi tipografici; v. 9 «scorte,»; v. 76 senza «, il discorso di Virgilio è aperto al v. 67); riprese dei vv. 3 e 109–111 nel commento portate da '>' a righe semplici (falsi duplicati).
- Interpretazioni personali: nessuna nuova importante; l'eco di Isaia è data come lettura dei commentatori.
- Fonti delicate: Isaia 38,10 e uso del cantico di Ezechia nelle Lodi dell'Ufficio dei defunti (Ufficio attestato dall'VIII–IX sec.; contenuto delle Lodi verificato su un libro d'ore del XV sec.); nota UTET ai vv. 37–40 («cose belle: le stelle, cfr. Inf. XXXIV 137»).
- Fili piantati: naufrago → XXVI; stelle/«cose belle» → XXXIV (da raccogliere lì); «porte» → III.
- Revisione finale (citazioni): «Le cose belle / che porta il cielo» (anticipazione) → «che porta il ciel», perché il copione dice «con le stesse parole».

## Canto II · le tre donne — PIENO
- Durata: 22,4 → 25,2 min.
- Onde aggiunte: 3.
  1. Enea e Paolo come Impero e Chiesa; la risposta arriva in Paradiso XV: Cacciaguida accoglie Dante come Anchise accolse Enea, e gli dice in latino che il cielo gli è aperto «due volte» (i commentatori ci sentono Paolo). «Io non Enea, io non Paolo»: ottanta canti dopo il poema lo accoglie come tutti e due.
  2. Seme «folle» (v. 35). **Momento da palco**: la parola detta da sola, poi lungo silenzio; «tornerà sulla bocca di un uomo che la chiamata non l'ha aspettata» (prepara il XXVI senza svelarlo).
  3. Beatrice persona: prima occorrenza del nome nel poema, la tradizione Portinari da Boccaccio, la morte nel 1290, la promessa finale della Vita Nova («dicer di lei quello che mai non fue detto d'alcuna») che qui comincia a essere mantenuta.
- Scartate: La notte di Enea (Eneide VIII), ottima fonte ma senza far cambiare suono a «io sol uno»; Amleto: il copione dice già, con parole sue, che il pensiero da solo paralizza; il confronto avrebbe confermato, non cambiato, la lettura.
- Nota: la proposta diceva «sessanta canti» fino a Par. XV; sono ottanta (Inf. III–XXXIV, Purg., Par. I–XV). Corretto nel copione.
- Interpretazioni personali: nessuna nuova; il legame con Paolo è attribuito ai commentatori.
- Fonti delicate: Par. XV 25–30 (UTET: «O sanguis meus… bis unquam coeli ianua reclusa?»); Vita Nova, ultimo capitolo; identificazione Portinari come tradizione da Boccaccio.

## Canto III · la porta — PIENO
- Durata: 23,0 → 28,2 min.
- Onde aggiunte: 4 (+ un richiamo di due righe al I: «a metà dei giorni, si va alle porte»).
  1. Un inferno fatto dall'amore: la risposta medievale passa per la libertà; ritorno a «il senso lor m'è duro», chiuso più avanti da «Ecco il senso duro della porta» quando i dannati vogliono passare il fiume (vv. 121–126).
  2. Celestino V al posto di «Non importa chi è»: l'eremita eletto nel luglio 1294, la rinuncia dopo cinque mesi, Bonifacio eletto undici giorni dopo, la voce delle pressioni di Caetani, la canonizzazione del 1313. Primo anello del filo di Bonifacio («Non lo vedremo. Ma lo sentiremo nominare»).
  3. Le foglie: Omero, poi Virgilio sulla stessa riva; Dante riscrive l'Eneide VI davanti al suo autore e le fa cadere «una per volta».
  4. Kafka, *Davanti alla legge*, al posto della predica «Gli ignavi e noi» (titolo di sezione cambiato): la speranza che tiene fuori contro la speranza da lasciare per entrare; ritorno a «mai non fur vivi».
- Scartate: «Più lieve legno» (Purg. II, Caronte dio → demonio) fusa in due righe nell'onda delle foglie; Ungaretti: non cambia la lettura del verso (e il testo è protetto); il colpo di coda Benedetto XVI e la ricezione (Petrarca, Silone): accumulo.
- Interpretazioni personali: «Io credo che sia questo il senso duro… è il posto dove arriva chi ci ha camminato da solo»; «Io qui sento: nessuno si perde in massa»; «Io lo vedo qui, nel vestibolo» (l'uomo di Kafka).
- Fonti delicate: nota UTET ai vv. 59–60 («quasi certamente» Celestino; voci delle pressioni di Caetani; canonizzazione 1313); Iliade VI 146–148, Eneide VI 309–312; Kafka, *Vor dem Gesetz* (pubblico dominio, parafrasato).
- Revisione finale (citazioni): ripresa della base «Le anime triste di coloro» → «L’anime triste di coloro» (UTET).

## Canto IV · il Limbo — PIENO
- Durata: 26,7 → 29,8 min.
- Onde aggiunte: 3.
  1. La lanterna dietro le spalle: l'egloga IV letta come profezia, Stazio salvo «per te poeta fui, per te cristiano», la lanterna che illumina chi viene dopo; Rifeo, il personaggio dell'Eneide in Paradiso, «il poeta che lo ha scritto no». Ritorno a «Sanza speme vivemo in disio».
  2. Il Possente senza nome: verificato su UTET, il nome di Cristo non compare mai nei 4720 versi dell'Inferno; la discesa lascia segni (porta senza serratura, frana, ponti crollati) — filo di serie dichiarato: «ogni volta che troveremo una roccia rotta, sapremo perché». Ritorno a «Io era novo in questo stato».
  3. Sesto: l'esule senza corona, il sogno di Par. XXV («ritornerò poeta…»), Raffaello che lo dipinge nel Parnaso accanto a Omero e Virgilio: «la corona che Firenze non gli ha mai dato».
- Scartate: Saladino e Averroè (il copione li tratta già); Par. XIX (l'uomo nato sull'Indo) e Purg. XXX (Virgilio che sparisce): accumulo dopo Stazio e Rifeo; il conteggio sulle dita come momento da palco (gesto meccanico; il canto ha già il suo buio finale «ove non è che luca»). Raffaello solo a parole: nessuna immagine nuova (diritti dei Musei Vaticani da verificare).
- Interpretazioni personali: «Io credo che Dante questa ferita non la chiuda mai… una delle cose più oneste di tutto il poema».
- Fonti delicate: Purg. XXII 67–73 e Par. XX 67–69 (UTET); Eneide II 426–427; Matteo 27,51; Par. XXV 7–9; Raffaello, Parnaso (1510–1511).

## Canto V · Francesca — MONUMENTALE
- Durata: 37,0 → 40,0 min (aggiunte ≈ 3,5 min, tagliate ≈ 0,6 di parafrasi doppie).
- Onde aggiunte: 4 (+ una riga su «attende»).
  1. «Attende»: nella primavera del 1300 l'assassino è vivo, il suo posto all'Inferno è già pronto (Gianciotto muore nel 1304).
  2. Francesca parla con la scuola di Dante: Guinizelli «Foco d'amore in gentil cor s'apprende», la Vita Nova «Amore e 'l cor gentil sono una cosa». «Io credo che sia per questo che tra poco crollerà… in quella voce sente la sua.»
  3. La storia vera, subito dopo che Dante pronuncia il nome: Polenta e Malatesta, Paolo capitano del popolo a Firenze nel 1282 («quasi certamente l'aveva visto», nota UTET), le cronache che tacciono, la leggenda di Boccaccio, Dante che morirà a Ravenna ospite del nipote di Francesca, «nella città che lei non ha voluto nominare».
  4. Il libro corretto: nel romanzo è Ginevra a baciare Lancillotto; Francesca racconta il contrario («a me sembra che anche il libro si sia piegato»), prova filologica della chiusura «Amor è soggetto. Lei mai». Più una riga su Boccaccio e il Decameron «Prencipe Galeotto».
- Scartate: Flaubert/Girard («la legione delle sorelle»): conferma la tesi ma non cambia il verso; Le coppie eterne (Caina e i due fratelli): lasciata al XXXII come richiamo; Rodin come momento da palco (nuova immagine da reperire). Andrea Cappellano e Boezio: accumulo.
- Tagli: parafrasi doppie in «Noi leggevamo» e «Galeotto fu il libro».
- Interpretazioni personali: «Io credo… in quella voce sente la sua»; «A me sembra che anche il libro si sia piegato».
- Fonti delicate: note UTET ai vv. 97–102 e 137 (matrimonio intorno al 1275; leggenda della procura; Paolo a Firenze 1282; Guinizelli e Vita Nova XX; Galehaut esorta Ginevra a baciarlo); Gianciotto morto nel 1304; Guido Novello nipote di Francesca.

## Canto VI · Ciacco — PIENO
- Durata: 29,8 → 32,7 min.
- Onde aggiunte: 4.
  1. La focaccia della Sibilla (Eneide VI 417–425): Virgilio rifà il proprio gesto, col fango al posto del miele; il cane di Virgilio diventa un ghiottone. Ritorno a «che solo a divorarlo intende e pugna».
  2. La catena delle profezie: «Ed è solo il primo» — Farinata, Brunetto, Vanni Fucci (Cacciaguida e «sa di sale» restano al XV, che li usa già).
  3. «Giusti son due» e Sodoma (Genesi 18): dieci giusti avrebbero salvato Sodoma; Firenze ne ha due («io qui sento»).
  4. I cinque nomi come dispositivo di serie, con grafica sullo schermo (stesso formato del cue già presente nel XVI): «Quattro li ritroveremo. Uno no.» Arrigo, il piccolo mistero. **Momento da palco**: i cinque nomi sul nero.
  5. Per le mamme (Par. XIV 64–66): la stessa regola al contrario; lo stesso corpo, a Ciacco per soffrire di più, ai beati per amare di più. Ritorno a «più senta il bene, e così la doglienza».
- Cue nuovi: 2 (i cinque nomi; ritorno al nero pieno).
- Scartate: Boccaccio e il Ciacco del Decameron (IX 8): curiosità, non cambia il verso. Parafrasi della profezia lasciate: servono a capire la politica.
- Interpretazioni personali: l'eco di Sodoma («io qui sento»).
- Fonti delicate: Eneide VI 417–425; Genesi 18,23–32; Par. XIV 64–66 (UTET); Arrigo non identificato con certezza.

## Canto VII · la Fortuna — PIENO
- Durata: 27,9 → 30,8 min.
- Onde aggiunte: 3 (+ due righe di seme e una correzione di formulazione).
  1. Boezio: Dante prende la dea con la ruota e la mette fra gli angeli (due righe dentro la spiegazione già presente).
  2. Machiavelli: il 1513, la lettera a Vettori (il libro «o Dante o Petrarca», la veste «piena di fango e di loto», le «antique corti delli antiqui uomini» come il castello del IV), il Principe XXV (metà nostra, il fiume e gli argini). «Due fiorentini sconfitti. Due risposte opposte.» Ritorno a «Le sue permutazion non hanno triegue»; ponte verso lo Stige: «il fango se lo toglieva di dosso. Noi stiamo per scenderci dentro».
  3. Accidia: tolta una ripetizione tripla; detto subito che l'accidia medievale non è quello che oggi chiamiamo depressione (nota UTET: tedio e angoscia dell'animo, Cassiano); il «demone di mezzogiorno». «Io credo che sia il peccato più frainteso… alla luce hanno chiuso la porta.»
- Seme: «questa voce storpiata» → Nembrot nel XXXI.
- Correzione: «è passata mezzanotte» era detto come fatto; la nota UTET (Porena) contesta il calcolo. Ora: «Molti commentatori… dicono: mezzanotte», con il filo del tempo (tramonto del venerdì santo).
- Scartate: Cellini e «Paix, paix, Satan»: aneddoto che non cambia il verso; Purg. XVIII («Ratto, ratto»): accumulo; il cambio d'abito come momento da palco (costume).
- Interpretazioni personali: «Io credo che sia il peccato più frainteso».
- Fonti delicate: Machiavelli, lettera a F. Vettori del 10 dicembre 1513 e Principe XXV (citazioni brevi); Boezio, Consolazione II; nota UTET ai vv. 97–99 (ora del viaggio) e 121–124 (accidia).
- Revisione finale (citazioni): riprese della base «Per ch'una gente impera / e l'altra langue» → «Per che una gente impera / ed altra langue»; «accidïoso» → «accidioso» (UTET).

## Canto VIII · Dite — PIENO
- Durata: 30,2 → 32,7 min.
- Onde aggiunte: 3 (+ due tocchi brevi).
  1. Il peso di Enea (Eneide VI 413–414): la barca dei morti geme sotto Enea; «Nel secondo canto Dante aveva detto: io non sono Enea. La barca non è d'accordo.» Ritorno a «segando se ne va l'antica prora».
  2. Una questione di famiglia: Argenti era un Adimari (di parte nera; il cavallo ferrato d'argento, Boccaccio); gli antichi commentatori raccontano che un fratello si prese i beni di Dante esiliato e che la famiglia si oppose al ritorno; Par. XVI «l'oltracotata schiatta che s'indraca / dietro a chi fugge». Lettura dichiarata: lo sdegno benedetto è anche vendetta personale. «Io non scelgo fra le due letture. Le tengo insieme.»
  3. La prima roccia rotta (richiamo al IV) e il Vangelo di Nicodemo: «alzate le porte», le sbarre di ferro, il re che le spezza; «Davanti a Dite la stessa scena sta per ripetersi».
- Tocchi brevi: «Io qui sento anche un'altra città. Una città che a un uomo vivo ha chiuso le porte.» **Momento da palco**: «Lungo silenzio» dopo le ciglia «rase d'ogne baldanza».
- Tagli: quattro parafrasi identiche al verso.
- Scartate: Flegiàs nell'Eneide («Discite iustitiam»); le tre porte (Purg. IX); Agostino e le due città: accumulo.
- Correzione/nota: il v. 85 del source UTET (e dell'epub) ha «Io regno», refuso OCR; il copione ha «lo regno», corretto. Il source non è stato toccato.
- Fonti delicate: antichi commentatori su Adimari e beni di Dante (da attribuire sempre a loro); Par. XVI 115–116 (UTET); Vangelo di Nicodemo (Descensus).
- Revisione finale (citazioni): ripresa della base «spirito maladetto, / ti rimani; / ch'i' ti conosco» → «spirito maledetto, / ti rimani, / ch'io ti conosco» (UTET).

## Canto IX · il messo celeste — PIENO
- Durata: 16,6 → 19,9 min.
- Onde aggiunte: 4.
  1. Virgilio mago: la fama medievale (talismani di Napoli, poi la leggenda dell'uovo); «a me sembra che Dante prenda quella fama e la rovesci»: qui il mago è evocato e usato da Erichto. Seme per il XX (Mantova nata senza magia). Ritorno a «ben so il cammin, però ti fa sicuro».
  2. Il velame: la parola di san Paolo (2 Cor 3), la lettera che uccide; Medusa come cuore che diventa pietra («molti la leggono così»).
  3. Il messo: la scena annunciata nell'VIII (Nicodemo) si ripete, «ma questa volta non arriva il re. Arriva un suo messo.»
  4. Calvino, «Leggerezza»: Perseo che guarda Medusa nello scudo; «io ci sento il velame di Dante, il verso come scudo»; nella stessa lezione la novella di Guido Cavalcanti che salta un sepolcro a San Giovanni → seme per il X: «da una di queste tombe si alzerà un padre a chiedere di suo figlio. Il figlio è lui.»
- **Momento da palco**: Marco si copre gli occhi con le mani per «Volgiti indietro e tien lo viso chiuso», poi le abbassa (indicazione scritta come «Sguardo in camera» nel XXII).
- Correzioni (varianti Petrocchi nel commento, categoria A): «Ver è ch'altra fïata» → «Vero è ch'altra fiata»; «Volgiti 'n dietro» → «Volgiti indietro».
- Scartate: Arles e gli Alyscamps (nuove immagini); Freccero e le rime petrose (lettura da studioso, accumulo); la verga di Mercurio ed Ercole con Cerbero; Caravaggio come immagine (diritti Uffizi).
- Interpretazioni personali: «A me sembra… la rovesci»; «Io ci sento il velame di Dante».
- Fonti delicate: Calvino, Lezioni americane, «Leggerezza» (parafrasato, autore protetto); Boccaccio, Decameron VI 9; leggende napoletane su Virgilio (talismani dal XII sec.; l'uovo più tardi).
- Revisione finale (citazioni): ripresa della base «Simile con simile / è sepolto» → «Simile qui con simile / è sepolto» (UTET).

## Canto X · Farinata e Cavalcante — MONUMENTALE (per peso; durata ancora contenuta)
- Durata: 18,3 → 23,0 min.
- Onde aggiunte: 4 (+ tre semi/richiami brevi).
  1. Il disdegno: «cui» = Virgilio per la lettura antica, Beatrice per molti oggi (la nota UTET sostiene Beatrice e respinge Virgilio); il copione diceva come fatto «forse Guido lo ha disdegnato» (Virgilio): ora la domanda è aperta. «Due amici poeti. E una donna che uno dei due ha fatto diventare un cielo. L'altro no.»
  2. Il primo amico: Guido, la dedica della Vita Nova, Dante priore dal 15 giugno 1300, il confino dei capi delle due parti, Sarzana, la morte a fine agosto; «fra i priori che avevano deciso quel confino c'era Dante». «A me sembra… è l'autore che sa, dentro il personaggio che non sa ancora.» Chiusura col salto sulle tombe seminato nel IX: «Il figlio le tombe le scavalcava. Il padre ci ricade dentro.»
  3. Le case degli Uberti: il processo postumo per eresia del 1283 (anche la moglie), le ossa tolte da Santa Reparata, le case rase al suolo e il decreto che vieta di costruire: piazza della Signoria. Ritorno a «ciò mi tormenta più che questo letto».
  4. Auerbach (Mimesis, Istanbul): «un esule che legge un esule»; nell'aldilà di Dante gli uomini diventano più intensamente quello che erano, e l'uomo finisce per riempire la scena più di Dio (parafrasi, autore protetto).
- Richiami e semi: i cinque nomi («Il primo era lui»); la catena delle profezie («Ciacco era stato il primo. Farinata è il secondo»); Bocca degli Abati a Montaperti (Villani) → XXXII; Federico II → il cancelliere del XIII.
- **Momento da palco**: «ebbe» da solo sullo schermo, poi «Lungo silenzio» (un cue nuovo; resta fino al nero già previsto).
- Scartate: «Chi fuor li maggior tui» e Cacciaguida (terzo rimando al Paradiso in pochi canti); il Cardinale e la sua battuta sull'anima.
- Interpretazioni personali: «A me sembra… l'autore che sa»; «Dice una cosa che a me sembra vera» (Auerbach).
- Fonti delicate: nota UTET ai vv. 61–63 (cui = Beatrice), 32, 91–93 (Villani VI 81), 118–120; processo del 1283 (Inquisizione francescana; esumazione da Santa Reparata); decreto sulle case degli Uberti (1266 circa); Villani su Bocca; Auerbach, Mimesis cap. VIII.

## Canto XI · la mappa — COMPATTO
- Durata: 14,7 → 17,3 min.
- Onde aggiunte: 4, tutte brevi.
  1. Galileo misura l'Inferno: le due lezioni del 1588 all'Accademia Fiorentina, i conti sulla voragine e su Lucifero; l'ipotesi (dichiarata come di «alcuni studiosi») che il problema delle strutture nei Discorsi del 1638 gli fosse nato dalla volta dell'Inferno. Ritorno a «di grado in grado, come quei che lassi» e «Siamo qui… sotto c'è ancora quasi tutto».
  2. Il leone e la volpe (Cicerone, De officiis I 41): seme per il XXVII («le mie opere… furono di volpe»), con il rovesciamento di Machiavelli (Principe XVIII) che richiama il VII. Ritorno a «Ma perché frode è de l'uom proprio male».
  3. Il fiorino d'oro (dal 1252): Dante condanna il mestiere che ha fatto ricca la sua città; seme per il XVII (le borse al collo).
  4. L'orologio: Virgilio legge l'ora da un cielo invisibile; un paio d'ore prima dell'alba del sabato santo (nota UTET ai vv. VII 97–99 / XI 113). Filo del tempo.
- Scartate: la Voragine di Botticelli e la mappa grafica «Siamo qui» come immagini (nuovi asset, diritti della Biblioteca Vaticana): resta solo la frase. Aristotele sul denaro sterile e la Genesi: il copione ha già la scala Dio–natura–arte.
- Interpretazioni personali: nessuna nuova.
- Fonti delicate: Galileo, «Due lezioni… circa la figura, sito e grandezza dell'Inferno di Dante» (1588); ipotesi Peterson sui Discorsi (dichiarata); Cicerone, De officiis I 41; Machiavelli, Principe XVIII.

## Canto XII · il Minotauro — PIENO
- Durata: 16,4 → 20,1 min.
- Onde aggiunte: 4 (+ una lettura ravvicinata su Chirone).
  1. Il mito in un minuto al posto di «Basta questo», poi Borges, *La casa di Asterione* (parafrasi, autore protetto): il Minotauro solo, che aspetta un liberatore e quasi non si difende; «Borges ne fa una vittima. Dante ne fa la violenza che si morde da sola. Ma tutti e due lo vedono solo.» Ritorno a «e quando vide noi se stesso morse».
  2. La seconda roccia rotta (richiamo al IV): Virgilio spiega il terremoto della Passione con Empedocle, visto nel Limbo; «ha sentito l'universo tremare d'amore e l'ha spiegato con la filosofia sbagliata». «Io credo che in questa terzina ci sia tutta la sua tragedia.»
  3. Ezzelino e Cunizza: il tiranno nel sangue fino agli occhi, la sorella nel cielo di Venere («D'una radice nacqui e io ed ella»).
  4. Il delitto di Viterbo (1271): Guido di Montfort uccide Enrico di Cornovaglia durante la messa; il cuore in una coppa d'oro sul Tamigi (Villani, nota UTET).
- Lettura ravvicinata: Chirone che si scosta la barba con la cocca; Virgilio che gli parla «dove le due nature son consorti».
- Scartate: il grifone del Purgatorio, Nesso e la camicia di Deianira; la lettura dell'ultima riga di Borges come momento da palco (testo protetto).
- Interpretazioni personali: «Io credo che in questa terzina ci sia tutta la sua tragedia».
- Fonti delicate: Borges (parafrasato); Matteo 27,51; note UTET ai vv. 109–112 e 118–120 (Villani VII 39; Benvenuto); Par. IX 29–32.

## Canto XIII · Pier della Vigna — MONUMENTALE (per peso; durata contenuta)
- Durata: 14,3 → 18,8 min.
- Onde aggiunte: 4 (+ chiusura di cura).
  1. Con la mia rima: Polidoro (Eneide III), le Arpie dallo stesso libro; Virgilio chiede scusa a un albero perché la sua poesia da sola non bastava a farsi credere; «In Virgilio la voce nel legno accusava un delitto altrui. In Dante accuserà se stessa.»
  2. L'uomo delle chiavi (richiamo al X: Federico tra gli eretici): il cancelliere scrittore, le lettere modello d'Europa; «infiammò… infiammati… infiammar», lo stile di cancelleria; Dante che parla così già prima di incontrarlo («Cred'io ch'ei credette ch'io credesse»). Il 1249: accusato, arrestato, accecato; in prigione si toglie la vita (nessun dettaglio sul modo).
  3. Catone: la contraddizione che Dante non scioglie (Agostino contro il suicidio; Catone custode del Purgatorio come simbolo della libertà). «Io credo che sia giusto lasciarla così. Una domanda aperta. Non una sentenza.» Senza citare il verso «come sa chi per lei vita rifiuta», per non presentare il gesto come nobile.
  4. La città di Marte: il resto della statua al Ponte Vecchio, Buondelmonte ucciso la mattina di Pasqua del 1216, il Mosca «l'ultimo dei cinque nomi di Ciacco. Lo ritroveremo».
- **Momento da palco**: un ramo secco spezzato vicino al microfono, lungo silenzio, «Perché mi schiante?».
- Chiusura: dopo la linea guida, una riga sobria («lo sguardo di Dante, dentro la teologia del suo tempo… una sofferenza si può ascoltare, si può curare») e il rimando all'aiuto in descrizione, come raccomandato per i contenuti sul suicidio. Tolte dal copione nuovo le indicazioni sul modo; non usata l'idea, proposta dagli antichi, che a Firenze «ce n'erano troppi».
- Scartate: Tasso e la selva di Saron (terzo albero che sanguina: accumulo); Spitzer e i suoni del legno; le chiavi di Pietro come seme.
- Correzione: «Batista» → «Battista» (forma UTET) nella citazione nuova.
- Fonti delicate: Eneide III 22–68; Agostino, De civitate Dei I; Pier della Vigna (1249); Villani/tradizione su Buondelmonte (1216). **Da fare per Marco**: inserire in descrizione un riferimento di aiuto (un servizio di ascolto e prevenzione attivo in Italia, da verificare al momento della pubblicazione).
- Revisione finale (citazioni): la terzina «che tiene in piedi tutto il canto» era citata senza «per disdegnoso gusto»: ora completa (UTET).

## Canto XIV · Capaneo e il Veglio — PIENO
- Durata: 15,1 → 18,2 min.
- Onde aggiunte: 3 (+ un seme).
  1. La sabbia di Catone (vv. 13–15; Lucano, Farsaglia IX): richiamo al XIII, «Non è all'Inferno. Ma continua ad attraversarlo». Ritorno a «come di neve in alpe sanza vento».
  2. Il re di Tebe e Achab: Capaneo viene dalla Tebaide di Stazio (il poeta salvo del IV: «il poeta del ribelle si salva, il ribelle resta nella sabbia»); Melville, Moby Dick (Achab che colpirebbe il sole; «dal cuore dell'inferno ti colpisco»): «È la stessa grammatica… Melville ce lo fa ammirare. Virgilio, adesso, ce lo impedirà.»
  3. La statua della storia: Daniele 2 e le età di Ovidio; Creta e Saturno; Roma guardata, il piede d'argilla («molti commentatori ci leggono una Chiesa che non regge»); i fiumi: «Acheronte, Stige, Flegetonte… Erano lacrime. Ogni fiume che abbiamo attraversato era fatto di pianto umano.» Cocito annunciato.
- Seme: Capaneo come misura del dannato più superbo → Vanni Fucci (XXV 13–15).
- Scartate: Alessandro in India e le fiamme calpestate; Flegra e i giganti (resta per il XXXI); la grafica del Veglio che si illumina (nuovo asset).
- Interpretazioni personali: nessuna nuova (la lettura della Chiesa è attribuita ai commentatori).
- Fonti delicate: Lucano IX; Stazio, Tebaide X; Melville, Moby-Dick capp. 36 e 135 (pubblico dominio); Daniele 2,31–35; Ovidio, Metamorfosi I.

## Canto XV · Brunetto — PIENO (approvato: solo revisione)
- Durata: 36,6 → 36,6 min. Nessuna modifica.
- Revisione: nessun errore fattuale o ripetizione interna trovati. Controllata la coerenza con i canti riscritti prima: la catena delle profezie (VI, X → XV), Cacciaguida e «sa di sale» (usati qui: tolti dal VI per non anticiparli), la Fortuna (VII), Bonifacio «cattivo fuori scena» (III), Guinizelli «padre» (seminato nel V, stessa grafia), Sodoma (VI: Abramo; qui il fuoco della Genesi: angoli diversi), la casa di Marte (XIII: la statua al Ponte Vecchio; qui il Tresor).
- Resta il segnaposto di Marco nel cue di Little Gidding («DA SCEGLIERE»).

## Canto XVI · i tre fiorentini — COMPATTO
- Durata: 15,4 → 18,3 min.
- Onde aggiunte: 4 (+ una riga sull'Acquacheta).
  1. Montaperti da tre lati: «la cui voce nel mondo su dovria esser gradita» = il consiglio inascoltato di Tegghiaio contro la spedizione del 1260 (nota UTET). «Farinata l'ha vinta. Tegghiaio l'aveva prevista. E più giù, nel ghiaccio, troveremo chi l'ha tradita.» I cinque nomi restano raccolti dal cue già presente.
  2. «Forsan et haec» (Eneide I 203): i tre dannati augurano a Dante la consolazione di Enea; «riveder le belle stelle» richiama le stelle del I (filo stelle → XXXIV).
  3. La corda e il giunco: la corda contro la lonza ora chiama la frode (argomento per la lettura «lonza = frode» citata nel I); il giunco di Catone in Purgatorio I (Catone «incontrato già due volte»: XIII, XIV).
  4. «Questa comedìa»: la prima volta che il poema dice il proprio nome, dentro un giuramento sulla finzione; «Divina» di Boccaccio, nel frontespizio dal 1555. **Momento da palco**: Marco alza la mano destra per il giuramento.
- Scartate: Guglielmo Borsiere e il Decameron I 8; la corda gettata fuori scena e la parola «comedìa» sullo schermo (un solo gesto basta).
- Correzioni/precisioni: il consiglio contro Siena attribuito al solo Tegghiaio (la nota UTET non lo dice di Guido Guerra).
- Fonti delicate: nota UTET ai vv. 40–42 (Villani); Eneide I 203; edizione Giolito 1555.
- Revisione finale (citazioni): ripresa della base «A costoro / si vuol essere cortese» → «A costor» (UTET).

## Canto XVII · Gerione — PIENO (finale di metà stagione)
- Durata: 14,7 → 18,2 min.
- Onde aggiunte: 4.
  1. La locusta dell'abisso: non il Gerione del mito ma le locuste dell'Apocalisse (9,7–10), facce d'uomo e code di scorpione; il dorso più colorato dei tappeti d'Oriente e delle tele di Aracne: «La frode è anche bella da vedere».
  2. Qui si fermò Boccaccio: Firenze, 23 ottobre 1373, Santo Stefano di Badia, la prima lettura pubblica pagata dal Comune; malato, attaccato, se ne rammarica in un sonetto; le Esposizioni si fermano a questi versi; muore due anni dopo. **Momento da palco**: «Qui, a questi versi, si è fermato il primo uomo che ha fatto quello che stiamo facendo noi.» Lungo silenzio, poi il verso dopo, «Come tal volta stanno a riva i burchi».
  3. La scrofa azzurra: gli Scrovegni di Padova, Reginaldo usuraio per i commentatori, il figlio Enrico e la cappella di Giotto (la tradizione dell'espiazione), Benvenuto e la visita di Dante a Giotto; «E a farlo è il padre dell'uomo che ha pagato Giotto».
  4. L'onesto Iago (Otello, I 1 «I am not what I am»): «Otello sale sulla schiena di Iago come Dante su quella di Gerione. Ma Otello non ha nessuno che lo tenga abbracciato. Dante sì.»
- Scartate: il primo volo e i rimandi al «folle volo» (il filo è chiuso nel XXVI) e alla falconeria di Federico; la data sullo schermo (detta a voce: nessun cue nuovo).
- Interpretazioni personali: nessuna nuova esplicita.
- Fonti delicate: Boccaccio, Esposizioni (si interrompono a Inf. XVII 17) e sonetto «Se Dante piange…»; Benvenuto da Imola su Dante e Giotto; identificazione Scrovegni dai commentatori; Apocalisse 9.

## Canto XVIII · Malebolge — COMPATTO
- Durata: 14,0 → 16,9 min.
- Onde aggiunte: 4, brevi.
  1. Il ponte del giubileo (richiamo al I): il primo giubileo, quello di Bonifacio; il ponte di Castel Sant'Angelo diviso in due corsie (nota UTET); «molti studiosi pensano che Dante l'abbia visto»; Bonifacio annunciato per il XIX («qualcuno lo starà aspettando»).
  2. «Sipa»: la parola bolognese (= «sia», nota UTET) con cui Dante misura Bologna; il Dante che studierà i dialetti nel De vulgari eloquentia e troverà il bolognese il più bello; il Marchese, forse l'Obizzo del XII (la nota UTET dà Obizzo o Azzo VIII).
  3. L'ombra d'Argo: Giasone primo navigatore; in Par. XXXIII Nettuno che guarda passare l'ombra di Argo: «un'immagine che Dante tiene per l'ultimo canto del poema».
  4. Taide e il piccolo errore: in Terenzio la risposta adulatrice è del parassita e Taide non c'è; Dante la conosceva dalla citazione di Cicerone senza nomi (nota UTET); «merda», «puttana»: la lingua bassa per la materia bassa, e la Comedìa.
- Scartate: Euripide, Medea (conferma la linea guida senza cambiare il verso); l'ombra della nave sullo schermo (nuova immagine). Corretta l'idea della proposta che «sipa» voglia dire «sì»: per UTET è il congiuntivo «sia».
- Fonti delicate: note UTET ai vv. 28–33, 55–61, 133–135; Villani; De vulgari eloquentia I xv; Par. XXXIII 94–96.

## Canto XIX · Niccolò III — PIENO (alto: di fatto il pilastro dell'Atto IV)
- Durata: 15,6 → 21,1 min.
- Onde aggiunte: 4 (+ momento da palco).
  1. Il fonte rotto (vv. 19–21): il fatto personale, il «suggel» contro chi ne parlava come di un sacrilegio («forse»); per un antico commentatore il ragazzo salvato era un Cavicciuoli, la famiglia di Filippo Argenti (nota UTET; richiamo all'VIII); il fonte demolito nel 1576; richiamo al IV: «Lo stesso fonte. Quello che aveva rotto.»
  2. Il cattivo fuori scena: Bonifacio vivo nel 1300, atteso nella buca; il filo riassunto (III, VI, XVIII); Anagni 1303 e Purg. XX 86–87 («nel vicario suo Cristo esser catto»): «Odia l'uomo. Difende l'ufficio.» → «la reverenza de le somme chiavi».
  3. I papi impilati: Clemente V «nuovo Iasòn» (2 Maccabei 4), l'altro Giasone del XVIII; le ultime parole di Beatrice nel poema (Par. XXX 145–148) sono per questa buca.
  4. La donazione che non c'era: Lorenzo Valla, 1440; «Il male di cui Dante accusa Costantino viene da un documento che Costantino non ha mai scritto.» Ritorno a «che da te prese il primo ricco patre!»
  5. Il Grande Inquisitore (Dostoevskij), in chiusura: Cristo che ascolta, bacia e se ne va; «Certo non chiese se non: ‘Viemmi retro.» «Una frase sola. Oppure un bacio.»
- **Momento da palco**: il suggeritore — Marco si volta di lato e dice sottovoce la battuta di Virgilio, poi si gira verso la buca e la ripete ad alta voce.
- Scartate: la Monarchia all'Indice; Costantino salvo in Par. XX (accumulo).
- Categoria: resta PIENO, ma con Bonifacio al centro è il pilastro dell'Atto IV per contenuto; la durata (21 min) non giustifica l'etichetta monumentale.
- Interpretazioni personali: nessuna nuova esplicita (la lettura del «suggel» è attribuita ai commentatori).
- Fonti delicate: note UTET ai vv. 16–21, 82–87, 115–117; Purg. XX 86–87 e Par. XXX 145–148 (UTET); Anagni 7 settembre 1303; Valla, De falso credita et ementita Constantini donatione (1440); Dostoevskij, I fratelli Karamazov, «Il Grande Inquisitore».
- Revisione finale (citazioni): ripresa della base «mi misi in borsa» → «me misi in borsa» (UTET).

## Canto XX · Indovini — COMPATTO
- Durata: 14,0 → 17,2 min.
- Onde aggiunte: 4 (+ momento da palco).
  1. La pietà (v. 28): il doppio senso compassione/devozione («secondo una lettura molto diffusa»); il filo della pietà nell'Inferno (Francesca, Pier della Vigna, Filippo Argenti) e il rimprovero di Virgilio; poi «io credo»: Dante piange per «la nostra imagine» storta.
  2. Virgilio corregge l'Eneide: in Aen. X Mantova è fondata da un figlio di Manto; qui da uomini qualunque «sanz'altra sorte»; raccoglie il seme del IX (Virgilio mago nel Medioevo); «l'alta mia tragedia» → nel canto che viene «la mia comedìa».
  3. Le stelle e la libertà: Michele Scotto (ancora Federico), Guido Bonatti astrologo del condottiero del XXVII; la risposta di Purg. XVI (il cielo dà l'avvio, non decide); «Io credo che sia questo, per Dante, il vero peccato di questa bolgia.»
  4. La luna della selva (vv. 124–129): «e già iernotte fu la luna tonda» → adesso tramonta: è l'alba del sabato (orologio del viaggio).
- **Momento da palco**: Marco volta le spalle alla camera e cammina all'indietro mentre dice «perché volle veder troppo davante, / diretro guarda, e fa retroso calle»; poi si gira.
- Scartate: Benjamin/Klee, l'angelo della storia (bello ma sposta il canto sulla filosofia della storia); la contraddizione con Purg. XXII (Manto «figlia di Tiresia» fra i limbicoli) — vera, ma solo erudizione in un canto compatto.
- Interpretazione personale: la pietà di Dante come pietà per il corpo umano sfigurato («io credo»); la libertà come vero oggetto della condanna («io credo»).
- Fonti delicate: Aen. X 198–200 (Ocno figlio di Manto); Purg. XVI 73–78 (parafrasi); Michele Scotto e Guido Bonatti (ED); l'ora (luna al confine dei due emisferi «sotto Sobilia»: circa le sei del sabato, lettura comune).

## Canto XXI · Barattieri, Malebranche — COMPATTO
- Durata: 13,2 → 17,1 min.
- Onde aggiunte: 3 (+ due inserti brevi e il momento da palco).
  1. «la mia comedìa» (v. 2): raccoglie l'annuncio del XX; seconda e ultima volta del nome nel poema (la prima nel XVI); nemmeno venti versi dopo «l'alta mia tragedia» di Virgilio: «Tutti e due dicono mia. Solo uno dice alta.»
  2. Caprona (vv. 94–96): agosto 1289, la guarnigione pisana che esce coi patti in mezzo ai nemici; Dante «quasi certamente» fra gli assedianti (nota UTET: «secondo ogni verosimiglianza»); il rovesciamento: «Adesso in mezzo ai nemici c'è lui.» → «veggendo sé tra nemici cotanti.» Prepara il XXII (Campaldino, «Nel canto di prima c'era Caprona, due mesi dopo»).
  3. La data e la bugia (vv. 106–126): terzo luogo rotto dal terremoto della morte di Cristo («qui ed altrove» del XII: «Questo è l'altrove»); Conv. IV xxiii 10 (trentaquattresimo anno, ora sesta) → 1300, le sette del mattino di sabato; il giorno discusso (venerdì santo 8 aprile o 25 marzo: erano venerdì tutti e due); «Io credo che un conto così preciso lo tenga soltanto chi ha perso»; la menzogna del ponte intero, il «truffatore di strada» (Chimenz: «barattiere da trivio»); Virgilio lo scoprirà nel XXIII.
- Inserti: i nomi dei diavoli (Torraca via UTET: Malebranca, Raffacani, Malacoda nei documenti; Alichino = Hellequin → Arlecchino, Treccani); nella trombetta, Virgilio rassicura ma i diavoli «si strizzano l'occhio» (nota UTET ai vv. 124–126): «Quello che ha paura ha visto meglio di quello che sa.» Chiusura: «Malacoda obbedisce. / E mente.»
- **Momento da palco**: l'appello. Marco chiama la decina come un sergente, dieci nomi uno per riga (senza immagini nuove: la maschera di Arlecchino della proposta richiedeva un asset).
- Scartate: l'Arsenale e l'ambasceria veneziana del 1321 (biografia, già toccata la morte a Ravenna nel V); il teatro religioso medievale come onda autonoma (assorbito in una riga su Hellequin); la data del XXIII e il «padre di menzogna» (restano al XXIII).
- Interpretazione personale: Malacoda che tiene il conto «come chi ha perso» («io credo»).
- Fonti delicate: note UTET ai vv. 41–42, 94–95, 109–111, 112–114 (Chimenz preferisce il 25 marzo), 118–123, 124–126; Conv. IV xxiii 10; DVE non usato (già nel XVIII); Treccani, voce «arlecchino».

## Canto XXII · Ciampolo e la zuffa — COMPATTO (approvato)
- Durata: 26,6 min, invariata (nessuna modifica).
- Verifica di coerenza col nuovo XXI: «Il ventunesimo si era chiuso con una trombetta» (sì); «Nel canto di prima c'era Caprona, due mesi dopo» (il XXI ora dice agosto 1289: coerente con Campaldino 11 giugno); «acquattati, dietro uno scheggio» e il topo fra le gatte (coerenti). Nessuna ripetizione reale con le onde nuove del XXI (Caprona nel XXI è breve e non tocca Campaldino né la condanna per baratteria, che restano rivelazioni del XXII).
- Controllo fatti: Campaldino, Bruni (prima schiera, lettera perduta), Corso Donati (Villani), condanne del 27 gennaio e 10 marzo 1302, Nino Visconti (Purg. VIII), Branca Doria (Inf. XXXIII): nessun errore.

## Canto XXIII · Ipocriti, Caifa — PIENO
- Durata: 14,3 → 18,5 min.
- Onde aggiunte: 4 (+ momento da palco).
  1. Come la madre → Purg. XXX: «come suo figlio, non come compagno»; in cima al Purgatorio Dante si volta «col rispitto / col quale il fantolin corre a la mamma» e Virgilio non c'è più («dolcissimo patre»). «Qui la madre lo porta via dal fuoco. Lì il bambino si volta. E non c'è nessuno.» Seme emotivo per la serie.
  2. Oro e piombo: «gente dipinta» = truccata; il dizionario di Uguccione da Pisa (ipocrita = «sopra dorato», etimologia sbagliata: «molto probabilmente da lì viene l'oro di queste cappe», nota UTET); il «piombato vetro» del v. 25 = lo specchio (Conv. III ix 8: «vetro terminato con piombo»). «Nello specchio il piombo fa vedere. Nella cappa il piombo nasconde.»
  3. Il Gardingo: le case e torri degli Uberti rase al suolo nel 1266 sotto i due frati (nota UTET) → il vuoto del X, piazza della Signoria.
  4. Caifasso si contorce (v. 112): la lettura di Francesco da Buti riportata da UTET («vede un cristiano salvato da quella morte che lui aveva voluto»): «L'uomo del calcolo vede il risultato.»
  + Raccolta del XXI: «Noi lo sapevamo dal ventunesimo canto»; tutti i ponti sulla sesta bolgia crollati nel terremoto della morte di Cristo, sopra Caifasso («Forse non è un caso»: UTET «parrebbe»); il frate che cita il Vangelo (Gv 8,44) e prende in giro Virgilio con Bologna (nota UTET: «canzonatoria»).
- **Momento da palco**: «In greco, ipocrita vuol dire attore. — Indica se stesso. — Uno come me. Ma l'attore il trucco lo dichiara. L'ipocrita no.» (al posto del mantello dorato della proposta: niente costumi).
- Correzione: la ripresa «ancor si pare / dal Gardingo» (base, senza «intorno») riportata alla forma UTET «e fummo tali / ch’ancor si pare intorno dal Gardingo.»
- Scartate: Girard, Il capro espiatorio (il rovesciamento è già nel copione; Girard aggiungeva peso accademico, non un verso nuovo); la meraviglia di Virgilio come «Caifa non c'era» (UTET la ritiene improbabile); «mo» e «issa»; la leggenda delle cappe di Federico (UTET: «senza fondamento»).
- Interpretazione personale: nessuna marcata; l'ipotesi «Forse non è un caso» per i ponti è dichiarata come ipotesi.
- Fonti delicate: note UTET ai vv. 25–27, 64, 103–108, 112–114 (Buti), 124–126, 133–136, 142–144; Conv. III ix 8; Uguccione da Pisa, Derivationes; Gv 8,44; Purg. XXX 43–51 (UTET).

## Canto XXIV · Ladri, Vanni Fucci — COMPATTO
- Durata: 15,1 → 18,1 min.
- Onde aggiunte: 3 (+ tre inserti brevi e il momento da palco).
  1. La fenice del sabato (vv. 106–120): nei bestiari la fenice è Cristo che risorge; «E noi siamo al sabato. Il giorno fra la morte e la resurrezione.» «A me sembra che Dante metta qui, proprio oggi, una resurrezione rovesciata.» → «Oh potenza di Dio, quant’è severa».
  2. La quarta profezia (vv. 140–151): la catena del VI chiusa (Ciacco, Farinata, Brunetto, Vanni: «il quarto. E l'ultimo, nell'Inferno»; «Ogni volta più preciso. Questa volta, più cattivo»); il vapor di Val di Magra = Moroello Malaspina (UTET); l'ironia: Dante ospite dei Malaspina in Lunigiana, la lettera a Moroello, l'elogio di Purg. VIII: «La famiglia del fulmine darà un tetto al Bianco che doveva colpire.»
  3. I serpenti di Lucano (vv. 85–90): i nomi dalla Farsaglia IX, il deserto dove i serpenti assalgono l'esercito di Catone; «Più non si vanti» come sfida a Lucano → prepara il «Taccia» del XXV.
- Inserti: «a piè del monte» (v. 21) = il primo sguardo del I; il furto alla sagrestia di San Jacopo e Rampino Foresi «a un passo dalla forca» (nota UTET) + «Una falsa accusa. Dante sa bene che cosa vuol dire» (richiamo al XXII).
- **Momento da palco**: Marco si siede a terra mentre Dante si siede senza fiato; dice seduto «Seggendo in piuma…»; si alza su «E però leva su: vinci l’ambascia» (dalla proposta, adattato al copione).
- Correzione: la ripresa «falsamente / fu apposto altrui» (base, senza «e… già») riportata alla forma UTET «e falsamente già fu apposto altrui.»
- Scartate: la brina come copia della neve con la «penna» che non dura (bella ma solo lettura di parola); Brunetto e il «come l'uom s'etterna» (accumulo); la campagna precisa di Moroello (1302 Serravalle o 1305-6: UTET dice controverso; il copione resta generico).
- Interpretazione personale: la resurrezione rovesciata («a me sembra»).
- Fonti delicate: note UTET ai vv. 85–90, 125–129, 137–139, 145–150; Physiologus/bestiari (fenice = Cristo); Epistola IV a Moroello; Purg. VIII (Corrado Malaspina); il soggiorno in Lunigiana (1306).

## Canto XXV · Metamorfosi — PIENO
- Durata: 14,9 → 18,0 min.
- Onde aggiunte: 2 grandi + 2 raccolte di filo (+ momento da palco).
  1. Kafka, La metamorfosi (ritorno dal III, dove c'era «Davanti alla legge»): Gregor si sveglia insetto senza colpa e dentro resta uomo, ma la voce diventa un verso; in Dante c'è una colpa e dell'uomo non resta niente: «L’anima ch’era fiera divenuta» (l'anima, non il corpo); «e l’altro dietro a lui parlando sputa». «In Kafka la voce si perde. Qui la voce cambia padrone.»
  2. Taccia (vv. 94–99): Lucano e Ovidio sono i poeti della bella scola che nel IV lo fecero «sesto tra cotanto senno»; «Ventun canti dopo, li zittisce»; «Io credo che Dante lo sappia benissimo»: il canto che viene si apre col freno all'ingegno (prepara il XXVI senza toccarlo).
  + Raccolta del XIV: Capaneo misura Vanni Fucci («Eccolo»); «Capaneo sfidava un dio che chiamava Giove. Vanni Fucci fa le fiche a Dio. E lo chiama per nome.»
  + I cinque fiorentini (Cianfa, Agnello, Buoso, Puccio, Francesco Cavalcanti; Gaville e la vendetta dei Cavalcanti, nota UTET): «Il canto che viene comincia da loro» (i «cinque cotali» di XXVI 4).
- **Momento da palco**: il dito dal mento al naso, dieci secondi di silenzio, poi piano «Se tu se’ or, lettore, a creder lento…» (dalla proposta, senza immagini nuove).
- Scartate: Salmace ed Ermafrodito come fonte nascosta del «né due né uno» (erudizione, accumulo su Ovidio); Caco e la versione ovidiana della morte (UTET la collega al XX: bello, ma terzo strato su Ovidio); Cronenberg.
- Interpretazione personale: il «Taccia» come vanto che il XXVI mette sotto freno («io credo»).
- Fonti delicate: note UTET ai vv. 14–15, 43, 94–102, 139–141, 148, 151; Kafka, Die Verwandlung (1915, parafrasi); Inf. IV 102.

## Canto XXVI · Ulisse — MONUMENTALE (FREEZE)
- Durata: 38,3 min, invariata. Nessuna modifica (freeze).
- Verifica: versi 142/142 in ordine, md == js, cue e titoli invariati; nessun errore oggettivo trovato (i due «QUASI» del quote-check sono righe di prosa, falsi positivi).
- Coerenza con i canti nuovi: il XXV ora chiude con «Il canto che viene comincia da loro» (i cinque fiorentini = «cinque cotali», XXVI 4) e con il freno all'ingegno («più lo ingegno affreno», XXVI 21), che il copione del XXVI mette in apertura. Il filo «folle» parte dal II e arriva qui senza modifiche al XXVI.

## Canto XXVII · Guido da Montefeltro — PIENO (alto)
- Durata: 14,2 → 18,7 min.
- Onde aggiunte: 3 (+ due raccolte di filo e il momento da palco).
  1. Una lagrimetta (l'onda grande): il figlio Buonconte, capitano aretino a Campaldino (la battaglia del XXII, Dante dall'altra parte), corpo mai trovato; in Purg. V salvo, col nome di Maria; angelo e diavolo «come per suo padre», ma il diavolo grida «Tu te ne porti di costui l’eterno / per una lagrimetta che ’l mi toglie». «Il padre aveva il saio, la confessione, l'assoluzione di un papa. E si è perso. Il figlio aveva una lacrima. E si è salvato.» «Io credo che qui ci sia tutta la teologia di Dante.» «A Campaldino Buonconte era un nemico. Dante lo salva.» → «ch’assolver non si può chi non si pente».
  2. Il Guido del Convivio: «calar le vele» è l'immagine con cui Dante lo aveva lodato («nobilissimo», Conv. IV xxviii 8, nota UTET); «gli mette in bocca la sua stessa lode. E la rovescia.» La causa: la voce del consiglio (Riccobaldo da Ferrara; UTET: non provato, «voce corrente»): «E Dante l'ha creduta. Per questo il nobilissimo Guido del Convivio è finito qui.»
  3. Bonifacio, chiusura del filo: «Lo principe de’ novi Farisei» = il concilio di Caifasso del XXIII; Palestrina dei Colonna (resa del 1298 col perdono promesso, poi rasa al suolo); l'«antecessor» = Celestino del III: «Il filo di Bonifacio era cominciato lì. E finisce qui. Sempre fuori scena. Sempre con le chiavi in mano.»
  + Forlì 1282 (vv. 43–44): Dante racconta a Guido, senza saperlo, la sua vittoria più famosa; Bonatti, l'astrologo del XX, al suo servizio (seme XX raccolto). «E invece eccoci qui. Più di settecento anni dopo.»
- **Momento da palco**: il sillogismo del cherubino contato sulle dita «come un professore» (uno, due, «per la contradizion che nol consente», tre); poi «Il più astuto degli uomini battuto da un diavolo che ha studiato logica.»
- Correzione: la ripresa «Il principe / dei novi Farisei» (base) riportata alla forma UTET «Lo principe de’ novi Farisei,».
- Scartate: Eliot, Prufrock (secondo Eliot dopo il XV; l'ironia dell'infamia resta in due righe senza autore esterno); «Istra ten va» (Virgilio lombardo); la scena con la pagina di Poetry (immagine nuova).
- Interpretazione personale: la teologia «della direzione del cuore» («io credo»).
- Fonti delicate: note UTET ai vv. 43–45, 67–72, 79–81 (Conv. IV xxviii 8), 85, 86, 100–105, 110–111 (Riccobaldo; «storicamente non è provato»), 121–123; Purg. V 88–108 (UTET); XX 118 (Bonatti).

## Canto XXVIII · Seminatori di discordia — PIENO
- Durata: 13,8 → 17,3 min.
- Onde aggiunte: 4 (+ momento da palco).
  1. La fine di una casa (vv. 7–21): Ceperano (= Benevento 1266, nota UTET: Dante «come altri allora» le confonde), Manfredi figlio di Federico II; Tagliacozzo 1268, Corradino sedicenne decapitato a Napoli; Alardo che vince «sanz’arme», con un consiglio (UTET). Chiude il filo di Federico (X, XIII, XX).
  2. Maometto (vv. 22–42): «Su questi versi serve una parola in più.» La leggenda medievale del Maometto cristiano, chierico, cardinale (UTET/Torraca): per questo è fra gli scismatici; il Libro della Scala tradotto alla corte di Alfonso X (in latino e francese nel 1264), dove Brunetto era stato ambasciatore; Asín Palacios 1919: «Se ne discute ancora. Nessuno l'ha dimostrato. Nessuno l'ha escluso.» «Io qui sento un'ironia che Dante non poteva vedere.» Lo schermo resta nero (la base non aveva Doré su Maometto).
  3. Il Mosca, l'ultimo dei cinque nomi: richiamo al XIII (la statua di Marte, Buondelmonte); grafica del VI ripresa identica; «Li ha cercati. Li ha trovati. Tutti quaggiù. Tranne uno. Arrigo. Non lo troveremo mai.» Filo dei cinque nomi CHIUSO.
  4. Contrapasso (v. 142): unica occorrenza nel poema, in bocca a un dannato; contrapassum, Aristotele, Tommaso (S. Th. II-II 61, 4, nota UTET), Mt 7,2; «Ma io credo che per Dante non sia una vendetta. È una rivelazione.»
- **Momento da palco**: la lanterna mimata — mano sollevata a braccio teso all'altezza della testa su «Di sé faceva a se stesso lucerna, / ed eran due in uno e uno in due» (niente buio in studio né oggetti).
- Cue: aggiunti `[Schermo: testo — "Farinata · Tegghiaio · Iacopo Rusticucci · Arrigo · Mosca"]` e il ritorno `[Schermo: nero pieno]` (ragione editoriale: dispositivo di serie del VI).
- Correzioni: «Seminator di scandalo / e di divisione» (base, citazione alterata) → «seminator di scandalo e di scisma»; «Di sé / faceva a sé stesso / lucerna» → forma UTET «Di sé faceva a se stesso lucerna,».
- Scartate: Pound, Sestina: Altaforte (cambia poco la lettura; biografia delicata); Bertran poeta delle armi (DVE) e la «falsa diceria» storica (terzo «Dante cambia idea» dopo Guido e il Mosca: accumulo); Manfredi salvo in Purg. III (troppi semi di Purgatorio); le polemiche moderne sul passo (attualizzare).
- Interpretazioni personali: l'ironia del Libro della Scala («io qui sento»); il contrappasso come rivelazione («io credo»).
- Fonti delicate: note UTET ai vv. 7–21, 31, 32–33, 106–111, 134–135, 142; Asín Palacios, La escatología musulmana en la Divina Comedia (1919); Liber scalae Machometi (Bonaventura da Siena, 1264).

## Canto XXIX · Geri del Bello, alchimisti — COMPATTO
- Durata: 12,7 → 15,7 min.
- Onde aggiunte: 3 (+ un'ora del viaggio e il momento da palco).
  1. Il debito di sangue (vv. 18–36): Geri cugino del padre di Dante, ucciso da un Sacchetti; la vendetta privata regolata dalle leggi; vendicato «decenni dopo, non sappiamo bene quando»; la pace del 1342 firmata dal fratello Francesco anche per i figli di Dante (nota UTET/Vandelli). «ed in ciò m’ha el fatto a sé più pio»: «Io credo che sia il verso più onesto del canto.»
  2. Le febbri (vv. 46–51): Valdichiana, Maremma, Sardegna = malaria estiva; «probabilmente» la febbre di Guido Cavalcanti (Sarzana, fine agosto 1300, richiamo al X) e di Dante (ritorno da Venezia, Ravenna, metà settembre 1321): «Tra il luglio e il settembre. Dante non poteva saperlo.» (anafora «probabilmente è la febbre che…» voluta).
  3. «buona scimia», due letture: scimmia della natura (richiamo al XI, l'arte «nepote» di Dio: «il nipote falso») oppure, per il commento UTET, «ero bravissimo a fare le imitazioni» — e Capocchio fa subito il verso a Dante sui senesi.
  + L'orologio (v. 10): «E già la luna è sotto i nostri piedi» = la luna del XX, ora agli antipodi: poco dopo l'una del sabato (nota UTET/Porena) → «lo tempo è poco omai che n’è concesso».
- **Momento da palco**: il dito di Geri — Marco alza l'indice verso la camera, lo tiene fermo, «mostrarti e minacciar forte col dito», poi lo abbassa piano.
- Scartate: la «gente vana» senese (brigata spendereccia, Lano del XIII, Sapia di Purg. XIII: accumulo); Egina e i Mirmidoni; le 22 miglia per Galileo (già nel XI); Altaforte/Pound.
- Interpretazione personale: il verso «più onesto» («io credo»).
- Fonti delicate: note UTET ai vv. 10, 27, 28–30, 36, 46–51, 136, 138–139 (Chimenz contro «scimmia della natura»); morte di Guido (Villani) e di Dante (ritorno da Venezia, Villani) con «probabilmente» per la malaria.

## Canto XXX · Falsari, Maestro Adamo, Sinone — PIENO
- Durata: 13,8 → 17,3 min.
- Onde aggiunte: 3 (+ momento da palco).
  1. Gianni Schicchi e Puccini (vv. 31–45): la beffa del testamento di Buoso Donati e «la donna de la torma» (nota UTET); Puccini, Gianni Schicchi (1918), «quella di O mio babbino caro»; il finale in cui Schicchi chiede le attenuanti al pubblico (parafrasi, libretto protetto). «Dante lo condanna. Puccini chiede la grazia a una sala che ride.» Il seme viene raccolto alla fine: «Dante, qui, è come quel pubblico»; «Io credo che Dante qui metta in guardia anche noi. Che guardiamo. Il male, quando diventa spettacolo, diverte.» → «con tal vergogna / che ancor per la memoria mi si gira.»
  2. Il fiorino e i ruscelletti (vv. 61–90): il fiorino del XI (24 carati, Battista e giglio), i tre carati di mondiglia per i conti di Romena, il rogo del 1281 (UTET); il paesaggio più tenero dell'Inferno detto dal corpo più deforme; Dante ospite dei Guidi nel Casentino e le lettere datate «presso le sorgenti dell'Arno» (Epistole VI e VII, «sub fontem Sarni»); «A me sembra che non sia un caso che questo falsario si chiami Adamo… cacciato dal giardino.»
  3. Sinone (v. 118): il cavallo del XXVI, inventato da Ulisse, fatto entrare a Troia dal suo racconto falso (richiamo, nessun intervento sul XXVI).
- **Momento da palco**: Marco si rivolge alla camera col mezzo sorriso di Schicchi e chiede le attenuanti; poi il pubblico viene «accusato» dal finale.
- Scartate: la tenzone con Forese e Purg. XXIII (terzo seme di Purgatorio in pochi canti; la vergogna è già fondata dal confronto Puccini); Alessandro da Romena e l'Epistola II (erudizione e terzo «cambio d'opinione»); Fonte Branda (UTET: probabilmente quella di Romena).
- Interpretazioni personali: Adamo cacciato dal giardino («a me sembra»); il pubblico che ride («io credo»).
- Fonti delicate: note UTET ai vv. 31–32, 42–45, 59–61 (Adamo, 1281), 73–74, 79–81, 88–90, 97–98, 118–120, 131–132; libretto di G. Forzano (solo parafrasi); Epistole VI–VII.
- Nota di produzione (dalla proposta): nessuna musica di Puccini è prevista nel copione; se Marco vuole l'aria, serve una registrazione libera da diritti.

## Canto XXXI · I giganti — COMPATTO
- Durata: 13,0 → 15,2 min.
- Onde aggiunte: 1 grande + 2 brevi (+ momento da palco).
  1. Babele e la lingua (vv. 67–81): raccolta del seme del VII (Pape Satàn: «Eccola»); il trattato sulla lingua (il DVE dei dialetti, richiamo al XVIII): dopo Babele si sarebbe salvato l'ebraico, lingua di Adamo; in Par. XXVI Adamo lo corregge («La lingua ch’io parlai fu tutta spenta / innanzi che all’ovra inconsummabile…»): «Dante cambia idea sulla lingua dentro il suo stesso poema.» «Nessuna lingua è per sempre. Nemmeno la prima. Nemmeno questa, in cui ti sto parlando.» → «così è a lui ciascun linguaggio…».
  2. Mente, volere, forza (vv. 49–57), in chiusura: elefanti e balene sì, giganti no; «ché dove l’argomento de la mente / s’aggiugne al mal volere ed a la possa…» detto senza attualizzare.
  3. Orlando e Gano (vv. 16–18): il corno suonato troppo tardi, il tradimento di Gano → «lo troveremo nel prossimo canto. Nel ghiaccio» (XXXII, «Ganellone»).
- **Momento da palco**: Marco grida a piena voce, una volta sola, «Raphel maì amech zabi almi» (forma UTET), poi silenzio.
- Scartate: i tre monumenti (Monteriggioni, la Pigna, la Garisenda: il copione li ha già, e le immagini non si toccano); Bruegel (immagine nuova); la fama promessa ad Anteo (accumulo sul filo della fama); Orlando in Par. XVIII.
- Interpretazione personale: «Nessuna lingua è per sempre» come lettura di Par. XXVI (detta senza «io credo» perché parafrasa Adamo).
- Fonti delicate: note UTET ai vv. 16–18, 42–45, 52–57, 67, 76–78 (Nembròt costruttore della torre: tradizione patristica, Agostino), 79–81; DVE I vi–vii; Par. XXVI 124–126 (UTET).

## Canto XXXII · Cocito, Bocca degli Abati — COMPATTO (alto)
- Durata: 14,3 → 16,9 min.
- Onde aggiunte: 2 + quattro raccolte di filo (+ finale sospeso).
  1. La fama rovesciata (vv. 91–96): Dante offre la fama («se dimandi fama, / ch’io metta il nome tuo tra l’altre note»), la cosa che tanti avevano chiesto (Ciacco, Pier della Vigna, i tre fiorentini del XVI); Bocca: «Del contrario ho io brama». «Qui in fondo i dannati non vogliono più essere ricordati. Vogliono sparire. A me sembra il segno più chiaro di dove siamo arrivati.»
  2. Caina (raccolta del V): «Caina attende chi a vita ci spense. Eccola. Il posto che aspetta Gianciotto.» I fratelli Alberti uccisi a vicenda (UTET: interessi e odio politico, c. 1286): «Là, due amanti abbracciati per sempre nel vento. Qui, due fratelli abbracciati per sempre nell'odio.» Mordred: lo stesso mondo arturiano del libro di Paolo e Francesca.
  + Cocito = l'ultimo fiume di lacrime del Veglio (XIV): «Tutte le lacrime finiscono qui. E qui gelano.»
  + Bocca = il guelfo del X (Villani, la mano del portabandiera; UTET: «si disse», prove mancanti); «Montaperti, da tre lati. Farinata l'ha vinta. Tegghiaio l'aveva prevista. Bocca l'ha tradita.» (filo Montaperti CHIUSO).
  + Ganellone = Gano (raccolta del XXXI); «là dove i peccatori stanno freschi» e «stare freschi» («secondo alcuni», UTET/Fanfani).
- **Momento da palco**: il finale sospeso. Dopo la linea guida, «Ma laggiù, in quella buca, uno sta ancora mordendo. E Dante gli ha fatto una domanda. / dimmi ’l perché, / Lungo silenzio.» Il canto finisce sulla domanda (unico racconto a cavallo di due canti). Niente cartello «XXXIII» (sarebbe un cue nuovo).
- Scartate: «mamma e babbo» e il DVE (UTET giudica improbabile la lettura «stile tragico»); Carlino de' Pazzi e il castello di Piantravigne (1302, la parte di Dante: accumulo); Tideo come struttura (il copione lo dice già).
- Interpretazione personale: la fama rovesciata come segno del fondo («a me sembra»).
- Fonti delicate: note UTET ai vv. 7–9, 56–57, 61–62, 67–69, 80–81, 115–117, 121–123, 130–132; Villani su Bocca.

## Canto XXXIII · Ugolino, frate Alberigo — MONUMENTALE
- Durata: 15,8 → 21,6 min.
- Onde aggiunte: 4 grandi + 3 raccolte di filo (+ momento da palco).
  1. Dura terra (l'onda grande): le parole dei figli e Giobbe («Di pelle e di carne mi hai vestito», Gb 10,11; «Il Signore ha dato, il Signore ha tolto»), «qualcuno ci sente anche l'ultima cena»; Gaddo e il grido sulla croce; «Ahi, dura terra, perché non t’apristi?» → il terremoto della morte di Cristo seguito per tutta la cantica (porta, frana, ponti): «Qui la terra resta chiusa.» «Io credo che questa torre sia un Calvario rovesciato. Muoiono gli innocenti. E nessuno risorge.» Filo della discesa di Cristo: penultima tappa (chiude nel XXXIV).
  2. Borges, «Il falso problema di Ugolino» (ritorno dal XII, Asterione), in parafrasi; prima, detto onestamente: «Il commento che seguiamo è netto» (UTET: il digiuno lo uccise; l'altra lettura «corre fin dal Trecento», Lana). «Dante non ha voluto che lo sapessimo. Ha voluto che lo sospettassimo.»
  3. La voce di Enea: «Tu vuoi ch’io rinovelli / disperato dolor» = Aen. II 3; Francesca nel V aveva preso la stessa strada («Ma se a conoscer la prima radice… dirò come colui che piange e dice», Aen. II 10): «Le due grandi storie dell'Inferno. Una d'amore. Una d'odio. E parlano con la stessa voce.»
  4. La storia vera (UTET): Meloria, i castelli, Ruggieri che lo chiama a trattare, la torre, marzo 1289; «Dante li chiama tutti figli»; Ruggieri nipote del Cardinale del X; Nino Visconti (XXII) nipote di Ugolino e da lui tradito: «Forse anche per questo Ugolino è qui. Fra i traditori.»
  + Branca Doria (raccolta del XXII: «Te l'avevo promesso»), vivo quando Dante scrive (nel 1325 è ancora documentato: sopravvive a Dante, ED Treccani); Buonconte rovesciato (XXVII): salvezza fino all'ultimo respiro vs anima dannata prima della morte (UTET: «un grosso arbitrio di Dante» teologicamente).
  + Fine del filo della pietà (V → XX → XXXIII): «Per gli uomini del suo tempo, ingannare un traditore era quasi un merito (Torraca via UTET). Il viaggio lo ha cambiato. Se in meglio o in peggio, lo lascio decidere a te.»
  + Il paese del sì (v. 80): l'Italia definita da una parola; «Dopo Babele, una lingua che tiene insieme» (filo della lingua XVIII–XXXI).
- **Momento da palco**: «poscia, più che ’l dolor potè ’l digiuno.» (forma UTET, «potè») e poi dieci secondi pieni di silenzio, nessun gesto (dalla proposta, senza il gruppo di Carpeaux sullo schermo).
- Correzioni di citazioni della base: «Anneghi ogni persona.» → «sì ch’egli annieghi in te ogni persona.»; «Dattero per fico.» → «Dattero per figo.» (UTET); «Più che ’l dolor / potè ’l digiuno.» → verso intero UTET.
- Scartate: la torre ancora in piazza dei Cavalieri (dato turistico); la mano alla bocca (secondo gesto: un solo momento da palco); «maestro e donno» = Gv 13,13 (bello, ma accumulo); Tolomeo e i Maccabei.
- Interpretazioni personali: il Calvario rovesciato («io credo»); il «lo lascio decidere a te» sulla pietà.
- Fonti delicate: note UTET ai vv. 13–14, 22–26, 37–38, 64–66, 73–75 (il verso discusso), 88–90, 118–120, 124–126, 136–138, 142–150; Borges, Nueve ensayos dantescos (parafrasi); Gb 1,21 e 10,11; Mt 27,46; Aen. II 3 e 10.

## Canto XXXIV · Lucifero, le stelle — MONUMENTALE (finale di stagione)
- Durata: 13,1 → 18,7 min.
- Onde aggiunte: 2 grandi + chiusura dei fili (+ momento da palco).
  1. Milton: Lucifero non dice una parola («con sei occhi piangea…»: piange, mastica, sbatte le ali «come una macchina»); il Satana di Paradise Lost che parla benissimo («Meglio regnare all'Inferno che servire in Cielo»); Blake («dalla parte del diavolo senza saperlo»). «Per Milton, una volontà grandiosa. Per Dante, qualcosa che ha smesso di pensare. E di parlare. Il male, per Dante, non è una forza. È una mancanza.» «La modernità ha scelto Milton. Chi dei due avesse ragione, te lo lascio come domanda.»
  2. Le cose belle (raccolta del I e del XVI): «tanto ch’io vidi de le cose belle / che porta il ciel» = le stesse parole di I 40 (nota UTET); il «riveder» dei tre fiorentini; le tre cantiche finiscono con «stelle» (UTET); «È notte. Fra poco, sulla montagna, sarà l'alba di Pasqua.»
  + Chiusure di filo: la porta del III («FECEMI LA DIVINA POTESTATE…») e le tre facce come impotenza, ignoranza, odio («per la maggior parte dei commentatori», UTET); Giuda, Bruto, Cassio = Chiesa e Impero, le due guide del II («Io non Enea, io non Paolo sono»), e i due Bruto (IV); l'uomo «che nacque e visse sanza pecca» chiude il filo del possente senza nome del IV («In tutto l'Inferno il nome di Cristo non viene detto mai. Nemmeno qui.»); l'orologio («Ma la notte risurge»: la sera del sabato, un giorno intero dal «giorno se n'andava» del II; poi «Qui è da man quando di là è sera»); Galileo (XI) e la proporzione del gigante; la montagna di Ulisse (richiamo al XXVI senza toccarlo: «Ulisse la montagna l'ha vista dal mare. Dante ci arriva da sotto.»).
  + Inserti brevi: Vexilla regis, inno del VI secolo cantato nei giorni della Passione («Proprio questi giorni»); il Satana del mosaico del battistero («probabilmente», richiamo al XIX); il ruscelletto forse Lete (UTET: «la traccia del peccato tornerebbe all'Inferno»).
- **Momento da palco**: in chiusura, dopo «In fondo all'Inferno si rivedono le stelle», «Alza lo sguardo.» e torna sullo schermo la scritta del I `[Schermo: testo — "l’Amor che move il sole e l’altre stelle."]`, poi «Lungo silenzio». (Nessun cielo stellato né luci blu: sarebbero immagine e regia nuove.)
- Cue: aggiunto il testo dell'ultimo verso del Paradiso (stesso cue del I; ragione editoriale: chiusura ad anello della stagione).
- Scartate: Shakespeare e il «noblest Roman» (secondo autore esterno nel finale); il montaggio dei fili in tre minuti (ogni filo è chiuso al suo posto; un riassunto finale sarebbe stato teatro); Arrigo (già chiuso nel XXVIII); Bonifacio (chiuso nel XXVII).
- Interpretazione personale: il male come mancanza (dichiarato come lettura di Dante, dottrina della privazione); «te lo lascio come domanda».
- Fonti delicate: note UTET ai vv. 13–15, 38, 64–67, 95–96, 118–120, 127–134 (Lete, ipotesi), 137–139; Milton, Paradise Lost I 263; Blake, The Marriage of Heaven and Hell; Venanzio Fortunato; mosaici del battistero di San Giovanni (Giudizio, XIII sec.).

---
Strumenti di lavoro (fuori dal repository): `~/dc_work/f3` sul computer di Marco — copie della base, operazioni per canto (`ops/NN.py`), controlli (`check.py`, `global.py`, `qall.py`), log per canto.
