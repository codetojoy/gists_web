import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  private playerServiceSubscription;

  constructor(private playerService: PlayerService, private router: Router) {
    this.playerService.playersChanged.subscribe(
      (newPlayers: Player[]) => (this.players = newPlayers)
    );
  }

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();
  }

  onNewPlayer(): void {
    this.router.navigate(['admin', 'players', 'new']);
  }
}
