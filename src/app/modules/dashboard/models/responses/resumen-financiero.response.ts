export class ProximoCierreDto {
  fecha!: string;
  nombreTarjeta!: string;
  tipo!: 'cierre';
}

export class ResumenFinancieroResponse {
  totalDisponible!: number;
  gastosEsteMes!: number;
  proximoCierre!: ProximoCierreDto | null;
}
