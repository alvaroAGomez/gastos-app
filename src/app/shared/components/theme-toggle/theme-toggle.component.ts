import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-toggle',
  standalone: false,
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent {
  darkMode$!: Observable<boolean>;

  constructor(private theme: ThemeService) {
    this.darkMode$ = this.theme.darkMode$; // ✅ ahora se asigna después de la inyección
  }

  toggleTheme() {
    this.theme.toggle();
  }
}
