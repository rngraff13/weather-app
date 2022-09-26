import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { WeatherResult } from '../models/weather-result';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private API_KEY = 'cf002751564a4c78f5f7ed479f1b9ba3';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient){}

  getWeatherByCity(search: string): Observable<WeatherResult>{
    return this.http.get<WeatherResult>(`${this.baseUrl}?q=${search}&appid=${this.API_KEY}&units=imperial`);
  }

  getWeatherByZip(search: string): Observable<WeatherResult>{
    return this.http.get<WeatherResult>(`${this.baseUrl}?zip=${search},us&appid=${this.API_KEY}&units=imperial`);
  }

  getWeatherByGPS(lat: string, lon: string): Observable<WeatherResult>{
    return this.http.get<WeatherResult>(`${this.baseUrl}?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=imperial`);
  }
}
