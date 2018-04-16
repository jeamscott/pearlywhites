import { Component } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { PatientProfileService, PatientPayload } from '../patient.profile.service';
import { BillingService} from '../billing.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './pay.component.html'
})
export class PayComponent {
  details: UserDetails;
  bill;
  payment;


  constructor(private auth: AuthenticationService, private patientService: PatientProfileService, private billingService: BillingService, private router: Router) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.log(err);
    });

    this.bill.get_bill().subscribe(bill => {
      this.bill = bill;
    }, (err) => {
      console.error(err);
    });
  }

  make_payment() {
    this.billingService.pay_bill(this.payment).subscribe(() => {
      this.router.navigateByUrl('/profile');
      console.log('yay');
    }, (err) => {
      console.error(err);
    });
  }
}