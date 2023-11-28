// quote-history.component.ts

import { Component, OnInit } from '@angular/core';
import { Quote } from '../../../models/quote.model';
import { QuoteService } from '../../../services/quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-history',
  templateUrl: './quote-history.component.html',
  styleUrls: ['./quote-history.component.css']
})
export class QuoteHistoryComponent implements OnInit {
  quoteHistory: Quote[] = [];
  quotes: Quote[] = [];
  constructor(private quoteService: QuoteService, private router: Router) {}

  ngOnInit() {
    // Load quote history data on component initialization
    this.loadQuoteHistory();
    this.loadQuotes();
  }

  loadQuoteHistory() {
    const userId = '123'; // Replace with actual user ID or retrieve from authentication
    this.quoteService.getQuoteHistory(userId).subscribe(
      (response) => {
        this.quoteHistory = response;
      },
      (error) => {
        console.error('Error loading quote history:', error);
      }
    );
  }

  loadQuotes() {
    this.quoteService.getQuotes().subscribe(
      (response) => {
        this.quotes = response;
      },
      (error) => {
        console.error('Error loading quotes:', error);
      }
    );
  }

  viewQuoteDetails(quoteId: string) {
    this.router.navigate(['/quote-details', quoteId]);
  }

  editQuote(quoteId: string) {
    this.router.navigate(['/quote-edit', quoteId]);
  }
}
