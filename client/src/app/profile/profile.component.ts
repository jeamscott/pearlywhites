import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { PatientProfileService } from '../patient.profile.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  details: UserDetails;
  patientProfile;

  constructor(private auth: AuthenticationService, private patientService: PatientProfileService, private router: Router) {}

  ngOnInit() {
    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });

    this.patientService.profile().subscribe(profile => {
      this.patientProfile = profile;
    }, (err) => {
      console.error(err);
    });
  }

  route_edit() {
    this.router.navigateByUrl('/edit.profile');
  }

  route_password() {
    this.router.navigateByUrl('/passwordChange');
  }
}
