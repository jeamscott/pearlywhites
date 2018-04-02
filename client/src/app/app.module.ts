import { DeleteItemComponent } from './accounting/delete-item/delete-item.component';
import { LoadComponentModule } from './common/load-component/load-component.module';
import { OverlayModule } from './common/overlay/overlay.module';
import { GeneraljournalComponent } from './accounting/generaljournal/generaljournal.component';
import { AccountingComponent } from './accounting/accounting.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FaqsComponent } from './faqs/faqs.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { PatientProfileService } from './patient.profile.service';

// the following imports were added for accounting app ~RS
import { FinanceService } from './accounting/accounting.service';
import { JournalFinanceService } from './accounting/generaljournal/generaljournal.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './accounting/logout/logout.component';
// import { AlertModule } from 'ngx-bootstrap';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'accounting', component: AccountingComponent },
  { path: 'generaljournal/generaljournal', component: GeneraljournalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    FaqsComponent,
    RegisterComponent,
    HomeComponent,
    DeleteItemComponent,
    LogoutComponent,
    // line 41 added for accounting RS
    AccountingComponent,
    GeneraljournalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OverlayModule,
    LoadComponentModule,
    // line 47,48 added for accounting RS
    ReactiveFormsModule,
    // AlertModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    FinanceService,
    JournalFinanceService,
    PatientProfileService
  ],
  entryComponents: [DeleteItemComponent, LogoutComponent],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
