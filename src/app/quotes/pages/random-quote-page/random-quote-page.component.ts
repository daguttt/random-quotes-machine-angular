import { Component, OnDestroy, OnInit } from '@angular/core';

import { QuotesService } from '../../services/quotes.service';
import { ColorThemesService } from '../../services/color-themes.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-random-quote-page',
  templateUrl: './random-quote-page.component.html',
  styleUrls: ['./random-quote-page.component.scss'],
})
export class RandomQuotePageComponent implements OnInit {
  colorTheme$: Observable<string> = this.colorThemesService.randomColor$;
  colorThemeSubscription!: Subscription;

  constructor(
    private quotesService: QuotesService,
    private colorThemesService: ColorThemesService
  ) {}

  ngOnInit(): void {
    this.quotesService
      .loadQuotes()
      .subscribe(() => this.quotesService.emitNextRandomQuote());
  }
}
