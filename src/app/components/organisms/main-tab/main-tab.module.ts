import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTabComponent } from './main-tab.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainTabComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    RouterModule
  ],
  exports: [MainTabComponent]
})
export class MainTabModule { }
