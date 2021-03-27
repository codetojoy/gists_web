import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/player.model';

@Component({
  selector: 'app-player-list-item',
  templateUrl: './player-list-item.component.html',
  styleUrls: ['./player-list-item.component.css'],
})
export class PlayerListItemComponent implements OnInit {
  @Input() player: Player;

  constructor() {}

  ngOnInit(): void {}
}
