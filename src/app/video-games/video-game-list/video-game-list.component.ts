import { Component,
         EventEmitter,
         OnDestroy,
         OnInit,
         Output } from '@angular/core';
import { VideoGameService } from '../../shared/game.service';
import { VideoGame } from '../../shared/game.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrls: ['./video-game-list.component.css']
})

export class VideoGameListComponent implements OnInit, OnDestroy{
  @Output() gameSelected = new EventEmitter<VideoGame>();
  videoGames: VideoGame[] = [];
  gameSub: Subscription;

  constructor(private vgService: VideoGameService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.videoGames = this.vgService.getVideoGames();

    this.gameSub = this.vgService.vgListChanged.subscribe(
      (updatedGameList: VideoGame[]) => {
        this.videoGames = updatedGameList;
      }
    )
  }

  ngOnDestroy(): void {
    this.gameSub.unsubscribe();
  }

  onRemoveBook(id: number) {
    this.vgService.removeVideoGame(id);
    this.router.navigate(['game-list']);
  }
}
