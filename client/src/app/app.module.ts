import { DeleteItemComponent } from './accounting/delete-item/delete-item.component';
import { LoadComponentModule } from './common/load-component/load-component.module';
import { OverlayModule } from './common/overlay/overlay.module';
import { GeneraljournalComponent } from './accounting/generaljournal/generaljournal.component';
import { AccountingComponent } from './accounting/accounting.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit.profile/edit.profile.component';
import { LoginComponent } from './login/login.component';
import { FaqsComponent } from './faqs/faqs.component';
import { DocsComponent } from './docs/docs.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RegisterComponent } from './register/register.component';
import { PayComponent } from './pay/pay.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { PatientProfileService } from './patient.profile.service';
import { AppointmentService } from './appointment.service';
import { EmployeeService } from './employee.service';
import { BillingService } from './billing.service';
import { ThankYouComponent } from './thank.you/thank.you.component';
import { SuppliesComponent} from './supplies/supplies.component';
import { SuppliesService} from './supplies.service'

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
  { path: 'docs', component: DocsComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuardService] },
  { path: 'pay', component: PayComponent, canActivate: [AuthGuardService] },
  { path: 'edit.profile', component: EditProfileComponent, canActivate: [AuthGuardService] },
  { path: 'thank.you', component: ThankYouComponent, canActivate: [AuthGuardService] },
  { path: 'accounting', component: AccountingComponent },
  { path: 'generaljournal/generaljournal', component: GeneraljournalComponent },
  { path: 'supplies', component: SuppliesComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EditProfileComponent,
    LoginComponent,
    FaqsComponent,
    DocsComponent,
    InventoryComponent,
    RegisterComponent,
    HomeComponent,
    DeleteItemComponent,
    LogoutComponent,
    SuppliesComponent,

    // line 41 added for accounting RS
    AccountingComponent,
    GeneraljournalComponent,
    ScheduleComponent,
    PayComponent,
    ThankYouComponent,
    
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
    PatientProfileService,
    AppointmentService,
    EmployeeService,
    BillingService,
    SuppliesService,
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
