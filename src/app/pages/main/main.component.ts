import { Component, inject } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { CarouselModule } from 'primeng/carousel';
import { ThemeService } from '../../service/theme.service';
import { AutoCompleteModule } from 'primeng/autocomplete';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, SmallCardComponent, CarouselModule, AutoCompleteModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  private weatherService = inject(WeatherService);
  themeService = inject(ThemeService);

  weatherData: any = null;
  forecastData: any[] = [];
  isDarkTheme: boolean = this.themeService.isDarkTheme();
  selectedCity: any;
  filteredCities: any[] = [];
  
  searchCity(event: any) {
    const query = event.query;
    if (query.length > 1) {
      this.weatherService.searchCities(query).subscribe(cities => {
        this.filteredCities = cities;
      });
    } else {
      this.filteredCities = [];
    }
  }
  
  onCitySelect(city?: any) {
    const query = city?.value?.url || this.selectedCity;
  
    if (!query) return;
  
    this.weatherService.getWeatherByCity(query).subscribe((data) => {
      this.weatherData = data;
      this.forecastData = data.forecast.forecastday;
    });
  }
  
  toggleTheme() { 
    this.themeService.toggleTheme();
    this.isDarkTheme = !this.isDarkTheme
  }


  getFormatHour(hour: string) {
    const newHour = hour.slice(-5)
    return newHour.replace(':', 'h')
  }

  
  
  readonly animatedWeatherIcons: { [key: number]: string } = {
    1000: 'day.svg',       // Clear
    1003: 'cloudy-day-1.svg',
    1006: 'cloudy.svg',
    1009: 'cloudy.svg',
    1030: 'snowy-4.svg',
    1063: 'rainy-1.svg',
    1066: 'snowy-1.svg',
    1087: 'thunder.svg',
    1117: 'snowy-5.svg',
    1135: 'snowy-6.svg',
    1147: 'snowy-6.svg',
    1150:  'rainy-4.svg',
    1189:  'rainy-4.svg',
  };
}

