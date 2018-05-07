import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService, UserDetails } from '../../authentication.service';
import { SupportService } from '../../support.service';
import { FilterSortService } from '../../filtersort';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PatientComponent } from '../patient.component'

@Component({
    selector: 'app-bill',
    templateUrl: './patient.bill.component.html',
    })
    
  export class PatientBillComponent implements OnInit, OnDestroy {
    details: UserDetails;
    billsSub: Subscription;
    routeSub: Subscription;
    profilerouteSub: Subscription;
    id: string;
    patient;
    patientBill;
  
    constructor(private auth: AuthenticationService, public supportService: SupportService, public fs: FilterSortService, private route: ActivatedRoute,) {}
  
    ngOnInit() {
      
      this.auth.profile().subscribe(user => {
        this.details = user;
      }, (err) => {
        console.error(err);
      });
  

  
      this.profilerouteSub = this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this._getPatientBill();
      });
  

    }
  
  
    public _getPatientBill() {
      this.billsSub = this.supportService
                            .getPatientBill(this.id)
                            .subscribe(
                              res => {
                                this.patientBill = res;
                              },
                              err => {
                                console.error(err);
  
                              }
                            )
    }
  
    public _setPatientBill() {
      this.billsSub = this.supportService
                            .updatePatientBill(this.id, this.patientBill)
                            .subscribe(() => {
                              },
                              err => {
                                console.error(err);
  
                              }
                            )
                            window.alert("Updated");
    }
  
    
    ngOnDestroy() {
      //this.routeSub.unsubscribe();
      //this.billsSub.unsubscribe();
    }
  }
  