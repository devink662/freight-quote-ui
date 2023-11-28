// quote-request.model.ts

export class QuoteRequest {
  originLocation: string;
  destinationLocation: string;
  cargoType: string;
  quantity: number;
  specialRequirements: string;

  constructor(
    originLocation: string,
    destinationLocation: string,
    cargoType: string,
    quantity: number,
    specialRequirements: string
  ) {
    this.originLocation = originLocation;
    this.destinationLocation = destinationLocation;
    this.cargoType = cargoType;
    this.quantity = quantity;
    this.specialRequirements = specialRequirements;
  }
}
