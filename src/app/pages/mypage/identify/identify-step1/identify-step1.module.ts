import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IdentifyStep1RoutingModule } from "./identify-step1-routing.module";
import { IdentifyStep1Component } from "./identify-step1.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { TextFieldModule } from "@angular/cdk/text-field";
import { BreadcrumbModule } from "src/app/components/molecules/breadcrumb/breadcrumb.module";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormItemTitleModule } from "src/app/components/atoms/form-item-title/form-item-title.module";

@NgModule({
  declarations: [IdentifyStep1Component],
  imports: [
    CommonModule,
    IdentifyStep1RoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    BreadcrumbModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    FormItemTitleModule,
    MatSnackBarModule
  ]
})
export class IdentifyStep1Module {}
