import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { TokenPayload } from './authentication.service';

export interface PatientPayload { //experimental
  first_name: string;
}

@Injectable()
export class PatientProfileService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  private getToken(): string {
    if (!this.token) {
      this.token = sessionStorage.getItem('mean-token');
    }
    return this.token;
  }

  private request(method: 'post'|'get'|'put', type: 'patient/profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } 
      else if (method === 'put'){ //experimental
      base = this.http.put(`/api/${type}`, user);
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
  public update(user: TokenPayload): Observable<any> { 
    return this.request('put', 'patient/profile', user);
  }
  // */
}
