import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

import { getRandomElementFromArray } from 'src/app/shared/utils/getRandomElementFromAnArray';
import { environment } from 'src/environments/environment';

import { Quote, Quotes } from '../interfaces/quotes.interface';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private _randomQuote = new Subject<Quote>();
  private _quotes: Quote[] = [];

  quotesApiUrl: string = environment.quotesApiURL;
  randomQuote$ = this._randomQuote.asObservable();

  constructor(private http: HttpClient) {}

  loadQuotes(): Observable<Quotes> {
    return this.http
      .get<Quotes>(this.quotesApiUrl)
      .pipe(tap((quotes) => (this._quotes = quotes.quotes)));
  }

  emitNextRandomQuote(): void {
    const randomQuote = getRandomElementFromArray(this._quotes);
    this._randomQuote.next(randomQuote);
  }
}
