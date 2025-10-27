import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  ApiResponse,
  GastosCompletosResponseDto,
} from '../models/responses/ultimos-gastos.response';
import { DashboardGastosRequest } from '../models/dashboard-gastos.request';
import {
  TarjetaCreditoResponse,
  TarjetaCreditoResumenResponse,
} from '../models/responses/tarjeta-credito.response';
import { ResumenFinancieroResponse } from '../models/responses/resumen-financiero.response';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = environment.apiUrl;
  private controllerGasto = 'gastos';
  private controllerTarjeta = 'tarjetas-credito';
  private controllerDashboard = 'dashboard';

  constructor(private http: HttpClient) {}

  public getUltimosGastos(request: DashboardGastosRequest) {
    return this.http.get<ApiResponse<GastosCompletosResponseDto>>(
      `${this.apiUrl}${this.controllerGasto}/dashboard`,
      { params: { ...request } }
    );
  }

  public getResumenTarjetas() {
    return this.http.get<ApiResponse<TarjetaCreditoResumenResponse[]>>(
      `${this.apiUrl}${this.controllerTarjeta}/resumen`
    );
  }
  public getResumenFinanciero() {
    return this.http.get<ApiResponse<ResumenFinancieroResponse>>(
      `${this.apiUrl}${this.controllerDashboard}/resumen-financiero`
    );
  }
}
