import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypageRoutingModule } from './mypage-routing.module';
import { MypageComponent } from './mypage.component';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';
import { AvatarModule } from 'src/app/components/atoms/avatar/avatar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [MypageComponent],
  imports: [
    CommonModule,
    MypageRoutingModule,
    MatButtonModule,
    BreadcrumbModule,
    AvatarModule,
    FlexLayoutModule,
    MatDividerModule
  ]
})
export class MypageModule { }
