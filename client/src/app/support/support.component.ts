import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { SupportService } from '../support.service';

@Component({
  templateUrl: './support.component.html'
})
export class SupportComponent {
  details: UserDetails;
  supportProfile;

  constructor(private auth: AuthenticationService, private supportService: SupportService) {}

  ngOnInit() {
    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });

    this.supportService.profile().subscribe(profile => {
      this.supportProfile = profile;
    }, (err) => {
      console.error(err);
    });
  }
}
