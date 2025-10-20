import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resumen',
  standalone: false,
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css'],
})
export class ResumenComponent {
  /** Título de la card (ej: "Total disponible") */
  @Input() titulo = '';

  /** Valor a mostrar. Puede ser number (se formatea moneda) o string (se muestra tal cual) */
  @Input() valor: number | string = 0;

  /** Si querés forzar formato texto aunque sea número */
  @Input() tipo: 'moneda' | 'texto' = 'moneda';

  esNumero(val: any): val is number {
    return typeof val === 'number' && !isNaN(val);
  }
}
