import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Player } from 'src/app/player.model';
import { PlayerService } from 'src/app/player.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css'],
})
export class PlayerEditComponent implements OnInit {
  player: Player;
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

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
    });
  }

  onSave(): void {
    this.playerService.updatePlayer(this.player);
    this.playerService.logPlayers();
  }
}
