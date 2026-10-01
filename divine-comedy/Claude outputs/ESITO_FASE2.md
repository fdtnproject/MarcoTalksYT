# Fase 2 · Esito dei prototipi

1° ottobre 2026 · rapporto di Claude per Marco

Da parte mia: nessun commit e nessun push. Il commit `a7096ba` (".", 01:41) e il push su `origin/main` sono partiti dal tuo account dopo le modifiche, e contengono esattamente i 24 file elencati sotto.

## 1. File modificati

24 file in 12 canti, tutti previsti. Per ogni canto sono cambiati due file: `scripts/Canto_XX_talk_finale.md` e `cantoXX-content.js`. Nel JS è cambiato solo il campo `markdown`.

| Canto | Cosa |
| --- | --- |
| XV | Otto onde; tolte le 14 righe della Chiusura che ripetevano l'onda 4. |
| XXII | Cinque onde, regia del «novo ludo», due righe di chiusura; «d’ogne» → «d’ogni». |
| XXVI | Onda Levi dopo «del restare.»; Goethe/Faust intatto. |
| I, II, III, IV | Le 9 microcorrezioni. II, III e IV hanno anche citazioni della revisione delle 78. |
| V, VI, VII, VIII, XI | Solo citazioni della revisione delle 78. |

Nessun file non previsto. Non ho toccato immagini, cue immagini, metadata, HTML, stage, CSS, source UTET né gli altri 22 canti.

## 2. Diff stat (`git show --stat a7096ba`)

```
 divine-comedy/inferno/canto-01/canto01-content.js  |    2 +-
 .../canto-01/scripts/Canto_01_talk_finale.md       |   10 +-
 divine-comedy/inferno/canto-02/canto02-content.js  |    2 +-
 .../canto-02/scripts/Canto_02_talk_finale.md       |    8 +-
 divine-comedy/inferno/canto-03/canto03-content.js  |    2 +-
 .../canto-03/scripts/Canto_03_talk_finale.md       |   26 +-
 divine-comedy/inferno/canto-04/canto04-content.js  |    2 +-
 .../canto-04/scripts/Canto_04_talk_finale.md       |   18 +-
 divine-comedy/inferno/canto-05/canto05-content.js  |    2 +-
 .../canto-05/scripts/Canto_05_talk_finale.md       |   34 +-
 divine-comedy/inferno/canto-06/canto06-content.js  |    2 +-
 .../canto-06/scripts/Canto_06_talk_finale.md       |   20 +-
 divine-comedy/inferno/canto-07/canto07-content.js  |    2 +-
 .../canto-07/scripts/Canto_07_talk_finale.md       |   10 +-
 divine-comedy/inferno/canto-08/canto08-content.js  |    2 +-
 .../canto-08/scripts/Canto_08_talk_finale.md       |   28 +-
 divine-comedy/inferno/canto-11/canto11-content.js  |    2 +-
 .../canto-11/scripts/Canto_11_talk_finale.md       |    2 +-
 divine-comedy/inferno/canto-15/canto15-content.js  |    2 +-
 .../canto-15/scripts/Canto_15_talk_finale.md       | 1396 +++++++++++++++++++-
 divine-comedy/inferno/canto-22/canto22-content.js  |    2 +-
 .../canto-22/scripts/Canto_22_talk_finale.md       |  665 +++++++++-
 divine-comedy/inferno/canto-26/canto26-content.js  |    2 +-
 .../canto-26/scripts/Canto_26_talk_finale.md       |  328 +++++
 24 files changed, 2418 insertions(+), 151 deletions(-)
```

`git status` adesso è pulito e `main` è allineato con `origin/main`.

## 3. Durate

Il modello è quello della proposta: prosa a 130 parole al minuto, versi a 100, «Pausa.» 1,2 s, «Pausa lunga.» 2,4 s, con un margine di ±10%. Le durate sono calcolate sui testi veri.

| Canto | Prima | Dopo | Bersaglio |
| --- | --: | --: | --- |
| XV | 14,4 | **36,6** (33–40) | circa 40 |
| XXII | 15,5 | **26,6** (24–29) | circa 29, non oltre |
| XXVI | 25,9 | **31,9** (29–35) | onda di circa 5,5 |

XV per sezione:

| Sezione | Prima | Dopo |
| --- | --: | --: |
| vv. 25-42 · Ser Brunetto | 1,9 | 5,4 |
| vv. 43-54 · L'allievo in alto | 1,3 | 5,3 |
| vv. 55-78 · La profezia | 2,2 | 5,4 |
| vv. 79-99 · Cara e buona imagine paterna | 2,4 | 8,9 |
| vv. 100-114 · Gli altri nomi | 1,4 | 3,6 |
| vv. 115-124 · Il Tesoro e la corsa | 1,4 | 4,6 |
| Chiusura | 0,7 | 0,4 |

XV e XXII stanno sotto il bersaglio perché non ho aggiunto riempitivi: ogni minuto in più viene da un fatto verificato o da un verso.

## 4. Verifica dei versi

| Canto | Versi recitati (`>`) | Esito |
| --- | --- | --- |
| XV | 124/124 | Tutti presenti, identici al file UTET, nello stesso ordine, nessun duplicato. |
| XXII | 151/151 | Idem. |
| XXVI | 142/142 | Nessuna omissione, nessuna duplicazione. |
| I–VIII, XI | invariati | Le righe `>` sono identiche a prima, una per una. |

Dentro le onde i versi ripresi sono scritti come citazioni di commento, senza `>`. Così le righe `>` restano soltanto quelle della lettura. Anche queste citazioni sono ricopiate dal file UTET, compresi i versi presi da altri canti: Inf. I, VII, X, XI, XIV, XXXIII; Purg. VIII, XI, XXVI, XXX; Par. XVII.

## 5. Parità Markdown/JS

Ho caricato con node ognuno dei 12 `content.js` modificati e ho confrontato il campo `markdown` con il file `.md`. In tutti e 12 i casi sono identici, e gli altri campi del JS (titolo, kicker, tagline, descrizione, immagini) non sono cambiati.

## 6. Le 9 microcorrezioni

Nessun verso recitato toccato.

| # | Canto, riga | Prima | Dopo |
| --: | --- | --- | --- |
| 1 | I, 636 | non riesci a misuarlo. | non riesci a misurarlo. |
| 2 | I, 624 | Ma questo cede vale più | Ma questo cedere vale più |
| 3 | I, 2557 | Non la lupa non ha creato sé stessa. | La lupa non ha creato sé stessa. |
| 4 | I, 1743 | quasi milletrecentotrenta anni. | quasi milletrecentoventi anni. |
| 5 | I, 2819 | che tu non hai avuto accesso. | a cui tu non hai avuto accesso. |
| 6 | II, 564 | "Perché, perché restai?" | "Perché, perché ristai?" |
| 7 | III, 384 e 395 | per viltade | per viltà |
| 8 | IV, 469 | "Aura fosca." | "Oscura e profonda era e nebulosa." (IV 10) |
| 9 | IV, 167 | L'aura etterna | L'aura eterna |

## 7. Le 78 citazioni

**69 corrette, 9 lasciate intatte.** Ho corretto solo i casi A e B: 68 di tipo A e 1 di tipo B. Ho allineato soltanto la forma, senza allungare nessuna citazione: «Di tal disïo» è diventato «Di tal disio» ed è rimasto così corto. Uno script ha confermato che ognuna delle 69 righe corrette compare tale e quale nel testo UTET del suo canto.

Categorie: A variante editoriale, B refuso, D parafrasi, E frammento voluto. Le righe sono quelle dei file prima della modifica, e nessuna correzione le ha spostate; solo nel XXII le onde hanno spostato la riga 332 alla 733.

| # | Canto | Riga | Esito | Prima → Dopo, o testo | Motivo |
| --: | --- | --- | --- | --- | --- |
| 1 | II | 179 | CORRETTA | «Paulo» → «Paolo» | A · Paulo è la forma di Petrocchi |
| 2 | II | 188 | CORRETTA | «né altri 'l crede.» → «né altri crede.» | A · Petrocchi legge 'l crede |
| 3 | II | 375 | CORRETTA | «consumai la 'mpresa.» → «consumai l'impresa.» | A · frammento; forma allineata, estensione invariata |
| 4 | III | 80 | CORRETTA | «Lasciate ogne speranza, voi ch'intrate.» → «Lasciate ogni speranza, voi ch'entrate.» | A · ogne/intrate sono Petrocchi |
| 5 | III | 120 | CORRETTA | «ogne sospetto» → «ogni sospetto» | A · ogne è Petrocchi |
| 6 | III | 121 | CORRETTA | «ogne viltà» → «ogni viltà» | A · ogne è Petrocchi |
| 7 | III | 202 | LASCIATA INTATTA | "Le anime triste di coloro | E · frammento: manca «tengon», l'articolo è sciolto per aprire la citazione |
| 8 | III | 203 | CORRETTA | «sanza 'nfamia» → «sanza infamia» | A · 'nfamia è Petrocchi |
| 9 | III | 209 | CORRETTA | «Sanza 'nfamia» → «Sanza infamia» | A · frammento; forma allineata |
| 10 | III | 294 | CORRETTA | «che 'nvidïosi son d'ogne altra sorte.» → «che invidiosi son d'ogni altra sorte.» | A · forme di Petrocchi |
| 11 | III | 344 | CORRETTA | «D'ogne posa mi parea indegna.» → «D'ogni posa mi pareva indegna.» | A · frammento; ogne/parea sono Petrocchi |
| 12 | III | 505 | CORRETTA | «ti fier conte» → «ti fìer conte» | A · grafia UTET con l'accento |
| 13 | III | 520 | CORRETTA | «al fiume del parlar» → «al fiume di parlar» | A · del parlar è Petrocchi |
| 14 | III | 564 | CORRETTA | «Tu che se' costì» → «Tu che sei costì» | A · frammento; se' è Petrocchi |
| 15 | III | 779 | CORRETTA | «l'uom cui sonno piglia.» → «l'uom che 'l sonno piglia.» | A · cui sonno è Petrocchi |
| 16 | IV | 315 | CORRETTA | «vince ogne errore.» → «vince ogni errore.» | A · ogne è Petrocchi |
| 17 | IV | 352 | CORRETTA | «Io era nuovo» → «Io era novo» | A · nuovo non è UTET |
| 18 | IV | 507 | CORRETTA | «dal modo de li altri» → «dal modo degli altri» | A · de li è Petrocchi |
| 19 | IV | 519 | CORRETTA | «suona sù ne la» → «suona su ne la» | A · grafia UTET |
| 20 | IV | 520 | CORRETTA | «grazia acquista in ciel» → «grazia acquista nel ciel» | A · in ciel è Petrocchi; estensione invariata |
| 21 | IV | 629 | CORRETTA | «Così vid' i' adunar» → «Così vidi adunar» | A · vid' i' è Petrocchi |
| 22 | IV | 630 | CORRETTA | «quel segnor de» → «quel signor de» | A · segnor è Petrocchi |
| 23 | IV | 857 | LASCIATA INTATTA | "il maestro di color che sanno." | E · frammento: «'l» diventa «il» perché la citazione comincia lì |
| 24 | V | 246 | CORRETTA | «loco d'ogne luce muto.» → «luogo d'ogni luce muto.» | A · frammento; loco/ogne sono Petrocchi |
| 25 | V | 717 | CORRETTA | «grazïoso» → «grazioso» | A · dieresi di Petrocchi |
| 26 | V | 738 | CORRETTA | «il re dell'universo» → «il re de l'universo» | A · grafia UTET |
| 27 | V | 771 | CORRETTA | «dove 'l Po» → «dove il Po» | A · 'l è Petrocchi |
| 28 | V | 772 | CORRETTA | «co' seguaci» → «coi seguaci» | A · co' è Petrocchi |
| 29 | V | 830 | CORRETTA | «e 'l modo» → «e il modo» | A · frammento; 'l è Petrocchi |
| 30 | V | 1165 | CORRETTA | «a lagrimar» → «a lacrimar» | A · lagrimar è Petrocchi |
| 31 | V | 1183 | CORRETTA | «Al tempo d'i dolci» → «Al tempo de' dolci» | A · d'i è Petrocchi |
| 32 | V | 1185 | CORRETTA | «dubbiosi disiri?» → «dubbiosi desiri?» | A · disiri è Petrocchi |
| 33 | V | 1252 | CORRETTA | «sa 'l tuo dottore.» → «sa il tuo dottore.» | A · frammento; 'l è Petrocchi |
| 34 | V | 1268 | CORRETTA | «Ma s'a conoscer» → «Ma se a conoscer» | A · s'a è Petrocchi |
| 35 | V | 1288 | CORRETTA | «leggiavamo» → «leggevamo» | A · leggiavamo è Petrocchi |
| 36 | V | 1325 | CORRETTA | «li occhi ci sospinse» → «gli occhi ci sospinse» | A · li occhi è Petrocchi |
| 37 | V | 1367 | CORRETTA | «disïato» → «disiato» | A · dieresi di Petrocchi |
| 38 | V | 1368 | CORRETTA | «basciato» → «baciato» | A · basciato è Petrocchi |
| 39 | V | 1370 | CORRETTA | «basciò» → «baciò» | A · basciò è Petrocchi |
| 40 | V | 1436 | CORRETTA | «Galeotto fu 'l libro» → «Galeotto fu il libro» | A · 'l è Petrocchi |
| 41 | VI | 328 | CORRETTA | «Ponavam» → «Ponevam» | A · frammento; ponavam è Petrocchi |
| 42 | VI | 329 | CORRETTA | «sovra lor vanità» → «sopra lor vanità» | A · sovra è Petrocchi |
| 43 | VI | 373 | CORRETTA | «per questo 'nferno tratto.» → «per questo inferno tratto.» | A · 'nferno è Petrocchi |
| 44 | VI | 619 | CORRETTA | «mi 'nvita.» → «m'invita.» | A · mi 'nvita è Petrocchi |
| 45 | VI | 764 | CORRETTA | «i cuori accesi.» → «i cori accesi.» | A · frammento; cuori è Petrocchi |
| 46 | VI | 961 | CORRETTA | «di savere» → «di sapere» | A · savere è Petrocchi |
| 47 | VI | 963 | CORRETTA | «o lo 'nferno li attosca.» → «o l'inferno li attosca.» | A · lo 'nferno è Petrocchi |
| 48 | VI | 1026 | CORRETTA | «priegoti ch'a la mente» → «priegoti che a la mente» | A · ch'a è Petrocchi |
| 49 | VI | 1170 | CORRETTA | «cresceranno ei dopo» → «crescerann'ei dopo» | A · grafia UTET |
| 50 | VI | 1195 | CORRETTA | «scïenza» → «scienza» | A · dieresi di Petrocchi |
| 51 | VI | 1205 | LASCIATA INTATTA | più sente il bene | D · parafrasi in italiano moderno; il verso giusto, «più senta il bene», è citato tre righe sopra |
| 52 | VII | 116 | LASCIATA INTATTA | di scendere questa roccia." | D · parafrasi fra virgolette di «non ci torrà lo scender questa roccia» |
| 53 | VII | 172 | CORRETTA | «fé la vendetta» → «fe' la vendetta» | A · grafia UTET |
| 54 | VII | 248 | LASCIATA INTATTA | Ah giustizia di Dio. | D · apre la resa in italiano moderno dei vv. 19-21 («Chi accumula…») |
| 55 | VII | 424 | CORRETTA | «Tutti quanti fuor guerci» → «Tutti quanti fur guerci» | A · fuor è Petrocchi |
| 56 | VII | 460 | CORRETTA | «Questi fuor cherci,» → «Questi fur cherci,» | A · frammento; fuor è Petrocchi |
| 57 | VII | 600 | LASCIATA INTATTA | i beni del mondo?" | D · parafrasi di «che i ben del mondo ha sì tra branche?» |
| 58 | VII | 872 | CORRETTA | «Ma or discendiamo omai a maggior pieta.» → «Or discendiamo omai a maggior pièta.» | B · «Ma» non c'è nel verso, in nessuna edizione; «pièta» con l'accento UTET |
| 59 | VII | 888 | CORRETTA | «Già ogne stella» → «Già ogni stella» | A · frammento; ogne è Petrocchi |
| 60 | VII | 1016 | LASCIATA INTATTA | c'è gente che sospira." | D · parafrasi di «che sotto l'acqua ha gente che sospira» |
| 61 | VIII | 105 | CORRETTA | «mar di tutto 'l senno,» → «mar di tutto il senno,» | A · frammento; 'l è Petrocchi |
| 62 | VIII | 195 | CORRETTA | «Flegïàs, Flegïàs, tu gridi a vòto.» → «Flegiàs, Flegiàs, tu gridi a voto.» | A · dieresi e accento di Petrocchi |
| 63 | VIII | 354 | LASCIATA INTATTA | "Ma tu chi sei, | D · parafrasi: prosegue «che ti sei fatto così brutto?», non il verso |
| 64 | VIII | 421 | CORRETTA | «con li altri cani!» → «con gli altri cani!» | A · li altri è Petrocchi |
| 65 | VIII | 440 | CORRETTA | «che 'n te s'incinse!» → «che in te s'incinse!» | A · 'n te è Petrocchi |
| 66 | VIII | 485 | CORRETTA | «furïosa.» → «furiosa.» | A · dieresi di Petrocchi |
| 67 | VIII | 500 | CORRETTA | «Quanti si tegnon or là sù gran regi» → «Quanti si tengon or là su gran regi» | A · tegnon/sù sono Petrocchi |
| 68 | VIII | 509 | LASCIATA INTATTA | come porci nel brago, | D · parafrasi; il verso giusto, «come porci in brago», è citato alla riga 501 |
| 69 | VIII | 549 | CORRETTA | «Di tal disïo» → «Di tal disio» | A · frammento voluto: forma allineata, estensione invariata |
| 70 | VIII | 550 | CORRETTA | «convien che tu goda.» → «converrà che tu goda.» | A · convien è Petrocchi |
| 71 | VIII | 728 | CORRETTA | «c'ha nome Dite.» → «che ha nome Dite.» | A · frammento; c'ha è Petrocchi |
| 72 | VIII | 816 | CORRETTA | «Il foco etterno» → «Il foco eterno» | A · frammento; etterno è Petrocchi |
| 73 | VIII | 938 | CORRETTA | «Pruovi, se sa.» → «Provi, se sa.» | A · frammento; pruovi è Petrocchi |
| 74 | VIII | 1012 | CORRETTA | «Ché 'l nostro passo» → «Ché il nostro passo» | A · frammento; 'l è Petrocchi |
| 75 | VIII | 1055 | CORRETTA | «Ch'i' non ti lascerò» → «Ch'io non ti lascerò» | A · frammento; ch'i' è Petrocchi |
| 76 | VIII | 1113 | CORRETTA | «al mio segnor.» → «al mio signor.» | A · frammento; segnor è Petrocchi |
| 77 | XI | 432 | CORRETTA | «lo 'ngegno tuo?» → «lo ingegno tuo?» | A · frammento; 'ngegno è Petrocchi |
| 78 | XXII | 332 (ora 733) | CORRETTA | «d'ogne» → «d'ogni» | A · ogne è Petrocchi |

## 8. Punti che chiedono una tua decisione

### Da scegliere

- **Le due frasi esatte.** Nel XV c'è il cue `[Schermo: testo — DA SCEGLIERE (Marco): la riga di Eliot…]`. Nel XXVI c'è una riga che comincia con «DA SCEGLIERE (Marco):», al posto della frase di Levi. Non ho inventato né scelto nessuna delle due. Finché restano lì, nel teleprompter si vedono.
- **La lettera di Dante citata da Bruni.** Le edizioni hanno due lezioni: «allegrezza grandissima» (Solerti, seguito da Petrocchi) e «grandissima allegrezza» (Redi; è anche la forma che Chimenz cita nel Dizionario Biografico). Ho usato la prima. Dimmi tu.
- **Due prestiti brevissimi.** Da Levi «come uno squillo», da Eliot «un'altra voce». Sono due o tre parole dentro una parafrasi; se non vuoi nessun prestito, li tolgo.
- **VII 872.** Ho tolto il «Ma» davanti a «Or discendiamo», perché è dentro le virgolette ma non sta nel verso. Se era voluto, lo rimetto fuori dalle virgolette.
- **Allineamento stretto dei frammenti.** III 202 «Le anime triste» e IV 857 «il maestro» sono frammenti adattati. Se vuoi allinearli anche lì, diventerebbero «L'anime triste» e «'l maestro», che però suona male in apertura. VII 248 «Ah giustizia di Dio» l'ho letto come l'inizio della parafrasi; se per te è una citazione, diventa «Ahi».
- **XV per arrivare a 40 minuti con materiale vero.** Il candidato migliore è la fine del discorso del fantasma di Eliot, che come unico rimedio indica il fuoco che raffina: è il fuoco di Purgatorio XXVI, lo stesso canto dei «Sodoma e Gomorra» salvati e di Guinizelli. Legherebbe l'onda 1 all'onda 4, per circa un minuto. Non l'ho aggiunta perché mi avevi chiesto di fermarmi.

### Scelte già fatte, da controllare

- **Punti di inserimento spostati** per evitare ripetizioni:
  - XV, onda 6: alla fine della sezione, dopo «uomini di fama.», e non dopo «senza dire tutto.».
  - XV, onda 8: dopo «e corre.», così le righe esistenti «E Dante lo vede come uno che vince la corsa» diventano il ritorno.
  - XXII, onda 1: divisa in due. Il racconto sta prima di «Ma mai una marcia così»; il proverbio della chiesa e della taverna sta dopo «Ahi fiera compagnia».
- **Regia.** Il renderer riconosce solo i cue `[Schermo: …]`. Per le indicazioni che non riguardano lo schermo ho seguito la convenzione di «Lungo silenzio.», già presente nel Canto I. Nel teleprompter compaiono come testo, al pari di «Pausa.»:
  - «Sguardo in camera.»
  - «Velocità doppia fino allo stop: le pause diventano respiri.»
  - «Stop.»
  - «Lungo silenzio.», nel XXVI, dopo «Li miei compagni fec'io sì acuti,»
- **Fatti corretti rispetto al piano, già applicati nei copioni:**
  - all'ultimo del palio toccava un *gallo* (statuto di Verona del 1328);
  - Francesco d'Accorso «al servizio del re d'Inghilterra», non professore a Oxford, che è incerto;
  - Brunetto in Francia «più di sei anni»;
  - Campaldino: «Secondo Leonardo Bruni… A cavallo. Nella prima schiera.», senza i feditori;
  - Corso Donati disobbedisce agli ordini secondo Villani;
  - la multa era di cinquemila fiorini piccoli;
  - Roma 1301 «secondo Dino Compagni… secondo la tradizione»;
  - Levi: la zuppa barattata riguarda il vuoto fra la montagna e il finale, e del limite d'Ercole ricorda un verso solo (v. 109).
- **Il piano nel repo è rimasto indietro.** `inferno/editoriale/FASE2_MICROAUDIT_PROTOTIPI.md` riporta ancora «gallina», «Oxford» e «fra i feditori». Non l'ho corretto perché sta fuori dai copioni.

## Fonti principali dei fatti verificati

- Enciclopedia Dantesca e Dizionario Biografico Treccani, voci: Brunetto Latini, Francesco d'Accorso, Andrea de' Mozzi, Verona, Campaldino, Corso Donati, Gomita, Nino Visconti, Branca Doria, piano, Ciampolo.
- Testi:
  - Villani, *Nuova cronica* IX 10 e VIII 131, ed. Porta;
  - Compagni, *Cronica* I 9-10 e II 4, 11, 25;
  - Bruni, *Vita di Dante*, ed. Solerti 1904;
  - sentenze del 1302, ed. Del Lungo 1881;
  - *Tresor* I 1 e I 37, ed. Carmody;
  - *Tesoretto* vv. 187-190, ed. Pozzi, in *Poeti del Duecento* a cura di Contini.
- Per Eliot: Little Gidding II e la conferenza *What Dante Means to Me* (4 luglio 1950).
- Per Levi: il capitolo «Il canto di Ulisse» di *Se questo è un uomo*, controllato su due trascrizioni scolastiche, solo per i fatti.
