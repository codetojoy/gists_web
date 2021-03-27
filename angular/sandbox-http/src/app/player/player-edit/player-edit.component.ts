import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Player, Strategy } from 'src/app/player.model';
import { PlayerService } from 'src/app/player.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css'],
})
export class PlayerEditComponent implements OnInit, CanComponentDeactivate {
  player: Player;
  playerName: string;
  strategy: string;
  editMode: boolean = false;
  changesSaved: boolean = false;
  strategies: string[];

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {
    let strategy = Strategy;
    this.strategies = Object.keys(strategy);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const tmpId = params['id'];
      this.editMode = tmpId != null;

      if (this.editMode) {
        const id = +tmpId;
        this.player = this.playerService.findPlayerById(id);
      } else {
        this.player = this.playerService.newPlayer();
      }
      this.playerName = this.player.name;
      this.strategy = this.player.strategy;
    });
  }

  onSave(): void {
    this.playerService.updatePlayer(this.player);
    this.changesSaved = true;
    this.playerService.logPlayers();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    let result = true;
    if (
      (this.playerName !== this.player.name ||
        this.strategy !== this.player.strategy) &&
      !this.changesSaved
    ) {
      result = confirm('Do you want to discard the changes?');
    }
    return result;
  }
}
