import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { QuotesRoutingModule } from './quotes-routing.module';

import { CardQuoteComponent } from './components/card-quote/card-quote.component';
import { RandomQuotePageComponent } from './pages/random-quote-page/random-quote-page.component';

@NgModule({
  declarations: [RandomQuotePageComponent, CardQuoteComponent],
  imports: [CommonModule, HttpClientModule, QuotesRoutingModule],
  exports: [],
})
export class QuotesModule {}
