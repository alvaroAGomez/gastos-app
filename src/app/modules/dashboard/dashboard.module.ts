import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { TablaGastosComponent } from './components/tabla-gastos/tabla-gastos.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TarjetaComponent,
    ResumenComponent,
    TablaGastosComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, NgChartsModule],
})
export class DashboardModule {}
