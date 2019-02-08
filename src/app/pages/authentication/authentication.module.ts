import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignInPage } from './sign-in/sign-in.page';
import { SignUpPage } from './sign-up/sign-up.page';
import { AUTHENTICATION_ROUTES } from './authentication.routes';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(AUTHENTICATION_ROUTES)
  ],
  declarations: [
    SignInPage,
    SignUpPage
  ]
})
export class AuthenticationModule { }
