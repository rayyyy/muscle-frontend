import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IdentifyRoutingModule } from "./identify-routing.module";
import { IdentifyComponent } from "./identify.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BreadcrumbModule } from "src/app/components/molecules/breadcrumb/breadcrumb.module";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FormItemTitleModule } from "src/app/components/atoms/form-item-title/form-item-title.module";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [IdentifyComponent],
  imports: [
    CommonModule,
    IdentifyRoutingModule,
    FlexLayoutModule,
    BreadcrumbModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormItemTitleModule,
    MatSnackBarModule
  ]
})
export class IdentifyModule {}
