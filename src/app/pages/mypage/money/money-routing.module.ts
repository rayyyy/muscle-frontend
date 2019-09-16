import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneyComponent } from './money.component';

const routes: Routes = [
  { path: '', component: MoneyComponent },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then(mod => mod.PaymentModule)
  },
  {
    path: 'withdrawal',
    loadChildren: () =>
      import('./withdrawal/withdrawal.module').then(mod => mod.WithdrawalModule)
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./history/history.module').then(mod => mod.HistoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneyRoutingModule {}
