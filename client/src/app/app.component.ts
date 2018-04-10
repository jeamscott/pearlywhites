import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { PatientProfileService } from './patient.profile.service';
import { AppointmentService } from './appointment.service';
import { EmployeeService, Employee } from './employee.service';
import { HttpResponse, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employee: Employee
  error: HttpErrorResponse

  constructor(public auth: AuthenticationService, public patient: PatientProfileService, public appointment: AppointmentService, public employeeService: EmployeeService) {}

  ngOnInit() {

    this.employeeService.employed().subscribe(profile => {
      this.employee = profile;
    }, error => this.error = error
    );

  }

}
