import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { PatientProfileService } from './patient.profile.service';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public auth: AuthenticationService, public patient: PatientProfileService, public appointment: AppointmentService) {}
}
