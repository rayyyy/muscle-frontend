import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'lp',
    loadChildren: () => import('./pages/lp/lp.module').then(mod => mod.LpModule)
  },
  {
    path: 'mentor',
    loadChildren: () => import('./pages/mentor/mentor.module').then(mod => mod.MentorModule)
  },
  {
    path: 'mentee',
    loadChildren: () => import('./pages/mentee/mentee.module').then(mod => mod.MenteeModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then(mod => mod.SignInModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
