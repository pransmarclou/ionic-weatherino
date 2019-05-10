import { Http  } from '@angular/http'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherProvider {
  apiKey = '643be90e9569ba4de9475f69fb3931f3';
  url;

// /http://api.openweathermap.org/data/2.5/weather?q=plaridel&units=metric&APPID=643be90e9569ba4de9475f69fb3931f3

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q='
  }

  getWeather(city, state) {
    return this.http.get(this.url + city + ',' + state + '&units=metric&APPID=' + this.apiKey)
      .map(res => res.json());
  }
}
