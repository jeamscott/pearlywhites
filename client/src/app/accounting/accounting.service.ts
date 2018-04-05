import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Finance_ITEMS } from './accounting-data';
// import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Finance } from './accounting';

@Injectable()
export class FinanceService {
  pItems: Finance[] = Finance_ITEMS;

  constructor() { }

  getFinanceFromData(): Finance[] {
    return this.pItems;
  }
  addFinance(finance: Finance) {
    this.pItems.push(finance);
  }
  updateFinance(finance: Finance) {
    const index = this.pItems.map(x => x.id_number).indexOf(finance.id_number);
    this.pItems[index] = finance;
  }
  deleteFinance(finance: Finance) {
    this.pItems.splice(this.pItems.indexOf(finance), 1);
  }
}



@Injectable()
export class AccountingService {
  private token: string;

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {}

  private getToken(): string {
    if (!this.token) {
      this.token = sessionStorage.getItem('mean-token');
    }
    return this.token;
  }
/*
   private request(method: 'post'|'get'|'put', type: 'accounting', request?): Observable<any> {
    let base;


    if (method === 'post') {
      request._id = this.auth.getUserDetails()._id;
      base = this.http.post(`/api/${type}`, request, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
      else if (method === 'put') {
      request._id = this.auth.getUserDetails()._id;
      base = this.http.put(`/api/${type}`, request, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
      else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    return base;
  }

  public getAll(): Observable<Finance[]> {
    return this.request('get', 'accounting');
  }

    call for accounting
  public update(profile): Observable<any> {
    return this.request('put', 'accounting', profile);
  } */
}
