import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, LayoutRoutingModule, SharedModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
