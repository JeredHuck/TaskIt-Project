import { VideoGame } from "./game.model";

export class VideoGameService {
  videoGames = [
    new VideoGame('The Legend of Zelda', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil eaque ipsum voluptates labore, et vel temporibus vero itaque, quis error non assumenda! Qui deleniti molestiae adipisci, optio atque similique.' , ['Master Sword ', 'Triforce', 'Princess Zelda', 'blah blah blah'])
  ];
  vGIndex: number;

  addVideoGame(title: string, description: string, tags: string[]) {
    this.videoGames.push({title: title, description: description, tags: tags });
  }

  deleteGame(id: number) {
    this.videoGames.splice(this.vGIndex, 1);
  }
}
