> **Stato al 1° ottobre 2026:** proposta in attesa di approvazione di Marco. Copia della scheda «Fase 2» del documento vivo: https://claude.ai/code/artifact/e5465e7b-007d-4df1-8415-2f7528f8af9b
>
> **Vincoli fissati da Marco, per chiunque lavori su questi file:**
>
> - I copioni si modificano solo dopo la sua approvazione, e per ora solo i tre prototipi (XV, XXII, XXVI). Gli altri 31 canti non si toccano.
> - Nessun commit e nessun push finché i tre prototipi non sono stati revisionati.
> - L'edizione recitata resta UTET (Chimenz). Petrocchi e gli altri commenti servono al confronto, mai a sostituire la lezione UTET nei copioni.
> - Le 157 onde della [proposta](PROPOSTA_EDITORIALE.md) sono un menu: ogni onda scritta deve cambiare il senso o il suono del verso di ritorno, altrimenti si riduce o cade.
> - Nel XXVI la parte su Faust non si riscrive.

# Fase 2 · micro-audit e prototipi

Nessun copione è stato modificato, e non c'è nessun commit. I nove punti segnalati sono cinque errori del commento, tre forme di Petrocchi finite nel commento e una citazione presa dal canto sbagliato: i versi recitati sono tutti giusti. Sotto, i tre prototipi onda per onda, ciascuna con il suo verso di ritorno e il test, e l'onda di Primo Levi scritta per intero.

## Micro-audit dei nove refusi

**In tutti e nove i casi il verso recitato è giusto: l'errore sta nel commento.** Ho verificato ogni punto sul testo UTET del repository, *La Divina Commedia* a cura di Siro A. Chimenz (la cartella `source_text` e i file `Canto_XX_source.txt`). Petrocchi mi è servito solo per riconoscere le varianti.

| # | Dove (riga del file) | Oggi nel copione | UTET | Diagnosi | Correzione minima |
| --: | --- | --- | --- | --- | --- |
| 1 | I, r. 636 | «non riesci a misuarlo» | non è una citazione (commento al v. 4) | refuso del commento | «misurarlo» |
| 2 | I, r. 624 | «Ma questo cede vale più» | non è una citazione: riprende «il linguaggio cede» di poche righe prima | refuso probabile, manca «-re» | «Ma questo cedere vale più» |
| 3 | I, r. 2557 | «Non la lupa non ha creato sé stessa.» | v. 111 «là onde invidia prima dipartilla.» | refuso del commento: doppia negazione | «La lupa non ha creato sé stessa.» |
| 4 | I, r. 1743 | «Sono passati quasi milletrecentotrenta anni.» | v. 63 «chi per lungo silenzio parea fioco.» | errore di calcolo: dal 19 a.C. al 1300 sono circa 1318 anni | «quasi milletrecentoventi anni» |
| 5 | I, r. 2819 | «in nome di qualcosa / che tu non hai avuto accesso» | v. 131 «per quello Dio che tu non conoscesti,» | errore di sintassi del commento | «a cui tu non hai avuto accesso» |
| 6 | II, r. 564 | commento: «Perché, perché restai?» | v. 121 «Dunque che è? perché, perché ristai?», uguale al verso recitato (r. 552) | variante editoriale nel commento: «restai» è Petrocchi; UTET, come l'edizione del 1921, legge «ristai» | «ristai» |
| 7 | III, rr. 384 e 395 | commento: «per viltade» | v. 60 «che fece per viltà il gran rifiuto.», uguale al verso recitato (r. 371) | variante editoriale nel commento: «viltade» è Petrocchi | «viltà», nelle due righe |
| 8 | IV, r. 469 | «Aura fosca.», citato come verso del Limbo | nel IV non c'è: UTET ha «aura fosca» in XXIII 78 e XXVIII 104. Il buio del Limbo è il v. 10, «Oscura e profonda era e nebulosa,» | citazione presa dal canto sbagliato | «Oscura e profonda era e nebulosa.» |
| 9 | IV, r. 167 | commento: «L'aura etterna facevan tremare.» | v. 27 «che l'aura eterna facevan tremare.», uguale al verso recitato (r. 150) | variante editoriale nel commento: «etterna» è Petrocchi | «eterna» |

Confronto con Petrocchi: Enciclopedia Dantesca, voci [restare](https://www.treccani.it/enciclopedia/restare_%28Enciclopedia-Dantesca%29/), [viltà](https://www.treccani.it/enciclopedia/vilta_%28Enciclopedia-Dantesca%29/), [aura](https://www.treccani.it/enciclopedia/aura_%28Enciclopedia-Dantesca%29/).

**Oltre i nove.** Lo stesso scarto torna in altre 78 citazioni: 76 nei commenti dei Canti II–VIII, una nell'XI e una nel XXII («Vasel d'ogne froda», che rientra nel prototipo). Il commento cita forme di un'altra edizione (ogne per ogni, 'nferno per inferno, basciò per baciò, leggiavamo per leggevamo, Paulo per Paolo) mentre il verso recitato è UTET, e così nello stesso episodio lo spettatore sente due versioni dello stesso verso. L'elenco completo, riga per riga, è in fondo a questa scheda: lo allineerei a UTET in un solo passaggio, quando mi darai il via.

**Una correzione mia.** Nella proposta avevo suggerito di uniformare «viltà» a «viltade» e di usare Petrocchi come testo: ritiro entrambe le cose. Anche le citazioni nelle mie schede, scritte a memoria, a volte seguono Petrocchi; da qui in avanti ogni verso che entra in un copione si ricopia dal file UTET.

## Regole di scrittura dei prototipi

1. **I versi vengono solo da UTET.** Ogni verso, anche dentro un'onda, si ricopia da `Canto_XX_source.txt`, e ogni citazione nel commento è identica al verso recitato. Tutti i versi dei tre campioni qui sotto sono stati confrontati riga per riga con il file.
2. **Il segno `>` resta riservato ai versi UTET.** Altri testi (il *Tesoretto*, Bruni) vanno nel commento, fra virgolette.
3. **Ogni onda dichiara il verso di ritorno e che cosa cambia.** Se dopo la digressione il verso suona come prima, l'onda si riduce o cade. Per ogni prototipo segno anche le onde cadute.
4. **Gli autori ancora protetti si raccontano in parafrasi.** Levi ed Eliot li racconto con parole mie. Al massimo una frase esatta per episodio, scelta da te sulla tua edizione e detta con autore, opera ed editore.
5. **Le letture personali restano dichiarate:** «io credo», «a me sembra».
6. **I fatti da verificare sono elencati in fondo a ogni prototipo.** Le righe citate sono quelle dei file al 1° ottobre 2026; le durate usano il modello della proposta, ±10%.

## Prototipo 1 · Canto XV, da 14 a circa 40 minuti

**Otto onde, ognuna con il suo verso di ritorno: il canto passa da 14 a circa 40 minuti (36–44 secondo il ritmo).** È il limite basso del bersaglio, e lo lascio lì: le altre candidate cadono al test. Il cuore è l'onda 2, che lega Brunetto al Canto I, e il momento da palco resta sul «Siete voi qui».

| Sezione del copione | Oggi (min) | Intervento | Dopo (min) |
| --- | --: | --- | --: |
| Apertura | 0,6 | invariata | 0,6 |
| vv. 1–12 · Il bordo del Flegetonte | 1,4 | invariata | 1,4 |
| vv. 13–24 · La schiera che guarda | 1,2 | invariata | 1,2 |
| vv. 25–42 · Ser Brunetto | 1,9 | onda 1 · Londra, 1942 | 6,4 |
| vv. 43–54 · L'allievo in alto | 1,3 | onda 2 · La selva di Brunetto | 5,3 |
| vv. 55–78 · La profezia di Brunetto | 2,2 | onda 3 · L'esule che annuncia l'esilio | 5,2 |
| vv. 79–99 · Cara e buona imagine paterna | 2,4 | onda 4 · La colpa e il padre; onda 5 · Con altro testo | 9,9 |
| vv. 100–114 · Gli altri nomi | 1,4 | onda 6 · La scuola | 3,9 |
| vv. 115–124 · Il Tesoro e la corsa | 1,4 | onda 7 · Vivo ancora; coda 8 · Il drappo verde | 5,6 |
| Chiusura | 0,7 | tolte le righe che ripetono l'onda 4 | 0,5 |
| **Totale** | **14,4** | **8 onde** | **≈ 40** |

### Le onde

#### 1. Londra, 1942 · ≈ 4,5 min

- **Dove:** dopo la riga 161 («da cancellare chi è.»), prima di «Siete voi qui, / ser Brunetto?».
- **Ingresso:** «sì, che ’l viso abbruciato non difese / la conoscenza sua al mio intelletto» (vv. 27–28).
- **Racconta:** Londra, 1942, i bombardamenti; Eliot fa servizio da vedetta antincendio. Nella seconda parte di *Little Gidding* rifà questa scena: all'alba, dopo un'incursione, un maestro morto dal volto bruciato, e la domanda di Dante detta in inglese. Il fantasma elenca i doni amari della vecchiaia e sparisce al segnale di cessato allarme. Nel 1950 Eliot dirà di aver cercato lì l'equivalente più vicino a un canto di Dante che gli riuscisse, e che nessun altro passo gli era costato tanta fatica.
- **Ritorno:** «Siete voi qui, ser Brunetto?» (v. 30), con il momento da palco: Marco si china verso un volto all'altezza delle ginocchia; sullo schermo la riga di Eliot scelta da te, con la data.
- **Il test:** dopo Londra la domanda non è più solo sorpresa. È quella di ogni allievo davanti al suo maestro morto, in qualunque secolo.
- **Serie:** Eliot torna nel XXVII, con *Prufrock*.

#### 2. La selva di Brunetto · ≈ 4 min · testo completo più sotto

- **Dove:** in coda alla sezione, dopo la riga 244 («Lo rende più doloroso.»).
- **Ingresso:** «mi smarrì’ in una valle, / avanti che l’età mia fosse piena» (vv. 50–51).
- **Racconta:** nell'Inferno Dante racconta la selva solo a lui, e non gli dice il nome della nuova guida. Nel 1260 Brunetto torna da un'ambasceria in Castiglia; uno studente venuto da Bologna gli dà la notizia di Montaperti, la battaglia di Farinata, e dell'esilio. Nel *Tesoretto* si perde «pensando a capo chino» in «una selva diversa», e poi trova una guida: lo schema del Canto I, quarant'anni prima.
- **Ritorno:** «ma ’l capo chino / tenea, com’uom che reverente vada» (vv. 44–45).
- **Il test:** il capo chino smette di essere solo rispetto: Dante restituisce al maestro il gesto con cui il maestro si era perso.

#### 3. L'esule che annuncia l'esilio · ≈ 3 min

- **Dove:** in coda alla sezione, dopo la riga 308 («lì si paga.»).
- **Ingresso:** «Ma quell’ingrato popolo maligno / che discese di Fiesole ab antico» (vv. 61–62).
- **Racconta:** la storia di Fiesole e di Roma che Brunetto usa contro i fiorentini l'ha scritta lui, nel *Tresor*, l'enciclopedia composta in francese durante l'esilio (1260–1266), perché quella lingua gli pareva la più piacevole e la più diffusa. Tornato a Firenze è notaio e dettatore del Comune, la penna della città; Giovanni Villani lo chiamerà maestro nel «digrossare» i fiorentini, nel parlare e nel governare.
- **Ritorno:** «ti si farà, per tuo ben far, nimico» (v. 64).
- **Il test:** la profezia diventa esperienza: un esule consegna l'esilio a chi viene dopo.

#### 4. La colpa e il padre · ≈ 4,5 min

- **Dove:** dopo la riga 353 («l'umana natura.»), prima di «la cara / e buona / imagine paterna.».
- **Ingresso:** «voi non sareste ancora / de l’umana natura posto in bando» (vv. 80–81).
- **Racconta:** Dante non nomina la colpa, ma il Canto XI l'ha già messa sulla mappa: il girone che porta il segno di «Sodoma e Caorsa» (XI 50), sotto la pioggia di fuoco della Genesi. Nessun'altra fonte accusa Brunetto, e qualche studioso ha proposto un'altra colpa (Pézard: un peccato contro la propria lingua), da dire come ipotesi. L'eco decisiva è in Purgatorio XXVI, dove anime colpevoli dello stesso peccato si salvano gridando «Sodoma e Gomorra»: a dannare non è la colpa, è il pentimento mancato. Poi il padre: Alighiero, morto quando Dante era ancora ragazzo, nella Commedia non compare mai. I padri del poema sono maestri, da Brunetto a Virgilio, che nel Purgatorio sarà «dolcissimo patre».
- **Ritorno:** «la cara e buona imagine paterna» (v. 83).
- **Il test:** detto il giudizio per intero, «cara e buona» suona come una scelta; e «paterna» diventa la paternità che Dante si è scelto.
- **Tono:** rispetto, nessun anacronismo, nessuna battuta. Lettura dichiarata: Dante non annulla il giudizio, e non lascia che il giudizio cancelli la gratitudine.

#### 5. Con altro testo · ≈ 3 min

- **Dove:** in coda alla sezione, dopo la riga 392 («è ancora intatto.»).
- **Ingresso:** «Ciò che narrate di mio corso scrivo, / e serbolo a chiosar, con altro testo, / a donna che saprà, s’a lei arrivo» (vv. 88–90).
- **Racconta:** è la terza profezia dell'esilio, dopo Ciacco (VI) e Farinata (X), e l'«altro testo» è quella di Farinata. Dante le mette da parte per farle spiegare a Beatrice, come gli aveva promesso Virgilio nel X: «da lei saprai di tua vita il viaggio». Ma in Paradiso a spiegargli l'esilio sarà Cacciaguida: il poema cambia strada mentre si scrive. E la risposta a Brunetto, «a la Fortuna, come vuol, son presto», rimanda alla Fortuna del VII, la dea che non ascolta.
- **Ritorno:** «però giri Fortuna la sua rota / come le piace, e ’l villan la sua marra» (vv. 95–96), e subito Virgilio: «Bene ascolta chi la nota!» (v. 99).
- **Il test:** dopo tre profezie e la Fortuna del VII, la sfida di Dante non suona più spavalda: è un uomo che si prepara. E «chi la nota» diventa chi scrive.
- **Serie:** il filo delle profezie dell'esilio.

#### 6. La scuola · ≈ 2,5 min

- **Dove:** dopo la riga 427 («senza dire tutto.»).
- **Ingresso:** «Priscian sen va con quella turba grama / e Francesco d’Accorso» (vv. 109–110) e «colui potéi che dal servo de’ servi / fu trasmutato d’Arno in Bacchiglione» (vv. 112–113).
- **Racconta:** Prisciano è la grammatica latina su cui studiava ogni scolaro; Francesco d'Accorso insegnò diritto a Bologna e a Oxford; il vescovo è Andrea de' Mozzi, spostato da Firenze a Vicenza nel settembre 1295 dal «servo de' servi», cioè dal papa: Bonifacio VIII, il cattivo fuori scena della serie, che qui firma un trasferimento. Grammatica, diritto, retorica: tutta la scuola di un intellettuale del Duecento cammina su questa sabbia.
- **Ritorno:** «tutti fur cherci / e litterati grandi e di gran fama» (vv. 106–107).
- **Il test:** «di gran fama» diventa uno specchio: è la gloria che Brunetto ha appena promesso a Dante.
- **Serie:** il filo di Bonifacio.

#### 7. Vivo ancora · ≈ 3 min

- **Dove:** dopo la riga 492 («La forma lasciata nel mondo.»).
- **Ingresso:** «sieti raccomandato il mio Tesoro / nel qual io vivo ancora» (vv. 119–120).
- **Racconta:** nel prologo del *Tresor* Brunetto divide il libro come un patrimonio: monete per le spese di ogni giorno, pietre preziose, oro fino. Insegnava che ci si eterna con le opere e con la fama; in Purgatorio XI Oderisi risponderà che il rumore del mondo non è «altro che un fiato / di vento». E l'ironia: oggi il *Tresor* lo leggono gli specialisti, e Brunetto vive ancora soprattutto perché l'allievo lo ha messo qui.
- **Ritorno:** «m’insegnavate come l’uom s’eterna» (v. 85), richiamato prima della corsa.
- **Il test:** il verso si capovolge: l'allievo ha imparato così bene che adesso è lui a eternare il maestro. Nel posto peggiore.

#### 8. Il drappo verde · coda, ≈ 1 min

- **Dove:** dopo la riga 504 («che la perde.»), prima della Chiusura.
- **Ingresso:** «che corrono a Verona il drappo verde / per la campagna» (vv. 122–123).
- **Racconta:** al palio di Verona si correva nudi; al primo il drappo verde, all'ultimo, per scherno, una gallina. Dante a Verona ha vissuto da esule. E nudi corrono anche questi dannati, sotto il fuoco.
- **Ritorno:** «quelli che vince, non colui che perde» (v. 124).
- **Il test:** l'ultimo verso diventa un atto di grazia: Dante poteva vederlo come l'ultimo, nudo e deriso; lo vede come quello che vince.

### Cadute al test

- **La stella dei Gemelli** (dalla scheda): è solo informazione, e «Se tu segui tua stella» resta uguale.
- **Il cancelliere** non è più un'onda a sé: quello che serve entra nell'onda 3.
- **Le prime righe della Chiusura**, da «Questo canto / non toglie nulla» a «di non dovergli qualcosa»: dopo l'onda 4 ripeterebbero la stessa cosa.
- **Facoltativa:** una riga finale verso il XVI, dove tornano due dei cinque nomi.

### Campione · onda 2, La selva di Brunetto

Così come entrerebbe nel file, dopo la riga 244. Circa 4 minuti; i versi sono ricopiati da `Canto_15_source.txt` e confrontati riga per riga.

```markdown
Pausa lunga.

E adesso
ascolta che cosa gli racconta.

> «Là su di sopra, in la vita serena,»
> rispos’io lui, «mi smarrì’ in una valle,
> avanti che l’età mia fosse piena.

Pausa.

Mi smarrì’ in una valle.

Pausa lunga.

È il primo canto.

La selva.
La strada perduta.
Il mezzo della vita.

Pausa.

Nell'Inferno
Dante non lo racconta
a nessun altro.

Lo racconta a lui.

Pausa lunga.

E nota una cosa.

Brunetto gli ha chiesto anche
chi è quello che gli mostra il cammino.

Pausa.

Dante risponde.
Ma non dice il nome.

Questi.
Solo: questi.

Pausa lunga.

Io credo
che non voglia mettere
il maestro nuovo
davanti al maestro di prima.

Pausa.

Virgilio è lì,
a due passi.

E per tutto il canto
resta senza nome.

Pausa lunga.

Ma perché
raccontare la selva
proprio a lui?

Pausa.

Torniamo indietro
di quarant'anni.

1260.

Pausa.

Il Comune di Firenze
manda Brunetto in Spagna,
ambasciatore
presso il re di Castiglia.

Deve cercare un alleato
per i guelfi.

Pausa.

Sulla strada del ritorno
incontra uno studente
che viene da Bologna.

E lo studente
gli dà la notizia.

Pausa lunga.

Montaperti.

Pausa.

La battaglia di Farinata.

I guelfi sconfitti.
Chi si è salvato
è fuori da Firenze.

Pausa.

Brunetto
non ha più una città
in cui tornare.

Resterà in Francia
sei anni.

Pausa lunga.

E adesso ascolta
come lo racconta lui,
in versi,
nel Tesoretto.

Quarant'anni
prima della Commedia.

"Pensando a capo chino,
perdei il gran cammino,
e tenni a la traversa
d'una selva diversa."

[Schermo: i quattro versi del Tesoretto. Sotto, in piccolo: «Nel mezzo del cammin di nostra vita / mi ritrovai per una selva oscura»]

Pausa lunga.

Un fiorentino.
Una missione.
Una notizia che vuol dire esilio.
Uno che perde la strada.
Una selva.

Pausa.

E più avanti,
fuori dalla selva,
una guida.

Natura in persona,
che lo accoglie
e comincia a insegnargli il mondo.

Pausa lunga.

Uno che si perde.
Una selva.
Una guida che arriva.

Pausa.

È lo schema del primo canto.

Prima di quella di Dante,
questa selva
l'aveva scritta
il suo maestro.

Pausa.

Dante la conosceva.

E io credo
che qui
voglia che anche Brunetto
se ne accorga.

Pausa.

Come a dirgli:
il viaggio che sto facendo
è cominciato
dentro un tuo libro.

Pausa lunga.

Guarda
dove cade la parola che conta.

Pensando
a capo chino.

Pausa.

Adesso torna
al gesto
di qualche verso fa.

> Io non osava scender de la strada
> per andar par di lui, ma ’l capo chino
> tenea, com’uom che reverente vada.

Pausa lunga.

Il capo chino.

Pausa.

Non è soltanto rispetto.

Dante gli restituisce
il suo stesso gesto.

Pausa lunga.

L'uomo che si perse
in una selva
a capo chino
adesso cammina nel fuoco.

E l'allievo
che si è perso
nella selva
che lui gli aveva insegnato
gli cammina accanto
così.

Pausa.

A capo chino.
```

### Da verificare

- *Tesoretto*: i quattro versi sull'edizione Contini; lo studente di Bologna; la guida, Natura.
- Che nell'Inferno Dante racconti la selva solo a Brunetto, e che nel canto Virgilio resti senza nome.
- Eliot vedetta antincendio; la conferenza del 1950, *What Dante Means to Me*.
- *Tresor*: la fondazione di Firenze, la scelta del francese, il prologo delle monete, delle pietre e dell'oro.
- Villani, *Nuova Cronica*: libro e capitolo su Brunetto.
- Pézard, *Dante sous la pluie de feu* (1950).
- Alighiero mai nominato nella Commedia; Francesco d'Accorso a Oxford; la gallina all'ultimo del palio, su una fonte storica.

## Prototipo 2 · Canto XXII, da 15 a circa 29 minuti

**Cinque onde e una regia: il canto passa da 15 a circa 29 minuti (26–32), dentro il bersaglio senza forzarlo.** Tutta la biografia sta nei primi sette minuti; dopo, nessuna onda supera i quattro minuti, e il canto chiude con la sequenza accelerata. Un filo lo attraversa: Dante, condannato per baratteria, cammina nella bolgia dei barattieri.

| Sezione del copione | Oggi (min) | Intervento | Dopo (min) |
| --- | --: | --- | --: |
| Apertura | 0,5 | invariata: è già il cardine del dittico con il XXI (la «trombetta») | 0,5 |
| vv. 1–30 · La marcia e la pece | 2,6 | onda 1 · Due marce | 6,6 |
| vv. 31–54 · Il Navarrese | 2,3 | onda 2 · Figlio di un distruttore | 4,3 |
| vv. 55–75 · Tra male gatte | 2,2 | onda 3 · Il sorco | 3,2 |
| vv. 76–96 · Frate Gomita e Michel Zanche | 2,0 | onda 4 · Semi sardi; «d'ogne» diventa «d'ogni» (UTET) | 5,5 |
| vv. 97–117 · La proposta | 2,1 | invariata | 2,1 |
| vv. 118–151 · La zuffa | 3,1 | regia · Il novo ludo; onda 5 · Il bestiario | 5,6 |
| Chiusura | 0,7 | due righe che richiamano l'onda 1 | 0,9 |
| **Totale** | **15,5** | **5 onde e 1 regia** | **≈ 29** |

### Le onde

#### 1. Due marce · ≈ 4 min · testo completo più sotto

- **Dove:** dopo la riga 92 («e di ritirata.»), prima di «Ma mai / una marcia così.».
- **Ingresso:** «corridor vidi per la terra vostra, / o Aretini» (vv. 4–5).
- **Racconta:** Campaldino, 11 giugno 1289: Dante, ventiquattro anni, a cavallo fra i feditori; la prima schiera cede, e a rovesciare la battaglia è la carica di Corso Donati, il futuro capo dei Neri. Leonardo Bruni cita una lettera perduta di Dante: «temenza molta, e nella fine grandissima allegrezza». Nel XXI c'era Caprona, due mesi dopo. Poi la seconda marcia: il 27 gennaio 1302 la condanna in contumacia per baratteria, guadagni illeciti ed estorsioni; il 10 marzo il rogo, se preso. Secondo la tradizione era a Roma, trattenuto da Bonifacio. Adesso attraversa la bolgia della sua condanna, scortato dai diavoli che nel XXI volevano uncinarlo.
- **Ritorno:** «Noi andavam con li diece demoni: / ahi fiera compagnia! ma ne la chiesa / coi santi, ed in taverna co’ ghiottoni!» (vv. 13–15), preceduti dalla terzina della «cennamella».
- **Il test:** il proverbio diventa l'alibi di un condannato: ogni luogo ha la sua compagnia, e lui lì è di passaggio.
- **Serie:** il filo di Bonifacio; il dittico con il XXI.

#### 2. Figlio di un distruttore · ≈ 2 min

- **Dove:** in coda alla sezione, dopo la riga 201 («in questo caldo.»).
- **Ingresso:** «Mia madre a servo d’un signor mi pose, / che m’avea generato d’un ribaldo / distruggitor di sé e di sue cose» (vv. 49–51).
- **Racconta:** è l'unico dannato della bolgia che racconta da dove viene, e comincia dai genitori: una madre che lo mette a servizio, un padre che ha distrutto sé e le sue cose. È quasi la definizione che il Canto XI dà dei violenti contro sé e contro i propri beni: «Puote omo avere in sé man violenta / e ne’ suoi beni» (XI 40–41). Io credo che Dante disegni una genealogia: il padre nel settimo cerchio, il figlio nell'ottavo. Messo a servizio da ragazzo, venderà a sua volta il servizio del re.
- **Ritorno:** «quivi mi misi a far baratteria, / di ch’io rendo ragione in questo caldo» (vv. 53–54).
- **Il test:** «rendo ragione» diventa la chiusura di un conto aperto dal padre: la lingua della contabilità per una vita venduta prima ancora di essere sua.

#### 3. Il sorco · ≈ 1 min

- **Dove:** dopo la riga 250 («Gli artigli.»), prima di «Barbariccia / rimette ordine.».
- **Ingresso e ritorno:** «Tra male gatte era venuto il sorco» (v. 58).
- **Racconta:** nel canto di prima il topo era Dante, acquattato dietro uno scoglio per non farsi vedere e poi stretto a Virgilio, mentre i diavoli si chiedevano se uncinarlo. Il topo fra le gatte non è solo il Navarrese.
- **Il test:** il proverbio diventa un autoritratto del condannato per baratteria.

#### 4. Semi sardi · ≈ 3,5 min

- **Dove:** in coda alla sezione, dopo la riga 349 («sotto minaccia.»).
- **Ingresso:** «ch’ebbe i nemici di suo donno in mano» (v. 83) e «Usa con esso donno Michel Zanche / di Logodoro» (vv. 88–89).
- **Racconta:** il «donno» tradito da frate Gomita è Nino Visconti, giudice di Gallura, che lo fece impiccare; in Purgatorio VIII Dante lo ritrova salvo: «Giudice Nin gentil, quanto mi piacque / quando ti vidi non esser tra’ rei!». Nino è nipote del conte Ugolino. Michel Zanche sarà ucciso dal genero, Branca d'Oria, e nel XXXIII un'anima dirà che Branca era già nel ghiaccio quando Michel Zanche «non era giunto ancora» nella pece dei Malebranche. E una parola da tribunale: Gomita i prigionieri li lasciò andare «di piano», cioè per via sommaria, senza processo; la lingua delle sentenze, nella bolgia della sentenza di Dante.
- **Ritorno:** «e a dir di Sardigna / le lingue lor non si sentono stanche» (vv. 89–90).
- **Il test:** la chiacchiera di due truffatori nasconde due fili tesi verso il fondo dell'Inferno: si ride, e intanto si è avvertiti.
- **Correzione nella stessa sezione:** «Vasel d'ogne froda.» (riga 332) diventa «Vasel d'ogni froda.», come il verso UTET.

#### Regia · Il novo ludo · ≈ 0,5 min di testo nuovo

- Resta solo ciò che cambia l'esperienza. Marco guarda in camera, «O tu che leggi, udirai novo ludo», e due righe nuove: Dante si volta verso di noi e ci dà il permesso di ridere.
- Poi il commento che c'è, da «Il Navarrese / coglie il suo tempo» a «da tirare fuori coi raffi.», a velocità doppia, senza pause, fino a uno stop netto. È il momento da palco del canto.

#### 5. Il bestiario · ≈ 2 min

- **Dove:** subito dopo lo stop, cioè dopo la riga 506 («da tirare fuori coi raffi.»), prima di «E mentre i Malebranche».
- **Ingresso:** «Lo caldo sghermitor subito fue; / ma però del levarsi era neente, / sì avìeno inviscate l’ali sue» (vv. 142–144).
- **Racconta:** tutto il canto è un bestiario: delfini, rane, una lontra, un porco, il topo fra le gatte, l'anitra che si tuffa davanti al falcone, lo sparviero, il «malvagio uccello». I dannati sono prede, i diavoli uccelli da caccia. E la fine è una trappola da uccellatore: «inviscate» e «impaniati» vengono dal vischio e dalla pania, la colla con cui si prendevano gli uccelli.
- **Ritorno:** «porser gli uncini verso gl’impaniati / ch’eran già cotti dentro da la crosta» (vv. 149–150).
- **Il test:** «impaniati» smette di essere un dettaglio comico e diventa la morale della favola, detta con una parola da caccia: i cacciatori presi come uccelli.

#### Chiusura · ≈ 0,2 min

- Prima della tesi, due righe: «Il condannato per baratteria / se ne va. / Restano impaniati / quelli che dovevano sorvegliarlo.»

### Cadute al test

- **La beffa e il cinema muto** (dalla scheda): solo informazione, diventano regia.
- **Il buon re Tebaldo:** colore, non cambia nessun verso.
- **Campaldino e la condanna**, due onde nella scheda, diventano una sola: «Due marce».

### Campione · onda 1, Due marce

Così come entrerebbe nel file, dopo la riga 92. Circa 4 minuti; i versi sono ricopiati da `Canto_22_source.txt` e confrontati riga per riga.

```markdown
Pausa.

E li ha visti davvero.

Pausa lunga.

11 giugno 1289.
Campaldino,
nel Casentino.

Pausa.

Firenze contro Arezzo.
Guelfi contro ghibellini.

Pausa.

Dante ha ventiquattro anni.

Combatte a cavallo,
fra i feditori:
la prima schiera,
quella che prende l'urto.

Pausa lunga.

L'urto arriva.
La prima schiera cede.

Pausa.

A rovesciare la battaglia
è una carica di riserva,
partita contro gli ordini.

La guida Corso Donati.

Pausa lunga.

Segnati questo nome.

Pausa.

Dodici anni dopo
Corso Donati
porterà i Neri al potere.

La parte
che manderà Dante in esilio.

Pausa lunga.

Più di un secolo dopo
Leonardo Bruni
legge una lettera di Dante,
oggi perduta.

E ne ricopia una riga.

Pausa.

Dante scrive
di aver avuto
«temenza molta,
e nella fine
grandissima allegrezza».

Pausa lunga.

Poi i fiorentini
vanno a razziare
le terre di Arezzo.

Pausa.

Corridor vidi
per la terra vostra,
o Aretini.

Pausa.

Non è un'immagine.

È un ricordo.

Pausa lunga.

Nel canto di prima
c'era Caprona,
due mesi dopo.

Questi due canti di diavoli
contengono
due battaglie
che Dante ha fatto davvero.

Pausa lunga.

Ma c'è una seconda marcia.

Pausa.

27 gennaio 1302.

Pausa.

Firenze, in mano ai Neri,
condanna Dante.
In contumacia.

Pausa.

Baratteria.
Guadagni illeciti.
Estorsioni.

Pausa lunga.

Cinquemila fiorini.
Due anni di confino.
Nessun ufficio pubblico,
mai più.

Pausa.

Lui non paga.
Non si presenta.

E il 10 marzo
arriva la seconda sentenza.

Se lo prendono,
lo bruciano vivo.

Pausa lunga.

A Firenze
non tornerà mai più.

Pausa.

E in quei mesi,
secondo la tradizione,
non c'era nemmeno.

Era a Roma,
ambasciatore.

Trattenuto da Bonifacio.

Pausa.

Il nostro cattivo
fuori scena.

Pausa lunga.

Adesso guarda
dove lo mette il poema.

Pausa.

Nella bolgia dei barattieri.

Cioè
nella bolgia
della sua condanna.

Pausa.

Scortato da dieci diavoli.

Gli stessi che,
nel canto di prima,
si chiedevano
se infilzarlo con i raffi.

Pausa lunga.

Io credo
che qui Dante
stia rispondendo
alla sentenza.

Pausa.

Non con un'arringa.

Con una farsa.

Pausa.

Mostra i barattieri veri,
uno per uno,
con i loro nomi.

E lui,
lì in mezzo,
è di passaggio.

Pausa lunga.

Ascolta il proverbio
che sceglie
proprio qui.

> né già con sì diversa cennamella
> cavalier vidi mover, né pedoni,
> né nave a segno di terra o di stella.
> Noi andavam con li diece demoni:
> ahi fiera compagnia! ma ne la chiesa
> coi santi, ed in taverna co’ ghiottoni!

Pausa lunga.

In chiesa coi santi.
In taverna coi ghiottoni.

Pausa.

Ogni luogo
ha la sua compagnia.

Pausa.

Detto da un uomo
condannato per baratteria,
mentre cammina
in mezzo ai barattieri.
```

### Da verificare

- Campaldino: la prima schiera respinta e la carica di Corso Donati (Villani, Compagni).
- Bruni, *Vita di Dante*: la frase della lettera, parola per parola.
- Le due sentenze del 1302, 27 gennaio e 10 marzo: capi d'accusa e pene.
- Dante a Roma presso Bonifacio nell'autunno 1301: tradizione, da dire come tale.
- Nino Visconti e l'impiccagione di frate Gomita; Branca d'Oria genero di Michel Zanche; «di piano» come formula giudiziaria.

## Prototipo 3 · Canto XXVI, l'onda centrale

**L'onda entra nella sezione «L’orazion picciola», dopo la riga 516 («del restare.»), e torna alla terzina successiva, vv. 121–123.** Dura circa 5 minuti e mezzo e porta il canto da 26 a circa 31; Faust e tutta la chiusura restano come sono. È più corta degli 8–10 minuti della scheda di proposito: il peso lo portano i versi e i silenzi, e ogni minuto in più la trasformerebbe in una lezione.

### Come è costruita

- **Perché lì.** Il copione ha appena detto che l'orazion picciola è una pressione che manda gli uomini a morire. L'onda porta la voce opposta, senza smentire quella lettura.
- **Ingresso.** I vv. 118–120, appena commentati: «Eppure / io non riesco / a chiudere questa terzina / qui.»
- **Arco.** Il luogo in tre parole; un nome, un mestiere, un numero; la marmitta, Pikolo, la lezione d'italiano; il canto come lo ricordava Levi, a pezzi e sempre in lezione UTET (vv. 85–90, v. 100, vv. 107–109, vv. 118–120); il vuoto di memoria, che è il momento da palco già approvato; la zuppa barattata per un verso, la montagna, la mezza riga da dire prima che sia tardi; la fila, e i cavoli e rape; il capitolo che finisce con l'ultimo verso del canto.
- **Ritorno.** La terzina interrotta, completata: «Li miei compagni fec’io sì acuti, / con questa orazion picciola, al cammino, / che a pena poscia li avrei ritenuti» (vv. 121–123).
- **Il test.** «Orazion picciola» e «al cammino» cambiano peso: sono le parole che portano Ulisse e i suoi al naufragio, e le stesse che per un'ora di strada hanno tenuto in piedi due uomini.
- **Un effetto in più, senza testo nuovo.** L'onda annuncia la montagna e la «mezza riga» senza dirle. Quando la lettura arriva ai vv. 133–141 il pubblico li ascolta con Levi accanto, e il commento che c'è già, «com’altrui piacque. / Non a Ulisse.», cambia peso da solo.
- **Cosa non fa.** Niente biografia oltre nome, mestiere e numero; nessuna immagine del campo, solo nero pieno; nessuna morale sulla cultura che salva.
- **Diritti.** Levi è ancora protetto: il testo è tutto in parafrasi. Una sola frase esatta, facoltativa, letta dal libro, al punto segnato.
- **Sospeso.** Il taglio di Nietzsche proposto nella scheda non si fa: tocca la parte su Faust.

### Il testo

Da inserire dopo la riga 516. Subito dopo riprendono la riga 518 («Pausa lunga.») e il commento che c'è, da «I compagni / non rispondono». Tutti i versi sono ricopiati da `Canto_26_source.txt` e confrontati riga per riga.

```markdown
Pausa lunga.

Eppure
io non riesco
a chiudere questa terzina
qui.

Pausa.

Perché queste parole
hanno avuto
un altro ascoltatore.

[Schermo: nero pieno. Nessuna immagine del campo.]

Pausa lunga.

Monowitz.
Auschwitz.
1944.

Pausa.

Un chimico di Torino.
Si chiama Primo Levi.

Sul braccio
ha un numero.

174517.

Pausa lunga.

Un giorno
il più giovane della squadra,
un ragazzo alsaziano
che tutti chiamano Pikolo,
lo sceglie
per andare a prendere la zuppa.

Pausa.

È un privilegio.

Si va in due,
con la marmitta appesa a due stanghe.

E per un’ora,
più o meno,
si può parlare.

Pausa lunga.

Pikolo vuole imparare l’italiano.

E Levi,
non sa neanche lui perché,
gli dà Dante.

Pausa.

Questo canto.

Pausa lunga.

Comincia da dove
abbiamo cominciato noi,
poco fa.

> Lo maggior corno de la fiamma antica
> cominciò a crollar, sì mormorando
> pur come quella cui vento affatica;
> indi, la cima qua e là menando,
> come fosse la lingua che parlasse,
> gittò voce di fuori e disse: «Quando

Pausa.

Quando.

E lì si ferma.

Deve tradurre.
Si inceppa.
Il francese non basta.

Pausa.

Salta.
Va avanti a pezzi.
Si ferma su due parole.

> ma misi me per l’alto mare aperto,

Misi me.

Pausa.

Non è soltanto partire.

È lanciarsi,
con tutto il proprio peso,
dall’altra parte
di un limite.

Pausa lunga.

Poi il limite vero.

> quando venimmo a quella foce stretta,
> dov’Ercule segnò li suoi riguardi,
> a ciò che l’uom più oltre non si metta:

Pausa.

Due uomini
che non possono uscire da un recinto
parlano delle colonne d’Ercole.

Pausa lunga.

Poi arrivano
questi tre versi.

> Considerate la vostra semenza:
> fatti non foste a viver come bruti,
> ma per seguir virtute e conoscenza’.

Pausa lunga.

Levi racconta
di averli sentiti
come se fosse la prima volta.

Come un richiamo
che veniva da molto lontano,
e da molto in alto.

Pausa.

Per un attimo,
il campo non c’è più.

Né il numero.
Né il luogo.

[Facoltativo: al posto delle righe da «Levi racconta» a «Né il luogo», la frase esatta di Levi, letta dal libro, con autore, opera ed editore. Una sola.]

Pausa lunga.

Fatti non foste
a viver come bruti.

Pausa.

Detto lì.

In un posto costruito
per fare degli uomini
dei bruti.

Pausa lunga.

Pikolo gli chiede
di ripeterli.

Pausa.

E Levi
va avanti.

> Li miei compagni fec’io sì acuti,

[Momento da palco: Marco si ferma qui, a metà della terzina. Il verso dopo non arriva. Silenzio. Lo sguardo cerca. Cinque, sei secondi.]

Pausa lunga.

Qui
la memoria si rompe.

Pausa.

Mancano dei versi.

Levi dice
che avrebbe barattato
la sua zuppa
per ritrovarli.

Pausa.

La zuppa.

Là dentro.

Pausa lunga.

Poi tornano dei pezzi.

Una montagna,
bruna per la distanza,
che gli ricorda le sue:
quelle che vedeva dal treno,
la sera,
tornando a Torino.

Pausa.

E una mezza riga
che all’improvviso
gli sembra la più importante di tutte.

Deve farla arrivare a Pikolo.
Adesso.
Prima che sia troppo tardi.

Pausa.

Perché domani
uno dei due
potrebbe non esserci più.

Pausa lunga.

Quella mezza riga
la sentiremo fra poco,
al suo posto nel canto.

Pausa.

Intanto sono arrivati alle cucine.

C’è la fila.

Annunciano la zuppa del giorno,
in tre lingue.

Cavoli e rape.

Pausa lunga.

Il capitolo si chiude
con l’ultimo verso di questo canto.

Pausa.

Anche noi
ci arriveremo.

Pausa lunga.

Ma adesso
riprendo
da dove mi sono fermato.

> Li miei compagni fec’io sì acuti,
> con questa orazion picciola, al cammino,
> che a pena poscia li avrei ritenuti.

Pausa lunga.

Orazion picciola.

Pausa.

Poco fa
l’abbiamo chiamata
una pressione.

Parole
che mandano degli uomini
a morire.

Pausa.

Lo sono.

Pausa lunga.

Ma per un’ora,
su quella strada,
le stesse parole
hanno tenuto in piedi
due uomini.

Pausa.

Al cammino.

Pausa lunga.

Io credo
che il canto
ci chieda di tenere insieme
tutte e due le cose.

Senza scegliere
la più comoda.
```

### Da verificare

- Sul testo Einaudi del capitolo «Il canto di Ulisse»: i versi che Levi ricorda e il loro ordine; la richiesta di Pikolo di ripetere; la marmitta e l'ora di cammino; le tre lingue della zuppa.
- La traduzione in francese per Pikolo, e le montagne viste dal treno tornando a Torino.

## Da approvare

Dopo il tuo via scrivo i tre file, ricalcolo le durate sul testo vero e li lascio senza commit, per la revisione.

- [ ] Prototipo XV: otto onde, circa 40 minuti
- [ ] Prototipo XXII: cinque onde e una regia, circa 29 minuti
- [ ] Prototipo XXVI: l'onda Levi così com'è scritta, dopo la riga 516
- [ ] Le nove correzioni dei Canti I–IV, da applicare quando lo dirai: non sono tra i tre prototipi
- [ ] Un passaggio unico per allineare a UTET le altre 78 citazioni, dopo i prototipi
- [ ] Le frasi esatte di Eliot e di Levi, una per episodio, scelte da te

## Appendice · Le altre citazioni da allineare a UTET

Trovate confrontando in automatico ogni riga di commento con il testo UTET dello stesso canto, poi ripulite a mano dalle parafrasi: 78 righe, e una citazione dell'VIII ne occupa due. Le righe sono quelle dei file al 1° ottobre 2026 e nessuna è stata toccata; i tre casi già nel micro-audit (II 564, III 384, IV 167) non sono ripetuti.

| Canto | Riga | Nel commento oggi | UTET (verso recitato) |
| --- | --: | --- | --- |
| II | 179 | Io non Enea, io non Paulo sono. | Io non Enea, io non Paolo sono: |
| II | 188 | me degno a ciò né io né altri 'l crede. | me degno a ciò né io né altri crede. |
| II | 375 | pensando, consumai la 'mpresa. | perché, pensando, consumai l’impresa / che fu nel cominciar cotanto tosta. |
| III | 80 | Lasciate ogne speranza, voi ch'intrate. | LASCIATE OGNI SPERANZA, VOI CH’ENTRATE. |
| III | 120 | Qui si convien lasciare ogne sospetto; | Qui si convien lasciare ogni sospetto; |
| III | 121 | ogne viltà convien che qui sia morta. | ogni viltà convien che qui sia morta. |
| III | 202 | Le anime triste di coloro | tengon l’anime triste di coloro / che visser sanza infamia e sanza lodo. |
| III | 203 | che visser sanza 'nfamia e sanza lodo. | che visser sanza infamia e sanza lodo. |
| III | 209 | Sanza 'nfamia e sanza lodo. | che visser sanza infamia e sanza lodo. |
| III | 294 | che 'nvidïosi son d'ogne altra sorte. | che invidiosi son d’ogni altra sorte. |
| III | 344 | D'ogne posa mi parea indegna. | che d’ogni posa mi pareva indegna; |
| III | 505 | Le cose ti fier conte | Ed egli a me: Le cose ti fìer conte |
| III | 520 | Infino al fiume del parlar mi trassi. | infino al fiume di parlar mi trassi. |
| III | 564 | Tu che se' costì, anima viva. | E tu che sei costì, anima viva, |
| III | 779 | E caddi come l'uom cui sonno piglia. | e caddi come l’uom che ’l sonno piglia. |
| IV | 315 | di quella fede che vince ogne errore. | di quella fede che vince ogni errore: |
| IV | 352 | Io era nuovo in questo stato | rispuose: Io era novo in questo stato, |
| IV | 507 | che dal modo de li altri li diparte? | che dal modo degli altri li diparte? |
| IV | 519 | che di lor suona sù ne la tua vita, | che di lor suona su ne la tua vita, |
| IV | 520 | grazia acquista in ciel | grazia acquista nel ciel, che sì li avanza. |
| IV | 629 | Così vid' i' adunar la bella scola | Così vidi adunar la bella scola |
| IV | 630 | di quel segnor de l'altissimo canto. | di quel signor de l’altissimo canto, |
| IV | 857 | il maestro di color che sanno. | vidi ’l maestro di color che sanno |
| V | 246 | loco d'ogne luce muto. | Io venni in luogo d’ogni luce muto, |
| V | 717 | O animal grazïoso e benigno. | O animal grazioso e benigno |
| V | 738 | Se fosse amico il re dell'universo, | se fosse amico il re de l’universo |
| V | 771 | su la marina dove 'l Po discende | su la marina dove il Po discende |
| V | 772 | per aver pace co' seguaci sui. | per aver pace coi seguaci sui. |
| V | 830 | e 'l modo ancor m'offende. | che mi fu tolta; e il modo ancor m’offende. |
| V | 1165 | a lagrimar mi fanno tristo e pio. | a lacrimar mi fanno tristo e pio. |
| V | 1183 | Al tempo d'i dolci sospiri, | Ma dimmi: al tempo de’ dolci sospiri, |
| V | 1185 | che conosceste i dubbiosi disiri? | che conosceste i dubbiosi desiri? |
| V | 1252 | E ciò sa 'l tuo dottore. | ne la miseria; e ciò sa il tuo dottore. |
| V | 1268 | Ma s'a conoscer la prima radice | Ma se a conoscer la prima radice |
| V | 1288 | Noi leggiavamo un giorno per diletto | Noi leggevamo un giorno per diletto |
| V | 1325 | Per più fiate li occhi ci sospinse | Per più fiate gli occhi ci sospinse |
| V | 1367 | Quando leggemmo il disïato riso | Quando leggemmo il disiato riso |
| V | 1368 | esser basciato da cotanto amante, | esser baciato da cotanto amante, |
| V | 1370 | la bocca mi basciò tutto tremante. | la bocca mi baciò tutto tremante. |
| V | 1436 | Galeotto fu 'l libro e chi lo scrisse: | Galeotto fu il libro e chi lo scrisse. |
| VI | 328 | Ponavam le piante | la greve pioggia, e ponevam le piante |
| VI | 329 | sovra lor vanità che par persona. | sopra lor vanità che par persona. |
| VI | 373 | O tu che se' per questo 'nferno tratto. | O tu che se’ per questo inferno tratto, |
| VI | 619 | mi pesa sì, ch'a lagrimar mi 'nvita. | mi pesa sì, ch’a lagrimar m’invita; |
| VI | 764 | c'hanno i cuori accesi. | le tre faville c’hanno i cori accesi. |
| VI | 961 | Ché gran disio mi stringe di savere | ché gran disio mi stringe di sapere |
| VI | 963 | o lo 'nferno li attosca. | se ’l ciel li addolcia o l’inferno li attosca. |
| VI | 1026 | priegoti ch'a la mente altrui mi rechi. | priegoti che a la mente altrui mi rechi: |
| VI | 1170 | cresceranno ei dopo la gran sentenza, | crescerann’ei dopo la gran sentenza, |
| VI | 1195 | Ritorna a tua scïenza, | Ed egli a me: Ritorna a tua scienza, |
| VI | 1205 | più sente il bene | più senta il bene, e così la doglienza. |
| VII | 116 | di scendere questa roccia. | non ci torrà lo scender questa roccia. |
| VII | 172 | fé la vendetta del superbo strupo. | fe’ la vendetta del superbo strupo. |
| VII | 248 | Ah giustizia di Dio. | Ahi giustizia di Dio! tante chi stipa |
| VII | 424 | Tutti quanti fuor guerci | Ed egli a me: Tutti quanti fur guerci |
| VII | 460 | Questi fuor cherci, | Questi fur cherci, che non han coperchio |
| VII | 600 | i beni del mondo? | che è, che i ben del mondo ha sì tra branche? |
| VII | 872 | Ma or discendiamo omai a maggior pieta. | Or discendiamo omai a maggior pièta: |
| VII | 888 | Già ogne stella cade | già ogni stella cade che saliva |
| VII | 1016 | c'è gente che sospira. | che sotto l’acqua ha gente che sospira, |
| VIII | 105 | il mar di tutto 'l senno, | E io mi volsi al mar di tutto il senno; |
| VIII | 195 | Flegïàs, Flegïàs, tu gridi a vòto. | Flegiàs, Flegiàs, tu gridi a voto, |
| VIII | 354 | Ma tu chi sei, | ma tu chi se’, che sì se’ fatto brutto? |
| VIII | 421 | Via costà con li altri cani! | dicendo: Via costà con gli altri cani! |
| VIII | 440 | benedetta colei che 'n te s'incinse! | benedetta colei che in te s’incinse! |
| VIII | 485 | così s'è l'ombra sua qui furïosa. | così s’è l’ombra sua qui furiosa. |
| VIII | 500 | Quanti si tegnon or là sù gran regi | Quanti si tengon or là su gran regi, |
| VIII | 509 | come porci nel brago, | che qui staranno come porci in brago, |
| VIII | 549 | Di tal disïo | di tal disio converrà che tu goda. |
| VIII | 550 | convien che tu goda. | di tal disio converrà che tu goda. |
| VIII | 728 | c'ha nome Dite. | s’appressa la città che ha nome Dite, |
| VIII | 816 | Il foco etterno | fossero. Ed ei mi disse: Il foco eterno |
| VIII | 938 | Pruovi, se sa. | provi, se sa; ché tu qui rimarrai |
| VIII | 1012 | Ché 'l nostro passo | mi disse: Non temer, ché il nostro passo |
| VIII | 1055 | Ch'i' non ti lascerò | ch’io non ti lascerò nel mondo basso. |
| VIII | 1113 | nel petto al mio segnor. | nel petto al mio signor, che fuor rimase |
| XI | 432 | lo 'ngegno tuo? | disse lo ingegno tuo da quel che sole? |
| XXII | 332 | Vasel d’ogne froda. | quel di Gallura, vasel d’ogni froda, |
