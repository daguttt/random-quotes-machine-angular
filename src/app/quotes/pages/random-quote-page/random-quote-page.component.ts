import { AfterViewInit, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../interfaces/quotes.interface';

@Component({
  selector: 'app-random-quote-page',
  templateUrl: './random-quote-page.component.html',
  styleUrls: ['./random-quote-page.component.scss'],
})
export class RandomQuotePageComponent implements OnInit {
  colorThemes: string[] = [];

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    console.log('Init quotes');
    this.quotesService
      .loadQuotes()
      .subscribe((_) => this.quotesService.emitNextRandomQuote());
  }
}
