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
  quote: Quote = new Quote('', '', '',  '',0, '');

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
}
