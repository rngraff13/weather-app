import { Component, OnInit } from '@angular/core';
import { WeatherResult } from '../models/weather-result';
import { WeatherServiceService } from '../services/weather-service.service';

@Component({
  selector: 'app-weather-search-component',
  templateUrl: './weather-search-component.component.html',
  styleUrls: ['./weather-search-component.component.css']
})
export class WeatherSearchComponentComponent implements OnInit {

  public searchType: string = 'city'; 
  public searchString: string = '';
  public lat: string = '';
  public lon: string = '';
  public result?: WeatherResult;
  public weatherIcon: string = '';

  constructor(private service: WeatherServiceService) { }

  ngOnInit(): void {
  }

  search(){
    if(this.searchType == "city"){
      this.service.getWeatherByCity(this.searchString).subscribe(data => {
        this.result = data;
        this.weatherIcon = `http://openweathermap.org/img/wn/${this.result.weather[0].icon}@2x.png`;
      });
    }
    else if(this.searchType == "zip"){
      this.service.getWeatherByZip(this.searchString).subscribe(data => {
        this.result = data;
        this.weatherIcon = `http://openweathermap.org/img/wn/${this.result.weather[0].icon}@2x.png`;
      });
    }
    else if(this.searchType == "gps"){
      this.service.getWeatherByGPS(this.lat, this.lon).subscribe(data => {
        this.result = data;
        this.weatherIcon = `http://openweathermap.org/img/wn/${this.result.weather[0].icon}@2x.png`;
      });
    }
  }

}
