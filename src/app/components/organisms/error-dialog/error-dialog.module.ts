import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule
  ],
  entryComponents: [ErrorDialogComponent]
})
export class ErrorDialogModule { }
