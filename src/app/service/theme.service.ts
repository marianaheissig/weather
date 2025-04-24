import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly darkClass = 'dark-theme';
  
  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  setDarkTheme() {
    document.body.classList.add(this.darkClass);
    localStorage.setItem('theme', 'dark');
  }

  setLightTheme() {
    document.body.classList.remove(this.darkClass);
    localStorage.setItem('theme', 'light');
  }

  toggleTheme() {
    const isDark = document.body.classList.contains(this.darkClass);
    isDark ? this.setLightTheme() : this.setDarkTheme();
  }

  isDarkTheme(): boolean {
    return document.body.classList.contains(this.darkClass);
  }
}