import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuotesModule } from './quotes/quotes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, QuotesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
