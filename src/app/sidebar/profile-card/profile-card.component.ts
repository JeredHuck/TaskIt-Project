import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  profileName = 'Jered Huckleberry';
  email = 'email@email.com';
}
