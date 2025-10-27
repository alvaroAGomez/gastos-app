import { Component, Input, OnInit } from '@angular/core';
import { GastoCompletoDto } from '../../models/responses/ultimos-gastos.response';

@Component({
  selector: 'app-tabla-gastos',
  standalone: false,
  templateUrl: './tabla-gastos.component.html',
  styleUrl: './tabla-gastos.component.css',
})
export class TablaGastosComponent implements OnInit {
  @Input() titulo = 'Últimos Gastos';
  @Input() ultimosGastos: GastoCompletoDto[] = [];

  constructor() {}
  ngOnInit(): void {
    console.log('ngOnInit - gastos:', this.ultimosGastos[0].tarjeta.banco); // ✅ Aquí ya están los valores
  }

  esCuotas(gasto: GastoCompletoDto): boolean {
    return !!(gasto.totalCuotas && gasto.totalCuotas > 1);
  }

  getTextoCuotas(gasto: GastoCompletoDto): string {
    if (this.esCuotas(gasto)) {
      return `${gasto.cuotaActual || 1}/${gasto.totalCuotas}`;
    }
    return '-';
  }
}
