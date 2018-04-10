import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { PatientProfileService } from './patient.profile.service';
import { AppointmentService } from './appointment.service';
import { EmployeeService, Employee } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employee: Employee
  
  constructor(public auth: AuthenticationService, public patient: PatientProfileService, public appointment: AppointmentService, public employeeService: EmployeeService) {}

  ngOnInit() {

    this.employeeService.employed().subscribe(profile => {
      this.employee = profile;
    }, (err) => {
      console.error(err);
    });

  }

}
