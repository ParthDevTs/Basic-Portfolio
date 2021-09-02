import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 sidebarOpen=false;
 sidebarToggler($event){
   this.sidebarOpen=!this.sidebarOpen;
 }
}
