import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth-guard.service';
import { GameComponent } from './game/game.component';
import { NoPlayerComponent } from './player/no-player/no-player.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { CanDeactivateGuard } from './player/player-edit/can-deactivate-guard.service';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'game', component: GameComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: NoPlayerComponent },
      {
        path: 'players/new',
        component: PlayerEditComponent,
        canDeactivate: [CanDeactivateGuard],
      },
      { path: 'players/:id', component: PlayerDetailComponent },
      {
        path: 'players/:id/edit',
        component: PlayerEditComponent,
        canDeactivate: [CanDeactivateGuard],
      },
      { path: 'players/:id/delete', component: PlayerDeleteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
