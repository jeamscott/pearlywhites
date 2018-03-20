import {Finance} from './generaljournal';

export const Finance_ITEMS: Finance[] = [
 {
   id: 1,
   name: 'Cash flow incomming',
   notes: 'debit',
   due: new Date(new Date().setDate(new Date().getDate() + 4)),
   done: false
 }, {
   id: 2,
   name: 'Cash flow outgoing',
   notes: 'credit',
   due: new Date(new Date().setDate(new Date().getDate() + 5)),
   done: false
 }, {
   id: 3,
   name: 'Balance',
   notes: 'debit / credit',
   due: new Date(new Date().setDate(new Date().getDate() - 1)),
   done: true
 }
];
