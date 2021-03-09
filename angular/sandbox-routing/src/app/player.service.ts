import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  private players: Player[] = [];
  private nextId: number = 5150;

  constructor() {
    let player1: Player = new Player(this.getNextId(), 'You', 'interactive');
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

  getPlayers(): Player[] {
    return this.players.slice();
  }
}
