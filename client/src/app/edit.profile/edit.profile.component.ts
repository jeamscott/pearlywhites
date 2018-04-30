import { Component } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { PatientProfileService, PatientPayload } from '../patient.profile.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './edit.profile.component.html'
})
export class EditProfileComponent {
  details: UserDetails;
  patientProfile;
  

  constructor(private auth: AuthenticationService, private patientService: PatientProfileService, private router: Router) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.log(err);
    });

    this.patientService.profile().subscribe(profile => {
      this.patientProfile = profile;
    }, (err) => {
      console.error(err);
    });
  }

  updateProfile() {
    this.patientService.update(this.patientProfile).subscribe(() => {
      this.router.navigateByUrl('/profile');
      
    }, (err) => {
      console.error(err);
    });
  }



}
