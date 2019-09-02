import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpStep2Component } from './sign-up-step2.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [{ path: '', component: SignUpStep2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSnackBarModule],
  exports: [RouterModule]
})
export class SignUpStep2RoutingModule {}
