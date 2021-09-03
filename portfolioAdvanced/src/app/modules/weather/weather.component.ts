import { Component, OnInit } from '@angular/core';
import { City } from './cityData';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  constructor(private service: WeatherService) {}

  ngOnInit(): void {}
  userCity: string;

  citydata: any = null;
  url;
  errorMessage;
  progressbar = false;

  getData() {
    this.progressbar = true;
    this.errorMessage=null;
    this.getWeather();
  }

  getWeather() {
    let city: City = new City();
    let citd: string;
    if (this.userCity != null) {
      if (this.userCity.search(/ /) != -1) {
        citd = this.userCity.replace(/ /, '');
      } else {
        citd = this.userCity;
      }
    }

    this.service.getWeather(citd).subscribe(
      (response) => {
        city.temp = Math.floor(response.main.feels_like) - 273;
        city.feelsLike = Math.floor(response.main.feels_like) - 273;
        city.tempMin = Math.round(response.main.temp_min) - 273;
        city.tempMax = Math.round(response.main.temp_max) - 273;
        city.pressure = response.main.pressure;
        city.humidity = response.main.humidity;
        city.description = response.weather[0].description;
        city.name = response.name;
        city.country = response.sys.country;
        this.url =
          'http://openweathermap.org/img/w/' +
          response.weather[0].icon +
          '.png';
        setTimeout(() => {
          this.citydata = city;
          this.progressbar = false;
        }, 3000);
      },
      (error) => (this.errorMessage = 'Enter Valid City ')
    );
  }
}
