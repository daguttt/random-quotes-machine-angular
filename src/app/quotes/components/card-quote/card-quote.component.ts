import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Quote } from '../../interfaces/quotes.interface';
import { ColorThemesService } from '../../services/color-themes.service';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-card-quote',
  templateUrl: './card-quote.component.html',
  styleUrls: ['./card-quote.component.scss'],
})
export class CardQuoteComponent implements OnInit, OnDestroy {
  quote!: Quote;
  quoteSubscription!: Subscription;

  colorTheme!: string;
  colorThemeSubscription!: Subscription;

  constructor(
    private quotesService: QuotesService,
    private colorThemesService: ColorThemesService
  ) {}

  ngOnInit(): void {
    this.quoteSubscription = this.quotesService
      .getRandomQuote()
      .subscribe((quote) => (this.quote = quote));

    this.colorThemeSubscription = this.colorThemesService
      .getRandomRGBColor()
      .subscribe((color) => (this.colorTheme = color));
  }

  ngOnDestroy(): void {
    this.quoteSubscription.unsubscribe();
    this.colorThemeSubscription.unsubscribe();
  }

  showNextQuote() {
    this.quotesService.emitNextRandomQuote();
    this.colorThemesService.emitNextRandomRGBColor();
  }
}
