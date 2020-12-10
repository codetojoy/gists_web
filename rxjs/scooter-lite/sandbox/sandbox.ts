import { of, from, fromEvent } from "rxjs";
import { filter, tap, map, mergeMap, reduce } from "rxjs/operators";

const seed = [
  "Johann Sebastian Bach",
  "Ludwig van Beethoven",
  "Wolfgang Amadeus Mozart",
  "Franz Schubert",
  "Richard Wagner",
  "Antonio Vivaldi",
  "Johannes Brahms",
  "Giuseppe Verdi",
  "Robert Schumann",
  "Giacomo Puccini",
  "Antonín Leopold Dvorák",
  "George Frideric Handel",
  "Franz Liszt",
  "Franz Joseph Haydn",
  "Frédéric Chopin",
  "Igor Stravinsky",
  "Gustav Mahler",
  "Richard Strauss",
  "Dmitri Dmitriyevich Shostakovich",
  "Hector Berlioz",
];

let players = shuffleNames([...seed]);
let losers = [];
let count = 0;
let numRound = 0;
const NUM_CHANCES = 2;
const MAX_NUM_LOSERS = players.length - 1;

function shuffleNames(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function doesSurviveRound(player, losers, numChances) {
  const doesSurvive = oneInNChance(numChances);

  if (!doesSurvive) {
    losers.push(player);
  }
}

function oneInNChance(numChances) {
  const x = getRandom(1, numChances);
  const result = x == 1;

  return result;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initializeTextAreas() {
  count = 0;
  playersTextArea.innerHTML = "";
  losersTextArea.innerHTML = "";

  of(...players)
    .pipe(tap((p) => count++))
    .subscribe((i) => (playersTextArea.innerHTML += `${count} : ${i}\n`));
}

// -----------------------

let resetButton = <HTMLElement>document.querySelector("#reset");
let goButton = <HTMLElement>document.querySelector("#go");
let playersTextArea = <HTMLElement>document.querySelector("#players");
let losersTextArea = <HTMLElement>document.querySelector("#losers");

let resetClick$ = fromEvent(resetButton, "click");
let goClick$ = fromEvent(goButton, "click");

resetClick$.subscribe(() => {
  players = shuffleNames([...seed]);
  numRound = 0;
  losers = [];
  initializeTextAreas();
});

goClick$.subscribe(() => {
  count = 0;
  numRound++;
  playersTextArea.innerHTML = "";
  losersTextArea.innerHTML = "";

  of(...players)
    .pipe(
      filter((p) => losers.length < MAX_NUM_LOSERS),
      filter((p) => !losers.includes(p)),
      tap((p) => doesSurviveRound(p, losers, NUM_CHANCES))
    )
    .subscribe();

  players = players.filter((p) => !losers.includes(p));

  of(...players)
    .pipe(
      tap((p) => {
        count++;
        console.log(
          `TRACER r: ${numRound} c: ${count} # losers: ${losers.length}`
        );
      })
    )
    .subscribe((p) => (playersTextArea.innerHTML += `${count} : ${p}\n`));

  of(...losers)
    .pipe()
    .subscribe((loser) => (losersTextArea.innerHTML += `${loser}\n`));
});

// ------------------------

initializeTextAreas();
