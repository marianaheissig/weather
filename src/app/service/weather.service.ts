import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 private apiKey = "cebe15da7c5047e6901225032250204"
 private baseUrl = "https://api.weatherapi.com/v1"

 constructor(private http: HttpClient) { }

  //  metodo para obter a temperatura da cidade informada
  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/forecast.json?key=${this.apiKey}&q=${city}&lang=pt&days=3`);
  }

  // metodo para obter a temperatura pela coordenada
  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/current.json?key=${this.apiKey}&q=${lat},${lon}&lang=pt`);
  }

  //procura cidades que comecam com o termo informado
  searchCities(term: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.json?key=${this.apiKey}&q=${term}`);
  }
  
}
