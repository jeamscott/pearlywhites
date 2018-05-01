import { Component } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { SuppliesService, SuppliesPayload } from '../supplies.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './supplies.component.html'
})
export class SuppliesComponent {
  details: UserDetails;
  suppliesProfile;
  changes: TokenPayload = { //experimental
    email: '',
    name: '',
    password: '',
  };

  constructor(private auth: AuthenticationService, private suppliesService: SuppliesService, private router: Router) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.log(err);
    });

    this.suppliesService.profile().subscribe(supplies => {
      this.suppliesProfile = supplies;
    }, (err) => {
      console.error(err);
    });
  }

  updateSupplies() {
    this.suppliesService.update(this.suppliesProfile).subscribe(() => {
      this.router.navigateByUrl('/supplies');
      console.log('yay');
    }, (err) => {
      console.error(err);
    });
  }



}
