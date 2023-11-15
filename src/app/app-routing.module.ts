import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopTenComponent } from './top-ten/top-ten.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { VideoGameDetailsComponent } from './video-games/video-game-details/video-game-details.component';
import { GameFormComponent } from './video-games/game-form/game-form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/game-list', pathMatch: 'full' },
  { path: 'game-list', component: VideoGamesComponent, children: [
    { path: 'new', component: GameFormComponent },
    { path: ':id', component: VideoGameDetailsComponent }
  ] },
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
