import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent {

  public data: any;

  public overlay: any;

  constructor() { }

  public confirm() {
    this.data.lineItems.splice(this.data.index, 1);
    this.close();
  }

  public close() {
     this.overlay.state = 'inactive';
  }
}
