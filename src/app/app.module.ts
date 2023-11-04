import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileCardComponent } from './sidebar/profile-card/profile-card.component';
import { VideoGameListComponent } from './video-games/video-game-list/video-game-list.component';
import { FormsModule } from '@angular/forms';
import { VideoGameService } from './shared/game.service';
import { TopTenComponent } from './top-ten/top-ten.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoGameItemComponent } from './video-games/video-game-list/video-game-item/video-game-item.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { GameComponent } from './shared/game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileCardComponent,
    VideoGameListComponent,
    TopTenComponent,
    VideoGameItemComponent,
    VideoGamesComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [VideoGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
