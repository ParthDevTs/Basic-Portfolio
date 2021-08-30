import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'parthPortfolio';

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.openDialog();
  }
  showHome = false;
  navName = 'Profile';

  home() {
    this.navName = 'Profile';
    this.showHome = false;
  }

  portfolio() {
    this.navName = 'Projects';
    this.showHome = true;
  }
  weather() {
    this.navName = 'Weather';
    this.showHome = true;
  }
  jokes() {
    this.navName = 'Joke';
    this.showHome = true;
  }

  openDialog() {
    const dialogRef = this.dialog.open(HomeComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
