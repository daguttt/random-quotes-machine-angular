import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Quote } from '../../interfaces/quotes.interface';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-card-quote',
  templateUrl: './card-quote.component.html',
  styleUrls: ['./card-quote.component.scss'],
})
export class CardQuoteComponent implements OnInit, OnDestroy {
  quote!: Quote;
  quoteSubscription!: Subscription;

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    console.log('Getting quote');
    this.quoteSubscription = this.quotesService
      .getRandomQuote()
      .subscribe((quote) => (this.quote = quote));
  }

  ngOnDestroy(): void {
    this.quoteSubscription.unsubscribe();
  }

  showNextQuote() {
    this.quotesService.emitNextRandomQuote();
  }
}
