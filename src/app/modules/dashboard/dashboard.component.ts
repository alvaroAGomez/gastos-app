import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ThemeService } from '../../core/services/theme.service';
import { DashboardService } from './services/dashboard.service';
import { DashboardGastosRequest } from './models/dashboard-gastos.request';
import {
  ApiResponse,
  GastoCompletoDto,
  GastosCompletosResponseDto,
} from './models/responses/ultimos-gastos.response';
import {
  TarjetaCreditoResponse,
  TarjetaCreditoResumenResponse,
} from './models/responses/tarjeta-credito.response';
import { ResumenFinancieroResponse } from './models/responses/resumen-financiero.response';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  totalDisponible = 0;
  gastosMes = 0;
  proximoVencimiento: string | number = '-';
  tarjetaCierre: string | number = '-';
  isDarkMode = false;
  public ultimosGastos: GastoCompletoDto[] = [];
  public tarjetas: TarjetaCreditoResumenResponse[] = [];

  // 📊 Gráfico de barras
  datosGastosMensuales: ChartData<'bar', number[], string> = {
    labels: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    datasets: [
      {
        label: 'Actual',
        data: [
          100000, 200000, 150000, 300000, 250000, 120000, 80000, 1250000,
          450000, 380000, 900000, 880000,
        ],
        backgroundColor: '#6a11cb',
        borderRadius: 6,
      },
      {
        label: 'Proyección',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 100000, 450000, 800000, 650000],
        backgroundColor: '#00c3ff',
        borderRadius: 6,
      },
    ],
  };

  opcionesGraficoBarra: ChartOptions<'bar'> = {
    responsive: true,
    plugins: { legend: { labels: { color: '#000' } } },
    scales: {
      x: { ticks: { color: '#333' }, grid: { color: '#e0e0e0' } },
      y: { ticks: { color: '#333' }, grid: { color: '#e0e0e0' } },
    },
  };

  // 🍩 Gráfico doughnut
  datosCategorias: ChartData<'doughnut', number[], string> = {
    labels: [
      'Comida',
      'Transporte',
      'Entretenimiento',
      'Salud',
      'Compras',
      'Servicios',
      'Otros',
    ],
    datasets: [
      {
        data: [15, 10, 12, 18, 25, 12, 8],
        backgroundColor: [
          '#1abc9c',
          '#3498db',
          '#f39c12',
          '#e74c3c',
          '#9b59b6',
          '#2ecc71',
          '#95a5a6',
        ],
        borderWidth: 1,
      },
    ],
  };

  opcionesGraficoDona: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#000' } },
    },
  };

  constructor(
    private theme: ThemeService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.theme.darkMode$.subscribe((dark) => {
      this.isDarkMode = dark;
      this.actualizarTemaGraficos();
    });
    this.cargarUltimosGastos();
    this.getResumenTarjetas();
    this.getResumenFinanciero();
  }

  public cargarUltimosGastos() {
    const request: DashboardGastosRequest = { limit: 5 };
    this.dashboardService
      .getUltimosGastos(request)
      .subscribe((response: ApiResponse<GastosCompletosResponseDto>) => {
        console.log(response);
        this.ultimosGastos = response?.data?.gastos ?? [];
      });
  }

  public getResumenTarjetas() {
    this.dashboardService.getResumenTarjetas().subscribe((response) => {
      console.log(response.data);
      this.tarjetas = response?.data ?? [];
    });
  }

  public getResumenFinanciero() {
    this.dashboardService
      .getResumenFinanciero()
      .subscribe((response: ApiResponse<ResumenFinancieroResponse>) => {
        console.log(response.data);
        const resumen = response?.data;
        this.totalDisponible = resumen?.totalDisponible ?? 0;
        this.gastosMes = resumen?.gastosEsteMes ?? 0;
        this.proximoVencimiento = resumen?.proximoCierre?.fecha ?? '-';
        this.tarjetaCierre = resumen?.proximoCierre?.nombreTarjeta ?? '-';
      });
  }

  actualizarTemaGraficos() {
    const texto = this.isDarkMode ? '#fff' : '#000';
    const grilla = this.isDarkMode ? '#444' : '#e0e0e0';

    this.opcionesGraficoBarra = {
      ...this.opcionesGraficoBarra,
      plugins: { legend: { labels: { color: texto } } },
      scales: {
        x: { ticks: { color: texto }, grid: { color: grilla } },
        y: { ticks: { color: texto }, grid: { color: grilla } },
      },
    };

    this.opcionesGraficoDona = {
      ...this.opcionesGraficoDona,
      plugins: { legend: { labels: { color: texto } } },
    };
  }
}
