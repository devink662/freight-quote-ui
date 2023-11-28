import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import {FormsModule} from "@angular/forms";
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { QuoteRequestComponent } from './components/quote/quote-request/quote-request.component';
import { QuoteComparisonComponent } from './components/quote/quote-comparison/quote-comparison.component';
import { QuoteModificationComponent } from './components/quote/quote-modification/quote-modification.component';
import { QuoteHistoryComponent } from './components/quote/quote-history/quote-history.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserProfileComponent,
    QuoteRequestComponent,
    QuoteComparisonComponent,
    QuoteModificationComponent,
    QuoteHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
