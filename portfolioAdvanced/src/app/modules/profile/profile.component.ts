import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
