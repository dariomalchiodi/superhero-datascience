# superhero-datascience

[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/dariomalchiodi/superhero-datascience/master)



![Superhero logo](content/img/ds-logo.png)

# Superhero data science

## Vol 1: probabilità e statistica

## D. Malchiodi

Questa raccolta di dispense è a uso dei miei studenti dell'insegnamento di
[Statistica e analisi dei
dati](http://malchiodi.di.unimi.it/teaching/data-analytics). Gli argomenti
trattati riguardano i temi non presenti sul libro di testo adottato e sono
quindi da intendersi come materiale integrativo (da leggere: **non**
sostitutivo del libro di testo!).

Le dispense possono essere utilizzate in tre modi differenti: leggendo la
versione statica tramite browser, utilizzando una versione interattiva basata
su Docker oppure clonando un repository github.

## Versione statica
Nella loro versione statica le dispense sono consultabili tramite un browser
Web (in versione recente) collegandosi all'indirizzo
https://dariomalchiodi.gitlab.io/sad-python-book.

## Versione interattiva basata su Docker
Il contenuto delle dispense è scritto utilizzando dei notebook jupyter, e
quindi è possibile eseguire e modificare il codice in esse contenuto. In
particolare, la versione basata su Docker non richiede di effettuare alcuna
installazione (a parte ovviamente quella di Docker). Per utilizzare le dispense
è sufficiente, nell'ordine:

1. aprire un terminale (aka prompt dei comandi) e posizionarsi nella directory in cui si vuole tener traccia del proprio lavoro;
2. Eseguire il comando `docker pull dariomalchiodi/sad` al fine di scaricare, se serve, la versione più aggiornata del materiale;
3. Eseguire il comando `docker run --rm -ti -p 127.0.0.1:8888:8888 -v $(pwd):/home/jovyan/my-work dariomalchiodi/sad`;
4. Analizzare l'output ottenuto e da esso copiare il testo `http://localhost:8888/?token=TOKEN`, dove `TOKEN` rappresenta una successione di caratteri alfanumerici;
5. Incollare il testo copiato nella barra indirizzi del proprio browser.

## Versione interattiva basata su git
Chi preferisce cimentarsi con l'installazione degli strumenti utilizzati (e i
miei studenti dovrebbero sentire l'impulso di farlo...) può scaricare e
utilizzare i soli notebook clonando il repository
`git@gitlab.com:dariomalchiodi/sad-python-book.git`. Per verificare quale
software installare è sufficiente analizzare il contenuto del file Dockerfile
all'interno del repository stesso.

# Contenuti

- Introduzione a python
 - I tipi di dati in python
  - Le liste
  - Operatori, funzioni e metodi per le liste
  - Le tuple
  - Le stringhe
  - Gli insiemi
  - I dizionari
 - Strutture di controllo
 - Funzioni
 - Importare moduli
 - Disegnare grafici
 - Leggere dati da file (e un po' di trucchi)
- Pandas
 - Serie
 - Visualizzione grafica di una serie
 - Operazioni con le serie
 - Dataframe
- Dati e frequenze
 - Dati quantitativi e qualitativi
  - Classificazione dei dati qualitativi
  - Classificazione dei dati quantitativi
 - Frequenze assolute e relative e loro visualizzazione
 - Frequenze cumulate
  - Diagrammi di Pareto
 - Frequenze congiunte e marginali
 - Alcuni approfondimenti sulla generazione dei grafici
 - I diagrammi stelo-foglia
- Calcolo della dispersione in pandas
  - Indici di dispersione
  - Box plot
  - Diagrammi Q-Q
  - Simmetria, distribuzioni approssimativamente normali e regola empirica
  - Una nota sulla produzione dei grafici
- Indici di eterogeneità
  - Indice di eterogeneità di Gini
  - Entropia
  - Alberi di decisione
  - Indici di concentrazione
- Trasformazione dei dati
  - Trasformazioni lineari
    - Cambiamento di origine (traslazione)
    - Cambiamento di scala (dilatazione o contrazione)
    - Cambiamento di origine e scala
    - Standardizzazione
  - Trasformazioni logaritmiche
- Analisi della varianza
  - Dimostrazione
- Analisi di classificatori
  - Sensibilità e specificità
    - Classificatori costanti
    - Classificatori ideali
    - Classificatori casuali
  - Classificatori a soglia

