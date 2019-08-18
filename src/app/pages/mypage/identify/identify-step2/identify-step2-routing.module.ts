import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IdentifyStep2Component } from "./identify-step2.component";

const routes: Routes = [{ path: "", component: IdentifyStep2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentifyStep2RoutingModule {}
