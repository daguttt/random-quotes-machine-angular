import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { map } from 'rxjs';

import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../interfaces/quotes.interface';
import { ColorThemesService } from '../../services/color-themes.service';

@Component({
  selector: 'app-random-quote-page',
  templateUrl: './random-quote-page.component.html',
  styleUrls: ['./random-quote-page.component.scss'],
})
export class RandomQuotePageComponent implements OnInit {
  colorTheme!: string;
  constructor(
    private quotesService: QuotesService,
    private colorThemesService: ColorThemesService
  ) {}

  ngOnInit(): void {
    this.quotesService
      .loadQuotes()
      .subscribe((_) => this.quotesService.emitNextRandomQuote());
    this.colorThemesService
      .getRandomRGBColor()
      .subscribe((color) => (this.colorTheme = color));
  }
}
