import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from './authentication.service';

export interface PatientPayload { //experimental
  first_name: string;
}

@Injectable()
export class PatientProfileService {
  private token: string;

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {}

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  private request(method: 'post'|'get'|'put', type: 'patient/profile', request?): Observable<any> {
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

  public profile(): Observable<any> {
    return this.request('get', 'patient/profile');
  }

  // /* Experimental
  public update(profile): Observable<any> { 
    return this.request('put', 'patient/profile', profile);
  }
  // */
}
