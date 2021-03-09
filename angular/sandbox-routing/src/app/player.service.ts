import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  private players: Player[] = [];
  private nextId: number = 5150;

  constructor() {
    let player1: Player = new Player(this.getNextId(), 'User', 'interactive');
    let player2: Player = new Player(this.getNextId(), 'Mozart', 'NextCard');
    let player3: Player = new Player(this.getNextId(), 'Brahms', 'NearestCard');

    this.players.push(player1, player2, player3);
  }

  getNextId(): number {
    return this.nextId++;
  }

  findPlayerById(id: number): Player {
    return this.players.find((recipe) => recipe.id == id);
  }

  findIndexById(id: number): number {
    let result = 0;
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

  updatePlayer(player: Player): void {
    let index = this.findIndexById(player.id);
    this.players[index].name = player.name;
    this.players[index].strategy = player.strategy;
  }

  deletePlayerById(id: number): void {
    this.players = this.players.filter((p) => p.id != id);
  }

  getPlayers(): Player[] {
    return this.players.slice();
  }
}
