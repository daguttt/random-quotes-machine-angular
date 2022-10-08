import { Component, OnDestroy, OnInit } from '@angular/core';

import { QuotesService } from '../../services/quotes.service';
import { ColorThemesService } from '../../services/color-themes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-random-quote-page',
  templateUrl: './random-quote-page.component.html',
  styleUrls: ['./random-quote-page.component.scss'],
})
export class RandomQuotePageComponent implements OnInit, OnDestroy {
  colorTheme!: string;
  colorThemeSubscription!: Subscription;

  constructor(
    private quotesService: QuotesService,
    private colorThemesService: ColorThemesService
  ) {}

  ngOnInit(): void {
    this.quotesService
      .loadQuotes()
      .subscribe((_) => this.quotesService.emitNextRandomQuote());
    this.colorThemeSubscription = this.colorThemesService
      .getRandomRGBColor()
      .subscribe((color) => (this.colorTheme = color));
  }

  ngOnDestroy(): void {
    this.colorThemeSubscription.unsubscribe();
  }
}
