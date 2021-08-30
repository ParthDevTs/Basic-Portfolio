import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parthPortfolio';

  showHome = false;
  navName="Portfolio";
  portfolio(){
    this.navName="Projects";
    this.showHome=true;
  }
  home(){
    this.navName="Portfolio";
    this.showHome=false;
  }
}
