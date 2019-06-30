import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentorComponent } from './mentor.component';

const routes: Routes = [
  { path: '', component: MentorComponent },
  {
    path: ':id',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
