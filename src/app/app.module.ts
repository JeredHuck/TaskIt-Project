import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileCardComponent } from './sidebar/profile-card/profile-card.component';
import { VideoGameListComponent } from './video-game-list/video-game-list.component';
import { VideoGameItemComponent } from './video-game-list/video-game-item/video-game-item.component';
import { FormsModule } from '@angular/forms';
import { NewGameComponent } from './video-game-list/new-game/new-game.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileCardComponent,
    VideoGameListComponent,
    VideoGameItemComponent,
    NewGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
