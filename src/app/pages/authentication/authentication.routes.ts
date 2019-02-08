import { Routes } from '@angular/router';

import { SignInPage } from './sign-in/sign-in.page';
import { SignUpPage } from './sign-up/sign-up.page';

export const AUTHENTICATION_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInPage
  },
  {
    path: 'sign-up',
    component: SignUpPage
  }
];

export const AUTHENTICATION_NAV_ROUTES: Array<{ title: string, url: string, icon?: string }> = [
  {
    title: 'Sign in',
    url: '/authentication/sign-in',
    icon: 'log-in'
  }
];
