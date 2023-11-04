import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGameListComponent } from './video-games/video-game-list/video-game-list.component';
import { TopTenComponent } from './top-ten/top-ten.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { VideoGameItemComponent } from './video-games/video-game-list/video-game-item/video-game-item.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/game-list', pathMatch: 'full' },
  { path: 'game-list', component: VideoGameListComponent, children: [
    { path: ':id', component: VideoGameItemComponent }
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
