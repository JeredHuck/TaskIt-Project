import { VideoGame } from "./game.model";

export class VideoGameService {
  videoGames = [

  ]
  vGIndex: number;

  addVideoGame(title: string, description: string, tags: string[]) {
    this.videoGames.push({title: title, description: description, tags: tags });
  }
}
