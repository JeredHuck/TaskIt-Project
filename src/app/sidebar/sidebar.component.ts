import { Component, ViewChild } from '@angular/core';
import { VideoGameService } from '../shared/game.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { _ParseAST } from '@angular/compiler';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('f') gameForm: NgForm;
  submitted = false;
  descResp = '';
  gameData: {
    title: '',
    description: '',
    tags: []
  }

  constructor(private vgService: VideoGameService,
              private router: Router) {}

  newGameRoute() {
    this.router.navigate([''])
  }

  onSubmit() {
    // this.vgService.addVideoGame()
    this.gameForm.reset()
  }
}
