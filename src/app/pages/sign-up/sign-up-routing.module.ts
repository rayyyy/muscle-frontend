import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  {
    path: 'step2',
    loadChildren: () =>
      import('./sign-up-step2/sign-up-step2.module').then(
        mod => mod.SignUpStep2Module
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule {}
