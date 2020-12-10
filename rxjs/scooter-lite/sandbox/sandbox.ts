import { of, fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

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
let playerCount = 1;
let loserCount = 1;
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

  return doesSurvive;
}

function oneInNChance(numChances) {
  const x = getRandom(1, numChances);
  const result = x == 1;

  return result;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hasFoundWinner(losers) {
  return losers.length == MAX_NUM_LOSERS;
}

function initializeTextAreas() {
  playerCount = 1;
  loserCount = 1;
  playersTextArea.innerHTML = "";
  losersTextArea.innerHTML = "";

  of(...players).subscribe(
    (i) => (playersTextArea.innerHTML += `${playerCount++} : ${i}\n`)
  );
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
  playerCount = 1;
  numRound++;
  playersTextArea.innerHTML = "";

  of(...players)
    .pipe(
      filter((p) => !hasFoundWinner(losers)),
      filter((p) => !losers.includes(p)),
      filter((p) => doesSurviveRound(p, losers, NUM_CHANCES))
    )
    .subscribe(
      (p) => (playersTextArea.innerHTML += `${playerCount++} : ${p}\n`)
    );

  // this is necessary because the above stream doesn't work when there
  // is just the winner remaining:
  if (hasFoundWinner(losers)) {
    playersTextArea.innerHTML = ""; // in case the above stream did write the winner
    of(...players)
      .pipe(filter((p) => !losers.includes(p)))
      .subscribe(
        (p) => (playersTextArea.innerHTML += `${playerCount++} : ${p}\n`)
      );
  }

  loserCount = 1;
  losersTextArea.innerHTML = "";

  of(...losers).subscribe(
    (loser) => (losersTextArea.innerHTML += `${loserCount++} : ${loser}\n`)
  );
});

// ------------------------

initializeTextAreas();
