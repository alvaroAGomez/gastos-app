import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ThemeService } from '../../core/services/theme.service';

// src/app/modules/dashboard/models.ts
export interface TarjetaDashboard {
  banco: string;
  nombre: string;
  logoUrl: string;
  tipo: 'Crédito' | 'Débito';
  limiteDisponible: number;
  limiteTotal: number;
  cierre: number;
  vencimiento: number;
}

export interface GastoItem {
  fecha: string;
  descripcion: string;
  categoria: string;
  monto: number;
  tarjeta: string;
}

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
  isDarkMode = false;

  tarjetas: TarjetaDashboard[] = [
    {
      banco: 'Banco Nación',
      nombre: 'Visa Platinum',
      logoUrl: 'assets/images/visa-logo.png',
      tipo: 'Crédito',
      limiteDisponible: 6420,
      limiteTotal: 10000,
      cierre: 5,
      vencimiento: 20,
    },
    {
      banco: 'Banco Provincia',
      nombre: 'Mastercard Gold',
      logoUrl: 'assets/images/mastercard-logo.png',
      tipo: 'Crédito',
      limiteDisponible: 5750,
      limiteTotal: 15000,
      cierre: 10,
      vencimiento: 25,
    },
    {
      banco: 'Banco Ciudad',
      nombre: 'Visa Débito',
      logoUrl: 'assets/images/visa-logo.png',
      tipo: 'Débito',
      limiteDisponible: 3800,
      limiteTotal: 5000,
      cierre: 1,
      vencimiento: 15,
    },
  ];

  ultimosGastos: GastoItem[] = [
    {
      fecha: '1/9/2026',
      descripcion: 'tablet (18/18)',
      categoria: 'Salud',
      monto: 32555556,
      tarjeta: 'Galicia - Visa',
    },
    {
      fecha: '1/8/2026',
      descripcion: 'tablet (17/18)',
      categoria: 'Salud',
      monto: 32555556,
      tarjeta: 'Galicia - Visa',
    },
    {
      fecha: '18/7/2026',
      descripcion: 'test 2 (12/12)',
      categoria: 'Compras',
      monto: 4166667,
      tarjeta: 'Galicia - Visa',
    },
    {
      fecha: '1/7/2026',
      descripcion: 'tablet (16/18)',
      categoria: 'Salud',
      monto: 32555556,
      tarjeta: 'Galicia - Visa',
    },
    {
      fecha: '21/6/2026',
      descripcion: 'tele (18/18)',
      categoria: 'Compras',
      monto: 88888889,
      tarjeta: 'Galicia - Visa Black',
    },
  ];

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

  constructor(private theme: ThemeService) {}

  ngOnInit(): void {
    this.theme.darkMode$.subscribe((dark) => {
      this.isDarkMode = dark;
      this.actualizarTemaGraficos();
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
