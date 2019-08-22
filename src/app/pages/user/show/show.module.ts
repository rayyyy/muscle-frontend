import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from './show.component';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';
import { AvatarModule } from 'src/app/components/atoms/avatar/avatar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserService } from 'src/app/services/user/user.service';
import { FormItemTitleModule } from 'src/app/components/atoms/form-item-title/form-item-title.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    ShowRoutingModule,
    BreadcrumbModule,
    AvatarModule,
    FlexLayoutModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FormItemTitleModule,
    RouterModule
  ],
  providers: [UserService]
})
export class ShowModule { }
