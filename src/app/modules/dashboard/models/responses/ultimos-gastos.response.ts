export interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string | string[];
  status: number;
  message: string;
}

export class GastoCompletoDto {
  id!: number;
  gastoId?: number;
  fecha!: string;
  descripcion!: string;
  categoria!: {
    id: number;
    nombre: string;
    color_hex?: string;
    icono?: string;
  };
  monto!: number;
  montoTotal?: number;
  moneda!: string;
  tarjeta!: {
    id: number;
    nombre: string;
    banco: {
      id: number;
      nombre: string;
    };
  };
  tipo!: string;
  totalCuotas?: number;
  cuotaActual?: number;
  esDebitoAuto!: boolean;
}

export class GastosCompletosResponseDto {
  gastos!: GastoCompletoDto[];
  pagination!: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  filtros!: {
    tarjetaId?: number;
    categoriaId?: number;
    mes?: string;
    fechaDesde?: string;
    fechaHasta?: string;
  };
}
