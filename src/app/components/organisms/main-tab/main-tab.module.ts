import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTabComponent } from './main-tab.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [MainTabComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [MainTabComponent]
})
export class MainTabModule { }
