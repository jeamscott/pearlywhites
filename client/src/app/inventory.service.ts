import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from './authentication.service';



@Injectable()
export class InventoryService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {}

  private getToken(): string {
    return this.auth.getToken();
  }

  tabIs(currentTab: string, tab: string): boolean {
    // Check if current tab is tab name
    return currentTab === tab;
  }

  getItemById(id: string,): Observable<any> {
    return this.http
      .get(`/api/inventory/${id}`, { headers: { Authorization: `Bearer ${this.getToken()}` }})
      
  }

  getItem(id: string): Observable<any> {
    return this.http
      .get(`/api/inventory/${id}`, { headers: { Authorization: `Bearer ${this.getToken()}` }})
  }

  updateItem(id: string, item): Observable<any> {
    return this.http
      .put(`/api/inventory/${id}`, item, { headers: { Authorization: `Bearer ${this.getToken()}` }})
  }



  private request(method: 'post'|'get'|'put', type: 'inventory', request?): Observable<any> {
    let base;

    
    if (method === 'post') {
      request._id = this.auth.getUserDetails()._id;
    base = this.http.post(`/api/${type}`, request, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    } 
      else if (method === 'put'){ 
      request._id = this.auth.getUserDetails()._id;
      base = this.http.put(`/api/${type}`, request, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
      else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    return base;
  }

  public profile(): Observable<any> {
    return this.request('get', 'inventory');
  }

  // /* Experimental
  public update(profile): Observable<any> { 
    return this.request('put', 'inventory', profile);
  }
  // */
}