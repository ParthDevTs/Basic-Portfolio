import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.darkmode = localStorage.getItem('theme') === 'Dark' ? true : false;
  }
  sidebarOpen = false;
  darkmode = false;

  sidebarToggler($event) {
    this.sidebarOpen = !this.sidebarOpen;
  }
  darkThemeToggler($event) {
    this.darkmode = !this.darkmode;
    console.log(this.darkmode);
  }
}
