import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { SupportService } from '../support.service';
import { FilterSortService } from '../filtersort';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './support.component.html'
})
export class SupportComponent {
  details: UserDetails;
  patientsSub: Subscription;
  supportProfile;
  filteredProfile;
  query: '';

  constructor(private auth: AuthenticationService, public supportService: SupportService, public fs: FilterSortService) {}

  ngOnInit() {
    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });

    this._getPatientProfiles()
  }

  private _getPatientProfiles() {
    this.patientsSub = this.supportService
                          .profile()
                          .subscribe(
                            res => {
                              this.supportProfile = res;
                              this.filteredProfile = res;
                            },
                            err => {
                              console.error(err);

                            }
                          )
  }

  searchPatients() {
    this.filteredProfile = this.fs.search(this.supportProfile, this.query, '_id');
  }

  resetQuery() {
    this.query = '';
    this.filteredProfile = this.supportProfile;
  }
}
