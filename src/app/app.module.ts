import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileCardComponent } from './sidebar/profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
