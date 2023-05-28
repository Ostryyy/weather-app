import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  city: string = 'Warsaw';
  private apiKey: string = environment.apiKey;
  private apiUrl: string = environment.apiUrl;
  

  constructor(private http: HttpClient) { }

  getDataFromAPI(city:string): Observable<any>{
    const apiUrl = `${this.apiUrl}?key=${this.apiKey}&q=${city}&days=3&aqi=no&alerts=no`

    return this.http.get(apiUrl);
  }
}
