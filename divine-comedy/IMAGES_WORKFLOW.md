# Divine Comedy — Images Workflow

Questo progetto usa un flusso semplice:

`images/` del canto -> `stage.html?canto=XX` -> GitHub Pages -> cast da browser

## Dove mettere le immagini

Ogni canto tiene i suoi asset qui:

- `divine-comedy/inferno/canto-01/images/`
- `divine-comedy/inferno/canto-02/images/`
- ...

## Formati consigliati

Per il palco online conviene usare:

- `.png`
- `.jpg`
- `.webp`

Da evitare per il casting:

- `.heic`

I browser e i TV lo gestiscono peggio; meglio convertirlo prima in PNG o JPG.

## Convenzione nomi

Meglio nomi stabili, senza spazi:

- `01_canto_01.png`
- `01_canto_02.png`
- `02_canto_01.png`

Se un canto cresce, puoi usare:

- `08_flegias_barca.jpg`
- `08_argenti.jpg`
- `08_dite_meschite.jpg`

## Come lo stage trova le immagini

Lo stage non legge automaticamente la cartella.
Le immagini vanno agganciate nel manifest dentro:

- [stage.html](/Users/marcosanna/Sites/MarcoTalksYT/divine-comedy/stage.html:201)

Ogni canto ha:

- `basePath`
- una lista `slides`

Le slide possono essere:

- `image`
- `text`
- `black`

## Stato attuale

- `canto-01`: pronto con immagini web reali
- `canto-02`: pronto in versione minima con un'immagine reale
- `canto-03` a `canto-08`: al momento hanno ancora placeholder o file legacy `._...`, che non vanno usati

## Link utili per il cast

Locale:

- [Stage Canto 01](/Users/marcosanna/Sites/MarcoTalksYT/divine-comedy/stage.html?canto=01)
- [Stage Canto 02](/Users/marcosanna/Sites/MarcoTalksYT/divine-comedy/stage.html?canto=02)

Quando pushi su GitHub Pages, il formato diventa:

- `https://fdtnproject.github.io/MarcoTalksYT/divine-comedy/stage.html?canto=01`
- `https://fdtnproject.github.io/MarcoTalksYT/divine-comedy/stage.html?canto=02`

## Regola pratica

Se aggiungi immagini nuove:

1. mettile nella cartella `images/` del canto
2. usa PNG/JPG
3. aggiorna il manifest in `stage.html`
4. pusha
5. casta la pagina stage del canto
