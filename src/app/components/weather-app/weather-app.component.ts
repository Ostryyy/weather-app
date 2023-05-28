import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss'],
})
export class WeatherAppComponent implements OnInit{
  weatherData: any;
  forecast: any[] = [];
  title = 'weather-app';
  city: string = 'Warsaw';
  selectedDay: number = 0;

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.city);
  }

  getWeatherData(city: string) {
    this.weather.getDataFromAPI(city).subscribe((response) => {
      this.weatherData = response;
      console.log(this.weatherData);
      this.forecast = response.forecast.forecastday;
    });
  }

  selectDay(index: number) {
    this.selectedDay = index;
  }

  formatTemperature(temperature: number): any {
    const roundedTemperature = Math.round(temperature * 2) / 2;
    const formattedTemperature = roundedTemperature.toFixed(
      roundedTemperature % 1 === 0 ? 0 : 1
    );

    return formattedTemperature;
  }
}
