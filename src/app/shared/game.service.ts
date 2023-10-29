import { Subject } from "rxjs";
import { VideoGame } from "./game.model";

export class VideoGameService {
  gameSelected = new Subject<VideoGame>();

  // private videoGames: VideoGame[] = [
  //   new VideoGame(
  //     'Zelda',
  //     'Cool fun Game',
  //     ['nintendo', 'high fantasy', 'adventure']
  //   )
  // ]

  videoGames = [
    {
      title: 'Zelda',
      description: 'Cool, fun game, very addictive',
      tags: ['adventure', 'fantasy', 'Nintendo']
    }
  ]

  vgListChanged = new Subject<VideoGame[]>();

  addVideoGame(title: string, description: string, tags: string[]) {
    this.videoGames.push({title: title, description: description, tags: tags})
  }

  getVideoGames() {
    return this.videoGames.slice();
  }


}
