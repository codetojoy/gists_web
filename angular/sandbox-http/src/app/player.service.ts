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

  constructor(private http: HttpClient) {
    /*
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
    */
  }

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

  firePlayersChangedEvent(): void {
    this.playersChanged.next(this.getPlayers());
  }

  newPlayer(): Player {
    let player: Player = {
      name: 'EVH5150',
      strategy: Strategy.NextCard,
    };
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
    /*
    this.players = this.players.filter((p) => p.id != id);
    this.firePlayersChangedEvent();
    */
  }

  getPlayers(): Player[] {
    console.log(
      `TRACER hello PS.getP vancouver millionaires # p: ${this.players.length}`
    );
    return this.players.slice();
  }

  loadPlayers(): void {
    this.fetchPlayers();
  }

  seedPlayer(): void {
    let player: Player = this.newPlayer();
    this.http
      .post(this.endpoints.getPostUri(), player)
      .subscribe((responseData) => {
        console.log(`TRACER post OK !!! montreal maroons ${responseData}`);
      });
  }

  deleteSeedPlayer(): void {
    /*
    let player: Player = this.newPlayer();
    this.http.delete(this.apiUri, player).subscribe((responseData) => {
      console.log(`TRACER delete OK !!!`);
      this.fetchPlayers();
    });
    */
  }

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
        this.firePlayersChangedEvent();
      });
  }
}
