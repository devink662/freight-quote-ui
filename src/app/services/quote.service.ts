// quote.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'http://localhost:3000/api/quotes'; // Adjust the URL to your backend API endpoint

  constructor(private http: HttpClient) {
  }

  submitQuote(quote: Quote): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, quote);
  }

  getQuoteDetails(quoteId: string): Observable<Quote> {
    return this.http.get<Quote>(`${this.apiUrl}/details/${quoteId}`);
  }

  updateQuote(quoteId: string, quote: Quote): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${quoteId}`, quote);
  }

  getQuoteHistory(userId: string): Observable<Quote[]> {
    return this.http.get<Quote[]>(`${this.apiUrl}/history/${userId}`);
  }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(`${this.apiUrl}`);
  }

  submitSpotFreightQuoteRequest(quote: Quote) {
    //add error handling
    return this.http.post(`${this.apiUrl}/submit`, quote);
  }
}
