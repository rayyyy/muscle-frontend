import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MypageComponent } from './mypage.component';

const routes: Routes = [
  { path: '', component: MypageComponent },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(mod => mod.ProfileModule)
  },
  {
    path: 'identify',
    loadChildren: () =>
      import('./identify/identify.module').then(mod => mod.IdentifyModule)
  },
  {
    path: 'mentor',
    loadChildren: () =>
      import('./mentor/mentor.module').then(mod => mod.MentorModule)
  },
  {
    path: 'money',
    loadChildren: () =>
      import('./money/money.module').then(mod => mod.MoneyModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MypageRoutingModule {}
