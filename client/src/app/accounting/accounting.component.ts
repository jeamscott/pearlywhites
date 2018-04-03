import { LogoutComponent } from './logout/logout.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { LoadComponentDirective } from './../common/load-component/load-component.directive';
import { OverlayComponent } from './../common/overlay/overlay.component';

import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Finance, LineItem } from './accounting';
import { FinanceService } from './accounting.service';

export enum SaveMode {
  None,
  New,
  Edit
}

@Component({
  selector: 'app-finance',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {
  formGroup: FormGroup;
  finances: Finance[];
  saveMode: SaveMode = SaveMode.None;
  headerText: string;

 // this is the viewchild for being able to access overlay and loadComponent
  @ViewChild('overlay', {read: OverlayComponent})
  public overlay: OverlayComponent;

  @ViewChild(LoadComponentDirective)
  public loadComponent: LoadComponentDirective;

  public currentOverlay: string;

  public overlayTitles: any = {
    'DeleteItem': 'Delete List Item',
    'Logout': 'Are you sure?'
  };

  private _overlayComponents: any = {
    'DeleteItem': DeleteItemComponent,
    'Logout': LogoutComponent
  };

  constructor(private _financeService: FinanceService, private _formBuilder: FormBuilder,
  private _componentFactoryResolver: ComponentFactoryResolver) {
    this.formGroup = _formBuilder.group({
      'id_number': '',
      'accountNumber': '',
      'name': '',
      'type': '',
      'balance': ''});
  }

  ngOnInit() {
    this.getFinance();
  }

  public launchOverlay(componentRef: string, data: any): void {
    this.currentOverlay = componentRef;
    this._loadComponent(this._overlayComponents[componentRef], data);
    this.overlay.state = 'active';
  }

  addListItem(finance: Finance) {
    let financeItem = {
      id_number : finance.lineItems.length + 1, name : null, type : null, cost : null
    };
    finance.lineItems.push(financeItem);
    finance.lineItems[finance.lineItems.length - 1].edit = true;
  }
  getFinance() {
    this.finances = this._financeService.getFinanceFromData();
    for (let finance of this.finances) {
      finance.balance = this._returnBalance(finance.lineItems);
    }
  }

  saveFinance(finance: Finance) {
    finance.lineItems = [];
    if (finance.id_number) {
      this._financeService.updateFinance(finance);
    } else {
      this._financeService.addFinance(finance);
    }
    this.saveMode = SaveMode.None;
  }

  removeLineItem(arr: LineItem[], index: number, finance: Finance) {
    this._financeService.deleteFinance(finance);
  }

  public toggleLineItems(finance: Finance): void {
    for (let f of this.finances) {
    f.showLineItems = f.id_number !== finance.id_number ? false : f.showLineItems;
    }
    finance.showLineItems = finance.hasOwnProperty('showLineItems') ? !finance.showLineItems : true;
  }

  cancelEditFinance() {
    this.formGroup.reset();
    this.saveMode = SaveMode.None;
  }

  showEditForm(finance: Finance) {
    if (!finance) {
      return;
    }
    this.saveMode = SaveMode.Edit;
    this.headerText = 'Edit Finance';
    const editedFinance = Object.assign({}, finance, {});
    this.formGroup.setValue(editedFinance);
  }

  showNewForm() {
    this.formGroup.reset();
    this.saveMode = SaveMode.New;
    this.headerText = 'New Workbook';
  }

  showForm() {
    return this.saveMode !== SaveMode.None;
  }

  applyLocale(due) {
    return new DatePipe(navigator.language).transform(due, 'y-MM-dd');
  }

  private _loadComponent(component: any, data: any): void {
    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);

    let viewContainerRef = this.loadComponent.viewContainerRef;

    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    
    (<any> componentRef.instance).data = data;

    (<any> componentRef.instance).overlay = this.overlay;
  }

  private _returnBalance(arr: LineItem[]): number {
    let num = 0;
    for (let a of arr) {
      a.edit = false;
      num = num + a.cost;
    }
    return num;
  }
}
