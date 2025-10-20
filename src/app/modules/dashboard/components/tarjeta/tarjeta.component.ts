import { Component, Input } from '@angular/core';
import { TarjetaDashboard } from '../../dashboard.component';

@Component({
  selector: 'app-tarjeta',
  standalone: false,
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css',
})
export class TarjetaComponent {
  @Input() tarjeta!: TarjetaDashboard;

  get porcentaje(): number {
    const p = (this.tarjeta.limiteDisponible / this.tarjeta.limiteTotal) * 100;
    return Math.max(0, Math.min(100, p));
  }

  get fondo(): string {
    // Gradiente según tipo
    return this.tarjeta.tipo === 'Crédito'
      ? 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)'
      : 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)';
  }
}
