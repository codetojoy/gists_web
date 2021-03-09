import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GameComponent } from './game/game.component';
import { NoPlayerComponent } from './player/no-player/no-player.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'game', component: GameComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: NoPlayerComponent },
      { path: 'players/new', component: PlayerEditComponent },
      { path: 'players/:id', component: PlayerDetailComponent },
      { path: 'players/:id/edit', component: PlayerEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
