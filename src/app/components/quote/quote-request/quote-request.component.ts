// quote-request.component.ts

import { Component } from '@angular/core';
import { Quote } from '../../../models/quote.model';
import { QuoteService } from '../../../services/quote.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.css']
})
export class QuoteRequestComponent {
  quote: Quote = new Quote(
    '',
    '',
    0,
    '',
    "",
    '',
    0,
    [0],
    0,
    '',
    false,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    [""],
    false,
    0.00,
    '',
    '',
    '',
    '',
    '',
  );

  constructor(
  private quoteService: QuoteService,
  private router: Router
  ) {}

  onSubmit() {
    this.quoteService.submitSpotFreightQuoteRequest(this.quote).subscribe(
      response => {
        console.log('Spot freight quote request submitted successfully:', response);
        // Add any additional logic or navigation after successful submission
      },
      error => {
        console.error('Error submitting spot freight quote request:', error);
        // Handle error (display message, etc.)
      }
    );
    // navigate to quote history page
    this.router.navigateByUrl('/quote-history');
  }

  resetForm() {
    // Add logic to handle form reset
    this.quote = {
      id: "", quantity: 0, status: "",
      origin: '',
      destination: '',
      cargoType: '',
      weight: 0,
      dimensions: [],
      units: 0,
      packaging: '',
      hazardous: false,
      mode: '',
      transitTime: '',
      specialHandling: '',
      temperature: '',
      customsInfo: '',
      pickupDate: '',
      deliveryDate: '',
      accessorials: [],
      insurance: false,
      insuranceAmount: 0,
      incoterms: '',
      paymentTerms: '',
      carrier: '',
      shipperContact: '',
      consigneeContact: ''
    };
  }
}
