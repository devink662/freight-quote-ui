
export class Quote {
  id: string;
  originLocation: string;
  destinationLocation: string;
  cargoType: string;
  quantity: number;
  status: string;
  specialRequirements?: string;

  constructor(
    id: string,
    originLocation: string,
    destinationLocation: string,
    cargoType: string,
    quantity: number,
    status: string
  ) {
    this.id = id;
    this.originLocation = originLocation;
    this.destinationLocation = destinationLocation;
    this.cargoType = cargoType;
    this.quantity = quantity;
    this.status = status;
  }
}
