import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileCardComponent } from './sidebar/profile-card/profile-card.component';
import { VideoGameListComponent } from './video-game-list/video-game-list.component';
import { FormsModule } from '@angular/forms';
import { NewGameComponent } from './video-game-list/new-game/new-game.component';
import { VideoGameService } from './shared/game.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileCardComponent,
    VideoGameListComponent,
    NewGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [VideoGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
