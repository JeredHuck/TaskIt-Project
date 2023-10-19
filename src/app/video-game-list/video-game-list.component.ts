import { Component, Input } from '@angular/core';
import { VideoGameService } from '../shared/game.service';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrls: ['./video-game-list.component.css'],
  providers: [VideoGameService]
})

export class VideoGameListComponent {
  @Input() videoGame: {title: string, description: string, tags: string[]}

  constructor(private vgService: VideoGameService) {}

}


