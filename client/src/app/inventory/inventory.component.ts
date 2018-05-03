import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { InventoryService } from '../inventory.service';
import { FilterSortService } from '../filtersort';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './inventory.component.html'
})
export class InventoryComponent {
  details: UserDetails;
  inventorySub: Subscription;
  inventory;
  filteredinventory;
  query: '';

  constructor(private auth: AuthenticationService, public inventoryService: InventoryService, public fs: FilterSortService) {}

  ngOnInit() {
    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });

    this._getInventory()
  }

  private _getInventory() {
    this.inventorySub = this.inventoryService
                          .profile()
                          .subscribe(
                            res => {
                              this.inventory = res;
                              this.filteredinventory = res;
                            },
                            err => {
                              console.error(err);

                            }
                          )
  }

  searchInventory() {
    this.filteredinventory = this.fs.search(this.inventory, this.query, '_id');
  }

  resetQuery() {
    this.query = '';
    this.filteredinventory = this.inventory;
  }
}

