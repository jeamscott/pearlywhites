import { Component } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { PatientProfileService, PatientPayload } from '../patient.profile.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './edit.profile.component.html'
})
export class EditProfileComponent {
  details: UserDetails;
  patientProfile;
  changes: TokenPayload = { //experimental
    email: '',
    name: '',
    password: '',
  };

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

  update() { //experimental
    this.auth.update(this.changes).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }

}
