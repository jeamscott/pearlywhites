import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService, UserDetails } from '../../authentication.service';
import { SupportService } from '../../support.service';
import { FilterSortService } from '../../filtersort';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PatientComponent } from '../patient.component'

@Component({
    selector: 'app-appointment',
    templateUrl: './patient.appointment.component.html',
    })
    
  export class PatientAppointmentComponent implements OnInit, OnDestroy {
    details: UserDetails;
    appointmentsSub: Subscription;
    routeSub: Subscription;
    profilerouteSub: Subscription;
    id: string;
    patient;
    patientAppointment;
  
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
        this._getPatientAppointment();
      });
  

    }
  
  
    private _getPatientAppointment() {
      this.appointmentsSub = this.supportService
                            .getPatientAppointment(this.id)
                            .subscribe(
                              res => {
                                this.patientAppointment = res;
                              },
                              err => {
                                console.error(err);
  
                              }
                            )
    }
  
    private _setPatientAppointment() {
      this.appointmentsSub = this.supportService
                            .updatePatientAppointment(this.id, this.patientAppointment)
                            .subscribe(() => {
                              },
                              err => {
                                console.error(err);
  
                              }
                            )
                            window.alert("Updated");
    }
  
    
    ngOnDestroy() {
      this.routeSub.unsubscribe();
      this.appointmentsSub.unsubscribe();
    }
  }
  