import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

import { getRandomElementFronAnArray } from 'src/app/shared/utils/getRandomElementFromAnArray';
import { environment } from 'src/environments/environment';

import { Quote, Quotes } from '../interfaces/quotes.interface';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  quotesApiUrl: string = environment.quotesApiURL;

  private _quotes: Quote[] = [];
  quoteEmitter$ = new Subject<Quote>();

  constructor(private http: HttpClient) {}

  loadQuotes(): Observable<Quotes> {
    return this.http
      .get<Quotes>(this.quotesApiUrl)
      .pipe(tap((quotes) => (this._quotes = quotes.quotes)));
  }

  emitNextRandomQuote(): void {
    const randomQuote = getRandomElementFronAnArray(this._quotes);
    this.quoteEmitter$.next(randomQuote);
  }

  getRandomQuote(): Observable<Quote> {
    return this.quoteEmitter$.asObservable();
  }
}
