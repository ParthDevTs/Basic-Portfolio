import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parthPortfolio';

  showHome = false;
  navName="Home";
  
  home(){
    this.navName="Home";
    this.showHome=false;
  }

  portfolio(){
    this.navName="Projects";
    this.showHome=true;
  }
  profile(){
    this.navName="Profile";
    this.showHome=true;
  }
  weather(){
    this.navName="Weather"
    this.showHome=true;
  }
  jokes(){
    this.navName="Joke"
    this.showHome=true;
  }
}
