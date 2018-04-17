import { Component } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { PatientProfileService, PatientPayload } from '../patient.profile.service';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './faqs.component.html'
})
export class FaqsComponent {
  details: UserDetails;
  patientProfile;
  employee;

constructor(private auth: AuthenticationService, private patientService: PatientProfileService, private router: Router, private employeeService: EmployeeService) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.log(err);
    });

    this.employeeService.employed().subscribe(profile => {
      this.employee = profile;
    }, (err) => {
      console.error(err);
    });
  }

  hire() {
    this.employeeService.hire(this.employee).subscribe(() => {
      this.router.navigateByUrl('/profile');
      console.log('yay');
    }, (err) => {
      console.error(err);
    });
  }
}
