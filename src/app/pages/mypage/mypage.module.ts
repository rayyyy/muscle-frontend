import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypageRoutingModule } from './mypage-routing.module';
import { MypageComponent } from './mypage.component';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [MypageComponent],
  imports: [
    CommonModule,
    MypageRoutingModule,
    MatButtonModule,
    BreadcrumbModule
  ]
})
export class MypageModule { }
