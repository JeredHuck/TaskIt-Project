import { Component, OnInit } from '@angular/core';
import { VideoGameService } from './shared/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VideoGameService]
})
export class AppComponent implements OnInit {
  videoGames: {title: string, description: string, tags: string[]}[] = [];

  constructor(private vgService: VideoGameService) {}

  ngOnInit(): void {
    this.videoGames = this.vgService.videoGames;
  }
}
