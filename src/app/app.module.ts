import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileCardComponent } from './sidebar/profile-card/profile-card.component';
import { VideoGameListComponent } from './video-game-list/video-game-list.component';
import { FormsModule } from '@angular/forms';
import { NewGameComponent } from './video-game-list/new-game/new-game.component';
import { VideoGameService } from './shared/game.service';
import { TopTenComponent } from './top-ten/top-ten.component';

const appRoutes: Routes = [
  { path: 'home', component: VideoGameListComponent },
  { path: 'topten', component: TopTenComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileCardComponent,
    VideoGameListComponent,
    NewGameComponent,
    TopTenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [VideoGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
