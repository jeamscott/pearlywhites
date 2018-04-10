import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from './authentication.service';



export interface Employee {
  _id: string;
  user_name: string;
  employee_status: boolean;
  }

@Injectable()
export class EmployeeService {
  private token: string;
  public result: Employee;
  

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {}

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  private request(method: 'post'|'get'|'put', type: 'employee', request?): Observable<any> {
    let base;

    
    if (method === 'post') {
      request._id = this.auth.getUserDetails()._id;
    base = this.http.post(`/api/${type}`, request, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    } 
      else if (method === 'put'){ //experimental
      request._id = this.auth.getUserDetails()._id;
      base = this.http.put(`/api/${type}`, request, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
      else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    return base;
  }

  public employed(): Observable<Employee> {
    return this.request('get', 'employee');
  }
 
  public hire(employee): Observable<Employee> { 
    return this.request('put', 'employee', employee);
  }
  
  //employee: Employee

  //public isEmployee() {
    
  //    this.employed()
  //      .subscribe(data => this.employee = {
  //        _id: data['_id'],
  //        user_name: data['user_name'],
  //        employee_status: data['employee_status']
  //        }
  //      )
   
        
  //}

  //public employee_only() {
  //  const employed = this.isEmployee().subscribe(
  //    is_employee => is_employee
  //  )
    //console.log(employed)
    //if (employed) {
    //    employed.employee_status = true;        
    //  return true
    //} 
    //else {
    //  return false;
    //}
  //return employed

  //}
}
