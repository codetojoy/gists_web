import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

// Players could have been called PlayerList

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();
  }

  onNewPlayer(): void {
    console.log(`TRACER PlayersComponent TODO`);
  }
}
