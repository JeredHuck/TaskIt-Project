import { Component, Injectable, Input } from '@angular/core';
import { VideoGame } from '../game.model';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent{
  @Input() videoGame: VideoGame;
  @Input() index: number;
}
