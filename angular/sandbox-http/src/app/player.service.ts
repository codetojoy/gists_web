import { EventEmitter, Injectable } from '@angular/core';
import { Player, Strategy } from './player.model';

@Injectable()
export class PlayerService {
  private players: Player[] = [];
  private nextId: number = 5150;
  playersChanged: EventEmitter<Player[]> = new EventEmitter<Player[]>();

  constructor() {
    let player1: Player = new Player(
      this.getNextId(),
      'User',
      Strategy.UserChoice
    );
    let player2: Player = new Player(
      this.getNextId(),
      'Mozart',
      Strategy.NextCard
    );
    let player3: Player = new Player(
      this.getNextId(),
      'Brahms',
      Strategy.MaxCard
    );

    this.players.push(player1, player2, player3);
  }

  getNextId(): number {
    return this.nextId++;
  }

  findPlayerById(id: number): Player {
    return this.players.find((recipe) => recipe.id == id);
  }

  findIndexById(id: number): number {
    let result = -1;
    this.players.forEach((player, index) => {
      if (player.id === id) {
        result = index;
      }
    });
    return result;
  }

  logPlayers(): void {
    this.players.forEach((player, index) => {
      console.log(
        `TRACER ${index} ${player.id} ${player.name} ${player.strategy}`
      );
    });
  }

  firePlayersChangedEvent(): void {
    this.playersChanged.emit(this.getPlayers());
  }

  newPlayer(): Player {
    let player = new Player(this.getNextId(), 'placeholder', Strategy.NextCard);
    return player;
  }

  updatePlayer(player: Player): void {
    let index = this.findIndexById(player.id);

    if (index == -1) {
      // new player being saved
      this.players.push(player);
    } else {
      this.players[index].name = player.name;
      this.players[index].strategy = player.strategy;
    }

    this.firePlayersChangedEvent();
  }

  deletePlayerById(id: number): void {
    this.players = this.players.filter((p) => p.id != id);
    this.firePlayersChangedEvent();
  }

  getPlayers(): Player[] {
    return this.players.slice();
  }
}
