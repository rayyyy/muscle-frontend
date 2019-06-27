import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LpRoutingModule } from './lp-routing.module';
import { LpComponent } from './lp.component';

@NgModule({
  declarations: [LpComponent],
  imports: [
    CommonModule,
    LpRoutingModule
  ]
})
export class LpModule { }
