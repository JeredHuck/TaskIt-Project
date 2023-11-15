import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileCardComponent } from './sidebar/profile-card/profile-card.component';
import { VideoGameListComponent } from './video-games/video-game-list/video-game-list.component';
import { FormsModule } from '@angular/forms';
import { VideoGameService } from './video-games/game.service';
import { TopTenComponent } from './top-ten/top-ten.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoGameDetailsComponent } from './video-games/video-game-details/video-game-details.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { GameComponent } from './shared/game/game.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { GameFormComponent } from './video-games/game-form/game-form.component'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileCardComponent,
    VideoGameListComponent,
    TopTenComponent,
    VideoGameDetailsComponent,
    VideoGamesComponent,
    GameComponent,
    GameFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    OverlayModule,
    HttpClientModule
  ],
  providers: [VideoGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
