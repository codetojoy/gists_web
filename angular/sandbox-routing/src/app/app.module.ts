import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { FooEditComponent } from './foo/foo-edit/foo-edit.component';
import { FooListComponent } from './foo/foo-list/foo-list.component';
import { FooComponent } from './foo/foo.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { PlayerService } from './player.service';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerComponent } from './player/player.component';
import { PlayersComponent } from './players/players.component';
import { PlayerListItemComponent } from './player/player-list-item/player-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
    AdminComponent,
    HeaderComponent,
    FooListComponent,
    FooEditComponent,
    PlayersComponent,
    PlayerComponent,
    GameComponent,
    PlayerEditComponent,
    PlayerDetailComponent,
    PlayerListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PlayerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
