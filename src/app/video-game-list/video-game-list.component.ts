import { Component, OnInit } from '@angular/core';
import { VideoGame, VideoGameModel } from '../shared/game.model';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrls: ['./video-game-list.component.css'],
  providers: [VideoGameModel]
})

export class VideoGameListComponent implements OnInit {
    videoGames: VideoGame[] = [];

    constructor(private VideoGameModel: VideoGameModel) {}

    ngOnInit() {
      this.videoGames = this.VideoGameModel.videoGame;
    }

    deleteGame(id: number) {
      this.VideoGameModel.deleteGame(id);
    }

    onNewGame() {
      this.VideoGameModel.showVGModal('newVGModal');
    }

  }

