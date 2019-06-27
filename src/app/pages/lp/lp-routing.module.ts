import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LpComponent } from './lp.component';

const routes: Routes = [
  { path: '', component: LpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LpRoutingModule { }
