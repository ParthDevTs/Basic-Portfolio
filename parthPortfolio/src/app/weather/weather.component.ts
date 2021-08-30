import { Component, OnInit } from '@angular/core';
import { City } from './cityData';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  constructor(private service: WeatherService) {}

  ngOnInit(): void {

  }
  city: City = new City();
  url;
  getWeather() {
    this.service.getWeather('London').subscribe(
      (response) => {
        this.city.temp = Math.floor(response.main.feels_like);
        this.city.feelsLike = Math.floor(response.main.feels_like);
        this.city.tempMin = Math.round(response.main.temp_min);
        this.city.tempMax = Math.round(response.main.temp_max);
        this.city.pressure = response.main.pressure;
        this.city.humidity = response.main.humidity;
        this.city.description = response.weather[0].description;
        this.city.name = response.name;
        this.city.country = response.sys.country;
        this.url =
          'http://openweathermap.org/img/w/' +
          response.weather[0].icon +
          '.png';
      },
      (error) => console.log(error.error.message)
    );
  }
}
