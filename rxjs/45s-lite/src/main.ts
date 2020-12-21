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
let goButton = <HTMLElement>document.querySelector("#go");
let displayTextArea = <HTMLElement>document.querySelector("#display");

let resetClick$ = fromEvent(resetButton, "click");
let goClick$ = fromEvent(goButton, "click");

let table: Table = new Config().table;
let dealer: Dealer = new Dealer();

resetClick$.subscribe(() => {
  initializeTextAreas();
});

goClick$.subscribe(() => {
  if (table.roundNum === 0) {
    dealer.deal(table);
  }

  dealer.playRound(table);

  displayTextArea.innerHTML = `deck: ${dealer.numCardsInDeck}\n`;
  displayTextArea.innerHTML += `${table.toString()}`;
});

function initializeTextAreas() {
  displayTextArea.innerHTML = "";
}
