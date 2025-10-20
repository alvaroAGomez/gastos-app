import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  constructor() {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (stored === 'dark' || (!stored && prefersDark)) {
      this.enableDark();
    } else {
      this.disableDark();
    }
  }

  toggle() {
    if (this.darkMode.value) this.disableDark();
    else this.enableDark();
  }

  private enableDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.darkMode.next(true);
  }

  private disableDark() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.darkMode.next(false);
  }
}
