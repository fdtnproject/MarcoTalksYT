# MarcoTalksYT

Repo statico per organizzare script, immagini e pagine di supporto per il canale YouTube.

## Direzione consigliata

Per questo progetto ti consiglio una struttura per:

- canale
- playlist
- sottoplaylist opzionali
- episodio

Nel caso di `Divine Comedy`, la struttura scala bene cosi:

- `index.html`: home del repo
- `divine-comedy/`: playlist principale
- `divine-comedy/index.html`: overview della playlist
- `divine-comedy/inferno/`: prima cantica
- `divine-comedy/inferno/index.html`: elenco canti Inferno
- `divine-comedy/purgatorio/`: seconda cantica
- `divine-comedy/purgatorio/index.html`: elenco canti Purgatorio
- `divine-comedy/paradiso/`: terza cantica
- `divine-comedy/paradiso/index.html`: elenco canti Paradiso
- `divine-comedy/inferno/canto-01/`: episodio singolo
- `divine-comedy/inferno/canto-01/index.html`: landing del canto
- `divine-comedy/inferno/canto-01/scripts/`: testi, bozze, DOCX, TXT
- `divine-comedy/inferno/canto-01/images/`: cover, thumbnail, immagini scena
- `divine-comedy/inferno/canto-01/metadata.json`: metadati utili per naming e stato lavoro

## Perche cosi

Questa impostazione mantiene il lato buono di `bySaraYT`, ma evita di mischiare file diversi nella stessa cartella.

In particolare:

- `scripts/` contiene solo materiali testuali
- `images/` contiene solo asset visivi
- ogni episodio e autosufficiente
- i link restano facili da mantenere
- le tre cantiche restano parallele e coerenti tra loro

## Convenzioni utili

- usa slug minuscoli con trattini: `canto-01`, `canto-02`
- tieni il numero del canto sempre a due cifre
- non mettere immagini dentro `scripts/`: meglio tenerle in `images/`
- se vuoi una versione HTML da leggere in teleprompter o da mandare in TV, aggiungila accanto a `index.html`

## Pubblicazione

Il repo e gia inizializzato con Git in locale.

Per pubblicarlo:

1. crea il repository su GitHub
2. collega il remote
3. pusha `main`
4. abilita GitHub Pages dalla root

## Prossimi step naturali

- aggiungere `purgatorio/` e `paradiso/`
- creare `canto-02/`
- aggiungere una pagina HTML di lettura per il testo completo
- automatizzare generazione di `metadata.json` e cartelle episodio
