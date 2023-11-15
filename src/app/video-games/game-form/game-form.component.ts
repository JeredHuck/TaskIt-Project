import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VideoGame } from 'src/app/shared/game.model';
import { VideoGameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent {
  isEditingGame: boolean = false;
  isSubmitted: boolean = false;
  gameId: number | null = null;
  gameData: Partial<VideoGame> = {
    title: '',
    description: '',
    tags: []
  };

  constructor(private vgService: VideoGameService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.isSubmitted = true;

    this.gameData = {
      title: form.value.title,
      description: form.value.description,
      tags: form.value.tags,
      coverImg: form.value.coverImage
    }

    if (this.isEditingGame) {
      this.vgService.updateGame(this.gameId, this.gameData);
    } else {
      const newGame: VideoGame = {
        id: +(Math.random() * 1000000).toFixed(0),
        title: this.gameData.title,
        description: this.gameData.description,
        coverImg: this.gameData.coverImg,
        tags: this.gameData.tags
      };

      this.vgService.addVideoGame(newGame);
    }

    this.onResetForm(form);
  }

  onResetForm(form?: NgForm) {
    form && form.reset();

    this.isSubmitted = false;

    this.router.navigate(['../'], { relativeTo: this.route })
  }
}
