import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();
  constructor() {}
  accent = new FormControl('accent');
  default = new FormControl('basic');
  primary = new FormControl('primary');

  values = new FormControl('basic');

  ngOnInit(): void {}
  toggleSidebar() {
    this.toggleSideBar.emit();
  }
  toggleColorPrimary() {
    this.values = this.primary;
  }
  toggleColorDef() {
    this.values = this.default;
  }
  toggleColorAcc() {
    this.values = this.accent;
  }
}
