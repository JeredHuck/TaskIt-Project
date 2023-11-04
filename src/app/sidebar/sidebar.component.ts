import { Component } from '@angular/core';
import { VideoGameService } from '../shared/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private vgService: VideoGameService,
              private router: Router) {}

  newGameRoute() {
    this.router.navigate([''])
  }
}
