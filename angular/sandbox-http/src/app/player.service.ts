import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player, Strategy } from './player.model';
import { Endpoints } from './util/Endpoints';

@Injectable()
export class PlayerService {
  private endpoints: Endpoints = new Endpoints();
  private players: Player[] = [];
  private nextId: number = 5150;
  playersChanged: Subject<Player[]> = new Subject<Player[]>();

  constructor(private http: HttpClient) {}

  getNextId(): number {
    return this.nextId++;
  }

  findPlayerById(id: string): Player {
    console.log(`TRACER 28-MAR id: ${id} # p: ${this.players.length}`);
    return this.players.find((player) => player.id === id);
  }

  findIndexById(id: string): number {
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

  private notifyPlayersChanged(): void {
    this.playersChanged.next(this.getPlayers());
  }

  newPlayer(): Player {
    let player: Player = {
      name: 'EVH5150',
      strategy: Strategy.NextCard,
    };
    return player;
  }

  /*
  updatePlayer(player: Player): void {
    let newPlayer: Player = {};
    let index = this.findIndexById(player.id);

    if (index == -1) {
      // new player being saved
      this.players.push(player);
    } else {
      this.players[index].name = player.name;
      this.players[index].strategy = player.strategy;
    }

    this.notifyPlayersChanged();
  }
  */

  getPlayers(): Player[] {
    console.log(
      `TRACER hello PS.getP vancouver millionaires # p: ${this.players.length}`
    );
    return this.players.slice();
  }

  loadPlayers(): void {
    this.fetchPlayers();
  }

  updatePlayer(player: Player): void {
    this.http
      .put(this.endpoints.getByIdUri(player.id), player)
      .subscribe((responseData) => {
        console.log(`TRACER 29-MAR put OK !!! `);
        this.notifyPlayersChanged();
      });
  }

  deletePlayerById(id: string): void {
    this.http
      .delete(this.endpoints.getByIdUri(id))
      .subscribe((responseData) => {
        console.log(`TRACER 29-MAR delete OK !!! `);
        // this.notifyPlayersChanged();
      });
  }

  seedPlayer(): void {
    let player: Player = this.newPlayer();
    this.http
      .post(this.endpoints.getPostUri(), player)
      .subscribe((responseData) => {
        console.log(`TRACER post OK`);
        this.notifyPlayersChanged();
      });
  }

  // TODO: delete with button
  deleteSeedPlayer(): void {}

  private fetchPlayers() {
    this.http
      .get<{ [key: string]: Player }>(this.endpoints.getGetAllUri())
      .pipe(
        map((responseData) => {
          const players: Player[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              players.push({ ...responseData[key], id: key });
            }
          }

          return players;
        })
      )
      .subscribe((players: Player[]) => {
        console.log(`TRACER GET OK !!! quebec nordiques`);
        this.players = players;
        this.players.forEach((p) => {
          console.log(
            `TRACER GET OK ! n: ${p.name} s: ${p.strategy} id: ${p.id}`
          );
        });
        console.log(`TRACER GET cp 2 # p: ${this.players.length}`);
        this.notifyPlayersChanged();
      });
  }
}
