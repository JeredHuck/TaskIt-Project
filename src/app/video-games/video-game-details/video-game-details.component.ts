import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { VideoGame } from 'src/app/shared/game.model';
import { VideoGameService } from 'src/app/video-games/game.service';

@Component({
  selector: 'app-video-game-details',
  templateUrl: './video-game-details.component.html',
  styleUrls: ['./video-game-details.component.css']
})
export class VideoGameDetailsComponent {
  videoGame: any = VideoGame;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vgService: VideoGameService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        const gameId = +params['id'];
        this.videoGame = this.vgService.getGameById(gameId);
      });
  }
}
