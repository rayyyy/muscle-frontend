import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IdentifyStep1Component } from "./identify-step1.component";

const routes: Routes = [{ path: "", component: IdentifyStep1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentifyStep1RoutingModule {}
