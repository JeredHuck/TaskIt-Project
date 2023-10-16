import { Component } from '@angular/core';
import { VideoGame } from 'src/app/shared/game.model';
import { VideoGameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
  providers: [VideoGameService]
})
export class NewGameComponent {
  constructor(private videoGameService: VideoGameService) {}

  newGame() {
    const title: HTMLInputElement = document.querySelector('#inputTitle');
    const description: HTMLInputElement = document.querySelector('#inputDescription');
    const tags: HTMLInputElement = document.querySelector('#inputTags');

    const videoGame: VideoGame = new VideoGame(title.value, description.value, tags.value);

    this.videoGameService.addVideoGame(videoGame);
  }
}
