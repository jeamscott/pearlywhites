import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { PatientProfileService } from '../patient.profile.service';

@Component({
  templateUrl: './edit.profile.component.html'
})
export class EditProfileComponent {
  details: UserDetails;
  patientProfile;

  constructor(private auth: AuthenticationService, private patientService: PatientProfileService) {}

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
}
