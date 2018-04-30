import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService, UserDetails } from '../../authentication.service';
import { SupportService } from '../../support.service';
import { FilterSortService } from '../../filtersort';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PatientComponent } from '../patient.component'

@Component({
    selector: 'app-patient-profile',
    templateUrl: './patient.profile.component.html',
    })
    
  export class PatientProfileComponent implements OnInit, OnDestroy {
    details: UserDetails;
    patientsSub: Subscription;
    routeSub: Subscription;
    profilerouteSub: Subscription;
    id: string;
    patient;
    patientProfile;
  
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
        this._getPatientProfile();
      });
  

    }
  
  
    private _getPatientProfile() {
      this.patientsSub = this.supportService
                            .getPatientProfile(this.id)
                            .subscribe(
                              res => {
                                this.patientProfile = res;
                              },
                              err => {
                                console.error(err);
  
                              }
                            )
    }
  
    private _setPatientProfile() {
      this.patientsSub = this.supportService
                            .updatePatientProfile(this.id, this.patientProfile)
                            .subscribe(() => {
                              },
                              err => {
                                console.error(err);
  
                              }
                            )
    }
  
    
    ngOnDestroy() {
      this.routeSub.unsubscribe();
      this.patientsSub.unsubscribe();
    }
  }
  