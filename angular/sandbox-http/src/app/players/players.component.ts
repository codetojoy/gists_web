import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

// Players could have been called PlayerList

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit, OnDestroy {
  players: Player[];
  private playerServiceSubscription;

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit(): void {
    this.playerServiceSubscription = this.playerService.playersChanged.subscribe(
      (newPlayers: Player[]) => {
        this.players = newPlayers;
        this.players.forEach((p) => {
          console.log(`TRACER 29-MAR PC.sub n: ${p.name}`);
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.playerServiceSubscription.unsubscribe();
  }

  onNewPlayer(): void {
    this.router.navigate(['admin', 'players', 'new']);
  }

  onLoadPlayers(): void {
    this.playerService.loadPlayers();
  }

  onSeedPlayer(): void {
    this.playerService.seedPlayer();
  }
}
