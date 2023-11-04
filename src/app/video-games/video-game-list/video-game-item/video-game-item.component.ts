import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { VideoGame } from 'src/app/shared/game.model';
import { VideoGameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-video-game-item',
  templateUrl: './video-game-item.component.html',
  styleUrls: ['./video-game-item.component.css']
})
export class VideoGameItemComponent implements OnInit{
  videoGame: VideoGame;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vgService: VideoGameService) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.videoGame = this.vgService.getVideoGame(this.id);
      });
  }
}
