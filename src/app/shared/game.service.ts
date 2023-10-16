import { VideoGame } from "./game.model";

export class VideoGameService {
  videoGame: VideoGame[] = [
    new VideoGame('The Legend of Zelda', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil eaque ipsum voluptates labore, et vel temporibus vero itaque, quis error non assumenda! Qui deleniti molestiae adipisci, optio atque similique.' , ['Master Sword ', 'Triforce', 'Princess Zelda', 'blah blah blah'])
  ];
  vGIndex: number;

  resetForm(formType) {
    const vGForm: HTMLFormElement = document.querySelector(formType);
    vGForm.reset();
  }

  addVideoGame(sentVG: VideoGame) {
    this.videoGame.push(sentVG);
  }

  deleteGame(id: number) {
    this.videoGame.splice(this.vGIndex, 1);
  }
}
