export class Quote {
  id: string;
  quantity: number;
  status: string;
  specialRequirements?: string;
  origin: string;
  destination: string;
  cargoType: string;
  weight: number;
  dimensions: number[];
  units: number;
  packaging: string;
  hazardous: boolean;
  mode: string;
  transitTime: string; // Assuming string for simplicity, adjust as needed
  specialHandling: string;
  temperature: string;
  customsInfo: string;
  pickupDate: string; // Assuming string for simplicity, adjust as needed
  deliveryDate: string; // Assuming string for simplicity, adjust as needed
  accessorials: string[];
  insurance: boolean;
  insuranceAmount: number;
  incoterms: string;
  paymentTerms: string;
  carrier: string;
  shipperContact: string;
  consigneeContact: string;

  constructor(
    id: string,
    cargoType: string,
    quantity: number,
    status: string,
    origin: string,
    destination: string,
    weight: number,
    dimensions: number[],
    units: number,
    packaging: string,
    hazardous: boolean,
    mode: string,
    transitTime: string,
    specialHandling: string,
    temperature: string,
    customsInfo: string,
    pickupDate: string,
    deliveryDate: string,
    accessorials: string[],
    insurance: boolean,
    insuranceAmount: number,
    incoterms: string,
    paymentTerms: string,
    carrier: string,
    shipperContact: string,
    consigneeContact: string,
    specialRequirements?: string,
  ) {
    this.id = id;
    this.cargoType = cargoType;
    this.quantity = quantity;
    this.status = status;
    this.origin = origin;
    this.destination = destination;
    this.weight = weight;
    this.dimensions = dimensions;
    this.units = units;
    this.packaging = packaging;
    this.hazardous = hazardous;
    this.mode = mode;
    this.transitTime = transitTime;
    this.specialHandling = specialHandling;
    this.temperature = temperature;
    this.customsInfo = customsInfo;
    this.pickupDate = pickupDate;
    this.deliveryDate = deliveryDate;
    this.accessorials = accessorials;
    this.insurance = insurance;
    this.insuranceAmount = insuranceAmount;
    this.incoterms = incoterms;
    this.paymentTerms = paymentTerms;
    this.carrier = carrier;
    this.shipperContact = shipperContact;
    this.consigneeContact = consigneeContact;
    this.specialRequirements = specialRequirements;
  }
}
