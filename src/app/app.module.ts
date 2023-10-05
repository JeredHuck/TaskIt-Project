import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileCardComponent } from './sidebar/profile-card/profile-card.component';
import { VideoGameListComponent } from './video-game-list/video-game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileCardComponent,
    VideoGameListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
