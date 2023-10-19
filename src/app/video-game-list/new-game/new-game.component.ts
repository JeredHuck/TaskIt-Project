import { Component } from '@angular/core';
import { VideoGameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
  providers: [VideoGameService]
})
export class NewGameComponent {
  constructor(private vgService: VideoGameService) {}


  onNewGame(title: string, description: string, tags: string[]) {
    this.vgService.addVideoGame(title, description, tags)
  }
}
