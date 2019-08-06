import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypageRoutingModule } from './mypage-routing.module';
import { MypageComponent } from './mypage.component';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';
import { AvatarModule } from 'src/app/components/atoms/avatar/avatar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DetailIconModule } from 'src/app/components/molecules/detail-icon/detail-icon.module';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [MypageComponent],
  imports: [
    CommonModule,
    MypageRoutingModule,
    MatButtonModule,
    BreadcrumbModule,
    AvatarModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    DetailIconModule,
    RouterModule,
    MatProgressSpinnerModule
  ]
})
export class MypageModule { }
