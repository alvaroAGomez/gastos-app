export class TarjetaCreditoResponse {
  id!: number;
  nombreTarjeta!: string;
  numeroTarjeta!: string;
  limiteTotal!: number;
  limiteDisponible!: number;
  gastoActual!: number;
  diaCierre!: number;
  diaVencimiento!: number;
  cierreActual!: Date;
  vencimientoActual!: Date;
  banco!: BancoResponse;
}

export class BancoResponse {
  id!: number;
  nombre!: string;
  logo_url?: string;
}

export class TarjetaCreditoResumenResponse {
  tarjetaId!: number;
  nombreTarjeta!: string;
  banco!: string;
  ultimos4!: string;
  gastoActualMensual!: number;
  totalConsumosPendientes!: number;
  limiteDisponible!: number;
  limiteTotal!: number;
}
