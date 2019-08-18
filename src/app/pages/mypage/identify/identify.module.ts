import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IdentifyRoutingModule } from "./identify-routing.module";
import { IdentifyComponent } from "./identify.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { TextFieldModule } from "@angular/cdk/text-field";
import { BreadcrumbModule } from "src/app/components/molecules/breadcrumb/breadcrumb.module";
import { AvatarModule } from "src/app/components/atoms/avatar/avatar.module";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [IdentifyComponent],
  imports: [
    CommonModule,
    IdentifyRoutingModule,
    FlexLayoutModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    BreadcrumbModule,
    AvatarModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule
  ]
})
export class IdentifyModule {}
