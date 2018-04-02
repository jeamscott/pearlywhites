import {Finance} from './accounting';

export const Finance_ITEMS: Finance[] = [
 {
   id: 1,
   accountNumber: 12345,
   name: 'Interstellar Co.',
   type: 'Utility',
   balance: 0,
   lineItems: [
     {
       id: 1,
       type: 'purchase',
       name: 'buy buy buy',
       cost: 1500
     },{
      id: 1,
      type: 'purchase',
      name: 'buy buy buy',
      cost: 1500
    },{
      id: 1,
      type: 'purchase',
      name: 'buy buy buy',
      cost: 1500
    }
   ]

 }, {
   id: 2,
   accountNumber: 12346,
   name: 'Happy Sunshine.',
   type: 'Corporation',
   balance: 52000,
   lineItems: [
    {
      id: 1,
      type: 'purchase',
      name: 'buy buy buy',
      cost: 1500
    },{
     id: 1,
     type: 'purchase',
     name: 'buy buy buy',
     cost: 1500
   },{
     id: 1,
     type: 'purchase',
     name: 'buy buy buy',
     cost: 1500
   }
  ]
 }, {
   id: 3,
   accountNumber: 12347,
   name: 'Deep Space Guys',
   type: 'Rockets',
   balance: 100000,
   lineItems: [
    {
      id: 1,
      type: 'purchase',
      name: 'buy buy buy',
      cost: 1500
    },{
     id: 1,
     type: 'purchase',
     name: 'buy buy buy',
     cost: 1500
   },{
     id: 1,
     type: 'purchase',
     name: 'buy buy buy',
     cost: 1500
   }
  ]
 }
];
