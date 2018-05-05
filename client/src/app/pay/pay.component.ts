import { Component } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { PatientProfileService, PatientPayload } from '../patient.profile.service';
import { BillingService} from '../billing.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Payment } from '../../../node_modules/payment/dist/payment.js'

@Component({
  templateUrl: './pay.component.html'
})
export class PayComponent {
  details: UserDetails;
  bill;
  thing;


  constructor(private auth: AuthenticationService, private patientService: PatientProfileService, private billingService: BillingService, private router: Router) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.log(err);
    });

    this.billingService.get_bill().subscribe(bills => {
      this.bill = bills;
    }, (err) => {
      console.error(err);
    });
  }

  make_payment() {
    this.billingService.pay_bill(this.bill).subscribe(() => {
      this.router.navigateByUrl('/thank.you');
      }, (err) => {
      console.error(err);
    });
  };

  
}