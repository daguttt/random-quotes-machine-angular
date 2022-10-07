import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomQuotePageComponent } from './pages/random-quote-page/random-quote-page.component';

const routes: Routes = [
  {
    path: '',
    component: RandomQuotePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotesRoutingModule {}
