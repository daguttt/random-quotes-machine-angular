import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../../interfaces/quotes.interface';
import { ColorThemesService } from '../../services/color-themes.service';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-card-quote',
  templateUrl: './card-quote.component.html',
  styleUrls: ['./card-quote.component.scss'],
})
export class CardQuoteComponent {
  quote$: Observable<Quote> = this.quotesService.randomQuote$;
  colorTheme$: Observable<string> = this.colorThemesService.randomColor$;

  constructor(
    private quotesService: QuotesService,
    private colorThemesService: ColorThemesService
  ) {}

  showNextQuote() {
    this.quotesService.emitNextRandomQuote();
    this.colorThemesService.emitNextRandomRGBColor();
  }
}
