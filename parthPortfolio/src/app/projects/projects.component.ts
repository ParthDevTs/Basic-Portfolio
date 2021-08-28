import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor( private config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
   }

  ngOnInit(): void {
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
