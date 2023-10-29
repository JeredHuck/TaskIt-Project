import { Component, Input } from '@angular/core';
import { VideoGame } from 'src/app/shared/game.model';

@Component({
  selector: 'app-video-game-item',
  templateUrl: './video-game-item.component.html',
  styleUrls: ['./video-game-item.component.css']
})
export class VideoGameItemComponent {
  @Input() videoGame: VideoGame;
  @Input() index: number;
}
