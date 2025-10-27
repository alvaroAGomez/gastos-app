import { Component, Input } from '@angular/core';
import {
  TarjetaCreditoResponse,
  TarjetaCreditoResumenResponse,
} from '../../models/responses/tarjeta-credito.response';

@Component({
  selector: 'app-tarjeta',
  standalone: false,
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css',
})
export class TarjetaComponent {
  [x: string]: any;
  @Input() tarjeta!: TarjetaCreditoResumenResponse;

  get porcentaje(): number {
    const limiteTotal = parseFloat(this.tarjeta.limiteTotal.toString());
    const consumido = limiteTotal - this.tarjeta.limiteDisponible;
    const porcentaje = (consumido / limiteTotal) * 100;
    return Math.max(0, Math.min(100, porcentaje));
  }

  get colorBarra(): string {
    const porcentaje = this.porcentaje;
    if (porcentaje <= 50) {
      return 'bg-green-400';
    } else if (porcentaje <= 80) {
      return 'bg-yellow-400';
    } else {
      return 'bg-red-400';
    }
  }

  get fondo(): string {
    /*     // Gradiente según tipo
    return this.tarjeta.tipo === 'Crédito'
      ? 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)'
      : 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)'; */
    return 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)';
  }
}
