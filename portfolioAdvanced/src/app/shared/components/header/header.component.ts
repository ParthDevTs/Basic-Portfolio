import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();
  @Output() toggleDarkTheme: EventEmitter<any> = new EventEmitter();
  constructor() {}

  values = new FormControl('primary');

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === 'Dark' ? true : false;
  }

  toggleSidebar() {
    this.toggleSideBar.emit();
  }

  isDarkTheme: boolean = false;
  toggleDarkThemes() {
    this.toggleDarkTheme.emit();
  }
  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? 'Dark' : 'Light');
  }
}
