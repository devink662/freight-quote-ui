// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { QuoteRequestComponent } from './components/quote/quote-request/quote-request.component';
import {QuoteHistoryComponent} from "./components/quote/quote-history/quote-history.component";

const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'profile/:id', component: UserProfileComponent },
  { path: 'spot-freight-quote', component: QuoteRequestComponent },
  { path: 'quote-history', component: QuoteHistoryComponent },
  { path: '', redirectTo: '/spot-freight-quote', pathMatch: 'full' },
  { path: '**', redirectTo: '/spot-freight-quote', pathMatch: 'full' }
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
