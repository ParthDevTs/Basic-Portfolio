import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    let url =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=bea0c78ef3e0148cda005ac035ec6e02';
    return this.http.get<any>(url);
  }
}
