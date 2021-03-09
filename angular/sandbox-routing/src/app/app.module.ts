import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*
import { BarComponent } from './bar/bar.component';
import { FooEditComponent } from './foo/foo-edit/foo-edit.component';
import { FooListComponent } from './foo/foo-list/foo-list.component';
import { FooComponent } from './foo/foo.component';
*/
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { PlayerService } from './player.service';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerListItemComponent } from './player/player-list-item/player-list-item.component';
import { PlayerComponent } from './player/player.component';
import { PlayersComponent } from './players/players.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { NoPlayerComponent } from './player/no-player/no-player.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    PlayersComponent,
    PlayerComponent,
    GameComponent,
    PlayerEditComponent,
    PlayerDetailComponent,
    PlayerListItemComponent,
    DropdownDirective,
    NoPlayerComponent,
    PlayerDeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PlayerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
