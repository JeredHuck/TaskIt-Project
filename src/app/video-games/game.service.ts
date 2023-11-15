import { Subject } from "rxjs";
import { VideoGame } from "../shared/game.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {
  private videoGames: VideoGame[] = [
    new VideoGame(
      117,
      'The Legend of Zelda: Ocarina of Time',
      'Widely considered the greatest game of all time, TLOZ Ocarina of time is a.....',
      ['nintendo', ' high fantasy', ' adventure'],
      'https://preview.redd.it/wlw1m5o2r6081.jpg?width=561&format=pjpg&auto=webp&s=971c8df31ee8965eed77f8ebb144c96d98493341'
    ),
    new VideoGame(
      321,
      'Smash Bros Melee',
      'Cool, competitive game',
      ['nintendo', ' platform fighter'],
      'https://m.media-amazon.com/images/I/51kWf0J9xKL.jpg'
    )
  ]

  vgListChanged = new Subject<VideoGame[]>();

  addVideoGame(newGame: VideoGame) {
    this.videoGames.push(newGame);
    this.vgListChanged.next(this.videoGames.slice());
  }

  getVideoGames() {
    return this.videoGames.slice();
  }

  updateGame(gameId: number, updatedGame: Partial<VideoGame>) {
    const gameIndex = this.videoGames.findIndex((game) => game.id === gameId); // Get index of book to update

    if (gameIndex !== -1) {
      // We found the book, now we update it with new values
      this.videoGames[gameIndex] = {
        ...this.videoGames[gameIndex], // Spread operator to get all the existing values
        ...updatedGame, // Spread operator to get all the updated values
        id: gameId, // Ensure the book ID stays the same
      };

      this.vgListChanged.next(this.videoGames.slice());
    } else {
      // Book wasn't found
      console.error('Game not found, brother');
    }
  }

  getGameById(id: number) {
    const game = this.videoGames.find((videoGame) => videoGame.id === id)

    return game;
  }

  removeVideoGame(id: number) {
    const games = this.videoGames.filter((videoGame) => videoGame.id !== id)

    this.videoGames = games;
    this.vgListChanged.next(this.videoGames.slice());
  }
}
