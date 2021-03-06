import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, AngularFireAuthGuard } from '@angular/fire/auth-guard';
const redirectLoggedInToMypage = () => redirectLoggedInTo(['mypage']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);

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
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(mod => mod.UserModule)
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
    loadChildren: () => import('./pages/sign-in/sign-in.module').then(mod => mod.SignInModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToMypage }
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(mod => mod.SignUpModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToMypage }
  },
  {
    path: 'mypage',
    loadChildren: () => import('./pages/mypage/mypage.module').then(mod => mod.MypageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
