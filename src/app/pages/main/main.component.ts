import { Component, inject } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  private weatherService = inject(WeatherService);

  city: string = '';
  weatherData: any = null;

  ngOnInit() : void {
    // this.weatherService.getWeatherByCity(this.city).subscribe((data) => { this.weatherData = data; });}


  }
  searchWeather() : void { 
    if(this.city) {
      this.weatherService.getWeatherByCity(this.city).subscribe((data) => {
        console.log(data);
        this.weatherData = data;
      });
    }
  }
}
