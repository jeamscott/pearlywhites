import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { SupportService } from '../support.service';
import { FilterSortService } from '../filtersort';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';



@Component({
  templateUrl: './patient.component.html'
})
export class PatientComponent implements OnInit, OnDestroy {
  details: UserDetails;
  patientsSub: Subscription;
  routeSub: Subscription;
  profilerouteSub: Subscription;
  tabSub: Subscription;
  supportProfile;
  filteredProfile;
  tab: string;
  query: '';
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

    this.routeSub = this.route.params
    .subscribe(params => {
      this.id = params['id'];
      this._getPatient();
    });

    this.profilerouteSub = this.route.params
    .subscribe(params => {
      this.id = params['id'];
      this._getPatientProfile();
    });

  // Subscribe to query params to watch for tab changes
  this.tabSub = this.route.queryParams
    .subscribe(queryParams => {
      this.tab = queryParams['tab'] || 'details';
    });
  }

  private _getPatient() {
    this.patientsSub = this.supportService
                          .getPatientById(this.id)
                          .subscribe(
                            res => {
                              this.patient = res;
                            },
                            err => {
                              console.error(err);

                            }
                          )
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
    this.tabSub.unsubscribe();
    this.patientsSub.unsubscribe();
  }
}
