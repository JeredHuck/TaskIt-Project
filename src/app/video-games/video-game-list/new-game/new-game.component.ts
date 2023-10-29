import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VideoGame } from 'src/app/shared/game.model';
import { VideoGameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
  providers: [VideoGameService]
})
export class NewGameComponent {
  @ViewChild('f') newGameForm: NgForm;

  constructor(private vgService: VideoGameService) {}


  onNewGame(title: string, description: string, tags: string[]) {
    this.vgService.addVideoGame(title, description, tags)
  }
}
