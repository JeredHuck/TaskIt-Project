import { Component, OnInit } from '@angular/core';
import { VideoGameService } from './video-games/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VideoGameService]
})
export class AppComponent {

}
