import { Injectable } from '@angular/core';

import { Finance } from './generaljournal';
import { Finance_ITEMS } from './generaljournal-data';
import { Router } from '@angular/router';

@Injectable()
export class FinanceService {
  pItems: Finance[] = Finance_ITEMS;

  constructor() { }

  getFinanceFromData(): Finance[] {
    return this.pItems;
  }
  addFinance(finance: Finance) {
    this.pItems.push(finance);
  }
  updateFinance(finance: Finance) {
    const index = this.pItems.map(x => x.id).indexOf(finance.id);
    this.pItems[index] = finance;
  }
  deleteFinance(finance: Finance) {
    this.pItems.splice(this.pItems.indexOf(finance), 1);
  }
}
