import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from './authentication.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';



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
    return this.request('get', 'employee')
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
 
  public hire(employee): Observable<Employee> { 
    return this.request('put', 'employee', employee);
    
    
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
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
