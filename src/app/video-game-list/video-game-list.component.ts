import { Component, Input } from '@angular/core';
import { VideoGameService } from '../shared/game.service';
import { VideoGame } from '../shared/game.model';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrls: ['./video-game-list.component.css'],
  providers: [VideoGameService]
})

export class VideoGameListComponent {
  @Input() videoGames: {title: string, description: string, tags: string[]}

}


