import { Component, Input, OnInit } from '@angular/core';
import { VideoGameService } from '../../shared/game.service';
import { VideoGame } from '../../shared/game.model';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrls: ['./video-game-list.component.css']
})

export class VideoGameListComponent implements OnInit{
  @Input() videoGame: {title: string, description: string, tags: string[]}

  videoGames = [

  ]

  constructor(private vgService: VideoGameService) {}

  ngOnInit() {
    this.videoGames = this.vgService.getVideoGames()
  }
}
