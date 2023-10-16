import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { VideoGameService } from '../shared/game.service';
import { VideoGame } from '../shared/game.model';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrls: ['./video-game-list.component.css'],
  providers: [VideoGameService]
})

export class VideoGameListComponent {
  videoGames: VideoGame[] = []
  @Output('gameAdded') gameAdded = new EventEmitter<{title: string, description: string}>();

  @ViewChild('gameDescInput', {static: true}) gameDescInput: ElementRef

  onGameAdded(titleInput: HTMLInputElement) {
    this.gameAdded.emit({
      title: titleInput.value,
      description: this.gameDescInput.nativeElement.value
    })
  }

}


