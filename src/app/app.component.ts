import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'Yessir'
  videoGames = [{title: 'Test'}];

  onGameAdded(gameData: {gameTitle: string}) {
    this.videoGames.push({
      title: gameData.gameTitle
    });
  }
}
