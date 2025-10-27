export class DashboardGastosRequest {
  limit?: number = 10;
  tarjetaId?: number;
  categoriaId?: number;
  fechaDesde?: string;
  fechaHasta?: string;
}
