import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Finance } from './accounting';
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

  constructor(private _financeService: FinanceService, private _formBuilder: FormBuilder) {
    this.formGroup = _formBuilder.group({
      'id': '',
      'name': '',
      'due': '',
      'done': '',
      'notes': ''});
  }

  ngOnInit() {
    this.getFinance();
  }

  getFinance() {
    this.finances = this._financeService.getFinanceFromData();
  }

  saveFinance(finance: Finance) {
    if (finance.id) {
      this._financeService.updateFinance(finance);
    } else {
      this._financeService.addFinance(finance);
    }
    this.saveMode = SaveMode.None;
  }

  removeFinance(finance: Finance) {
    this._financeService.deleteFinance(finance);
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
    const editedFinance = Object.assign({}, finance, { due: this.applyLocale(finance.due) });
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
}
