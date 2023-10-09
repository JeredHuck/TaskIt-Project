import { Component } from '@angular/core';
import { VideoGameModel, VideoGame } from 'src/app/shared/game.model';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
  providers: [VideoGameModel]
})
export class NewGameComponent {
  constructor(private videoGameModel: VideoGameModel) {}

  newGame() {
    const Form: HTMLFormElement = document.querySelector('#VGForm');
    const title: HTMLInputElement = document.querySelector('#inputTitle');
    const description: HTMLInputElement = document.querySelector('#inputDescription');

    const videoGame: VideoGame = new VideoGame(title.value, description.value);

    Form.reset();

    this.videoGameModel.addVideoGame(videoGame);
  }

  resetForm() {
    this.videoGameModel.resetForm('#VGForm');
  }
}
