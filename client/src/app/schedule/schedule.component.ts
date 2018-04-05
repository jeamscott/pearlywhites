import { Component } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { PatientProfileService, PatientPayload } from '../patient.profile.service';
import { AppointmentService} from '../appointment.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './schedule.component.html'
})

export class ScheduleComponent {
  details: UserDetails;
  apts;
  patientProfile;
  

  constructor(private auth: AuthenticationService, private appointmentService: AppointmentService, private patientService: PatientProfileService, private router: Router) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.log(err);
    });

    this.appointmentService.appointment().subscribe(appointment => {
      this.apts = appointment;
    }, (err) => {
      console.error(err);
    });

    this.patientService.profile().subscribe(profile => {
      this.patientProfile = profile;
    }, (err) => {
      console.error(err);
    });
  }

  scheduleAppointment() {
    this.appointmentService.schedule(this.apts).subscribe(() => {
      console.log('yay');
    }, (err) => {
      console.error(err);
    });
  }

  

}