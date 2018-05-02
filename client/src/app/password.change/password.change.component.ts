import { Component } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { PatientProfileService, PatientPayload } from '../patient.profile.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  templateUrl: './password.change.component.html'
})
export class PasswordChangeComponent {
  details: UserDetails;
  newpassword: TokenPayload;
  
  

  constructor(private auth: AuthenticationService, private patientService: PatientProfileService, private router: Router) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.newpassword = user;
    }, (err) => {
      console.log(err);
    });

    


  }

  _changePassword() {
    this.patientService.changePassword(this.newpassword).subscribe(() => {
      this.router.navigateByUrl('/profile');
      
    }, (err) => {
      console.error(err);
    });
  }




}