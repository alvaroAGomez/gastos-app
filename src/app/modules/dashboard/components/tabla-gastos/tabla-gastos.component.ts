import { Component, Input } from '@angular/core';
import { GastoItem } from '../../dashboard.component';

@Component({
  selector: 'app-tabla-gastos',
  standalone: false,
  templateUrl: './tabla-gastos.component.html',
  styleUrl: './tabla-gastos.component.css',
})
export class TablaGastosComponent {
  @Input() titulo = 'Últimos Gastos';
  @Input() gastos: GastoItem[] = [];
}
