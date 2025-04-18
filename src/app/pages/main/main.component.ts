import { Component, inject } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, SmallCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  private weatherService = inject(WeatherService);

  city: string = 'salvador';
  weatherData: any = null;

  ngOnInit() : void {
    this.weatherService.getWeatherByCity(this.city).subscribe((data) => { this.weatherData = data; console.log(data)});

    
  }


  getFormatHour(hour: string) {
    const newHour = hour.slice(-5)
    return newHour.replace(':', 'h')
  }

  readonly animatedWeatherIcons: { [key: number]: string } = {
    1000: 'day.svg',       // Clear
    1003: 'cloudy-day-1.svg',
    1006: 'cloudy.svg',
    1009: 'overcast.svg',
    1030: 'mist.svg',
    1063: 'rainy-1.svg',
    1066: 'snowy-1.svg',
    1087: 'thunder.svg',
    1117: 'snowy-5.svg',
    1135: 'snowy-6.svg',
    1147: 'snowy-6.svg',
    1150:  'rainy-4.svg',
  };
  


  // searchWeather() { 
  //   if(this.city) {
  //     this.weatherService.getWeatherByCity(this.city).subscribe((data) => {
  //       console.log(data);
  //       this.weatherData = data;
  //     });
  //   }
  // }
}
