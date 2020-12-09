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

// TODO: I think this could be better written using RxJS operators
function doesLive(player, losers, numChances) {
  let result = true;
  const isOnePlayerLeft = losers.length === MAX_NUM_LOSERS;

  if (!isOnePlayerLeft) {
    const isAlreadyLoser = losers.includes(player);

    if (!isAlreadyLoser) {
      // roll the dice for this player
      result = oneInNChance(numChances);

      if (!result) {
        losers.push(player);
      }
    }
  }

  return result;
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
      filter((p) => doesLive(p, losers, NUM_CHANCES)),
      tap((p) => {
        count++;
        console.log(
          `TRACER r: ${numRound} c: ${count} # losers: ${losers.length}`
        );
      })
    )
    .subscribe((i) => (playersTextArea.innerHTML += `${count} : ${i}\n`));

  players = players.filter((p) => !losers.includes(p));

  of(...losers)
    .pipe()
    .subscribe((loser) => (losersTextArea.innerHTML += `${loser}\n`));
});

// ------------------------

initializeTextAreas();
