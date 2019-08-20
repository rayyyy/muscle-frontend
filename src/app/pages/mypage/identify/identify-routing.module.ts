import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IdentifyComponent } from "./identify.component";

const routes: Routes = [
  { path: "", component: IdentifyComponent },
  {
    path: "step1",
    loadChildren: () =>
      import("./identify-step1/identify-step1.module").then(
        mod => mod.IdentifyStep1Module
      )
  },
  {
    path: "step2",
    loadChildren: () =>
      import("./identify-step2/identify-step2.module").then(
        mod => mod.IdentifyStep2Module
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentifyRoutingModule {}
