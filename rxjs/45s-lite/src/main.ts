import { Card } from "./card";
import { Deck } from "./deck";
import { Constants } from "./constants";
import { Dealer } from "./dealer";
import { Config } from "./config";
import { Table } from "./table";
import { Player } from "./player";

import { of, from, fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

let resetButton = <HTMLElement>document.querySelector("#reset");
let dealButton = <HTMLElement>document.querySelector("#deal");
let playRoundButton = <HTMLElement>document.querySelector("#playRound");
let displayTextArea = <HTMLElement>document.querySelector("#display");

let resetClick$ = fromEvent(resetButton, "click");
let dealClick$ = fromEvent(dealButton, "click");
let playRoundClick$ = fromEvent(playRoundButton, "click");

let table: Table = new Config().table;
let dealer: Dealer = new Dealer();

resetClick$.subscribe(() => {
  table = new Config().table;
  dealer = new Dealer();
  initializeTextAreas();
});

dealClick$.subscribe(() => {
  if (table.roundNum === 0) {
    table = new Config().table;
    dealer = new Dealer();
    dealer.deal(table);
  } else {
    window.alert("game in progress");
  }

  displayTextArea.innerHTML = `deck: ${dealer.numCardsInDeck}\n`;
  displayTextArea.innerHTML += `${table.toString()}`;
});

playRoundClick$.subscribe(() => {
  dealer.playRound(table);

  displayTextArea.innerHTML = `deck: ${dealer.numCardsInDeck}\n`;
  displayTextArea.innerHTML += `${table.toString()}`;
});

function initializeTextAreas() {
  displayTextArea.innerHTML = "";
}
