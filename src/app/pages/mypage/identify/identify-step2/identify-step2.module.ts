import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IdentifyStep2RoutingModule } from "./identify-step2-routing.module";
import { IdentifyStep2Component } from "./identify-step2.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BreadcrumbModule } from "src/app/components/molecules/breadcrumb/breadcrumb.module";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormItemTitleModule } from "src/app/components/atoms/form-item-title/form-item-title.module";

@NgModule({
  declarations: [IdentifyStep2Component],
  imports: [
    CommonModule,
    IdentifyStep2RoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    BreadcrumbModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    FormItemTitleModule,
    MatSnackBarModule
  ]
})
export class IdentifyStep2Module {}
