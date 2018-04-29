import { Component } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { InventoryService, InventoryPayload } from '../inventory.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './inventory.component.html'
})
export class InventoryComponent {
  details: UserDetails;
  inventoryProfile;
  changes: TokenPayload = { //experimental
    email: '',
    name: '',
    password: '',
  };

  constructor(private auth: AuthenticationService, private inventoryService: InventoryService, private router: Router) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.log(err);
    });

    this.inventoryService.profile().subscribe(inventory => {
      this.inventoryProfile = inventory;
    }, (err) => {
      console.error(err);
    });
  }

  updateInventory() {
    this.inventoryService.update(this.inventoryProfile).subscribe(() => {
      this.router.navigateByUrl('/inventory');
      console.log('yay');
    }, (err) => {
      console.error(err);
    });
  }



}

