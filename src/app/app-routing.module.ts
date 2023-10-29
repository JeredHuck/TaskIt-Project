import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGameListComponent } from './video-games/video-game-list/video-game-list.component';
import { NewGameComponent } from './video-games/video-game-list/new-game/new-game.component';
import { TopTenComponent } from './top-ten/top-ten.component';
import { VideoGamesComponent } from './video-games/video-games.component';

const appRoutes: Routes = [
  { path: '', component: VideoGamesComponent },
  { path: 'new-game', component: NewGameComponent },
  { path: 'topten', component: TopTenComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
