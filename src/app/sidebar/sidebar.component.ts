import { Component, OnInit, ViewChild } from '@angular/core';
import { VideoGameService } from '../video-games/game.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { VideoGame } from '../shared/game.model'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router: Router) {}


  navigateToForm() {
    this.router.navigate(['game-list', 'new'])
  }
}
