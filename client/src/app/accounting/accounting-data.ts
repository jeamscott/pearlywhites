import {Finance} from './accounting';

export const Finance_ITEMS: Finance[] = [
 {
   id_number: 1, 	accountNumber: 12345, 	name: 'Interstellar Co.', 	type: 'Payable', 	balance: 0,
   lineItems: [
  { accountType: 'Payable', 	vendor: 'McKenzie LLC', 	bills: 'Electrical Service', 	cost: -751 },
  { accountType: 'Payable', 	vendor: 'Bradtke Group', 	bills: 'Electrical Service', 	cost: -94 },
  { accountType: 'Payable', 	vendor: 'Jones Bauch and Purdy', 	bills: 'Trash', 	cost: -457 },
  { accountType: 'Payable', 	vendor: 'Jaskolski LLC', 	bills: 'Invoices', 	cost: -181 }
],
},
  {
     id_number: 2, 	accountNumber: 12346, 	name: 'Corkery Inc', 	type: 'Receivable', 	balance: 0,
     lineItems: [
  { accountType: 'Receivable', 	vendor: 'Bins-Mayert', 	bills: 'Invoices', 	cost: 242 }, 		
  { accountType: 'Receivable', 	vendor: 'Botsford LLC', 	bills: 'Electrical Service', 	cost: 542 }, 		
  { accountType: 'Receivable', 	vendor: 'Homenick Group', 	bills: 'Invoices', 	cost: 971 }, 		
  { accountType: 'Receivable', 	vendor: 'Emard-Harber', 	bills: 'Water Service', 	cost: 506 }
],
},
  { id_number: 3, 	accountNumber: 12347, 	name: 'Hirthe and Sons', 	type: 'Payable', 	balance: 0,
  lineItems: [
  { accountType: 'Payable', 	vendor: 'Ryan, Marvin and Wehner', 	bills: 'Gas Service', 	cost: -306 }, 		
  { accountType: 'Payable', 	vendor: 'Kuhn, Friesen and Auer', 	bills: 'Water Service', 	cost: -288 }, 		
  { accountType: 'Payable', 	vendor: 'MacGyver LLC', 	bills: 'Water Service', 	cost: -26 }, 		
  { accountType: 'Payable', 	vendor: 'Spinka Group', 	bills: 'Gas Service', 	cost: -40 }
],
},
  { id_number: 4, 	accountNumber: 12348, 	name: 'Treutel-Mitchell', 	type: 'Receivable', 	balance: 0,
  lineItems: [
  { accountType: 'Receivable', 	vendor: 'Stanton-Lockman', 	bills: 'Payroll', 	cost: 755 }, 		
  { accountType: 'Receivable', 	vendor: 'Runte, Yundt and Gusikowski', 	bills: 'Water Service', 	cost: 415 }, 		
  { accountType: 'Receivable', 	vendor: 'Koepp-Jakubowski', 	bills: 'Gas Service', 	cost: 553 }, 		
  { accountType: 'Receivable', 	vendor: 'Orn, Gorczany and Walsh', 	bills: 'Gas Service', 	cost: 499 }
],
  },
  { id_number: 5, 	accountNumber: 12349, 	name: 'Crooks, Borer and Marquardt', 	type: 'Payable', 	balance: 0,
  lineItems: [
  { accountType: 'Payable', 	vendor: 'Little and Sons', 	bills: 'Invoices', 	cost: -37 }, 		
  { accountType: 'Payable', 	vendor: 'Schinner, Dach and Howe', 	bills: 'Gas Service', 	cost: -412 }, 		
  { accountType: 'Payable', 	vendor: 'Hane-Mayert', 	bills: 'Trash', 	cost: -644 }, 		
  { accountType: 'Payable', 	vendor: 'Schaden-Heidenreich', 	bills: 'Electrical Service', 	cost: -536 }
],
  },
  { id_number: 6, 	accountNumber: 12350, 	name: 'Brown-Lesch', 	type: 'Receivable', 	balance: 0,
  lineItems: [
  { accountType: 'Receivable', 	vendor: 'Johnston OKon and Grady', 	bills: 'Water Service', 	cost: 477 }, 		
  { accountType: 'Receivable', 	vendor: 'Blanda, Jacobi and Kerluke', 	bills: 'Water Service', 	cost: 334 }, 		
  { accountType: 'Receivable', 	vendor: 'Grant Inc', 	bills: 'Water Service', 	cost: 995 }, 		
  { accountType: 'Receivable', 	vendor: 'Lemke Inc', 	bills: 'Water Service', 	cost: 833 }
],
  },
  { id_number: 7, 	accountNumber: 12351, 	name: 'Aufderhar, Runolfsdottir and Connelly', 	type: 'Payable', 	balance: 0,
  lineItems: [
  { accountType: 'Payable', 	vendor: 'Feil, Braun and Bartoletti', 	bills: 'Payroll', 	cost: -428 }, 		
  { accountType: 'Payable', 	vendor: 'Hane, Stiedemann and Emard', 	bills: 'Water Service', 	cost: -763 }, 		
  { accountType: 'Payable', 	vendor: 'Marquardt-Mertz', 	bills: 'Water Service', 	cost: -513 }, 		
  { accountType: 'Payable', 	vendor: 'Kunde, Jaskolski and Mante', 	bills: 'Water Service', 	cost: -541 }
],
  },		
  { id_number: 8, 	accountNumber: 12352, 	name: 'Ondricka and Sons', 	type: 'Receivable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Receivable', 	vendor: 'Schuppe, West and Mohr', 	bills: 'Electrical Service', 	cost: 549 }, 		
  { accountType: 'Receivable', 	vendor: 'Fahey LLC', 	bills: 'Trash', 	cost: 857 }, 		
  { accountType: 'Receivable', 	vendor: 'Gerhold, Wyman and Pouros', 	bills: 'Water Service', 	cost: 225 }, 		
  { accountType: 'Receivable', 	vendor: 'Marvin and Sons', 	bills: 'Water Service', 	cost: 441 }
],
  },		
  { id_number: 9, 	accountNumber: 12353, 	name: 'Dietrich Group', 	type: 'Payable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Payable', 	vendor: 'Waelchi Inc', 	bills: 'Gas Service', 	cost: -821 }, 		
  { accountType: 'Payable', 	vendor: 'Borer-Koch', 	bills: 'Payroll', 	cost: -983 }, 		
  { accountType: 'Payable', 	vendor: 'Davis-Ferry', 	bills: 'Water Service', 	cost: -232 }, 		
  { accountType: 'Payable', 	vendor: 'Osinski Group', 	bills: 'Gas Service', 	cost: -430 }
],
  },		
  { id_number: 10, 	accountNumber: 12354, 	name: 'Hahn, Hagenes and Bergstrom', 	type: 'Receivable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Receivable', 	vendor: 'Bruen Group', 	bills: 'Gas Service', 	cost: 522 }, 		
  { accountType: 'Receivable', 	vendor: 'Robel Group', 	bills: 'Trash', 	cost: 678 }, 		
  { accountType: 'Receivable', 	vendor: 'Steuber LLC', 	bills: 'Electrical Service', 	cost: 840 }, 		
  { accountType: 'Receivable', 	vendor: 'Schimmel-Rosenbaum', 	bills: 'Trash', 	cost: 47 }
],
  },		
  { id_number: 11, 	accountNumber: 12355, 	name: 'Jast, Rodriguez and Hegmann', 	type: 'Payable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Payable', 	vendor: 'Kozey-Hoppe', 	bills: 'Electrical Service', 	cost: -518 }, 		
  { accountType: 'Payable', 	vendor: 'Hand LLC', 	bills: 'Gas Service', 	cost: -751 }, 		
  { accountType: 'Payable', 	vendor: 'Stehr LLC', 	bills: 'Trash', 	cost: -701 }, 		
  { accountType: 'Payable', 	vendor: 'Wisozk, Frami and Hilll', 	bills: 'Electrical Service', 	cost: -550 }
],
  },		
  { id_number: 12, 	accountNumber: 12356, 	name: 'Rodriguez-Schmidt', 	type: 'Receivable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Receivable', 	vendor: 'Feil-OConnell', 	bills: 'Water Service', 	cost: 245 }, 		
  { accountType: 'Receivable', 	vendor: 'OKon-Weimann', 	bills: 'Electrical Service', 	cost: 327 }, 		
  { accountType: 'Receivable', 	vendor: 'Pagac Inc', 	bills: 'Payroll', 	cost: 190 }, 		
  { accountType: 'Receivable', 	vendor: 'Shields, Dietrich and Baumbach', 	bills: 'Electrical Service', 	cost: 171 }
],
  },		
  { id_number: 13, 	accountNumber: 12358, 	name: 'Murphy, Hermiston and Collier', 	type: 'Payable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Payable', 	vendor: 'Jacobi LLC', 	bills: 'Trash', 	cost: -959 }, 		
  { accountType: 'Payable', 	vendor: 'Green-Schoen', 	bills: 'Invoices', 	cost: -174 }, 		
  { accountType: 'Payable', 	vendor: 'Flatley, Harvey and Dare', 	bills: 'Invoices', 	cost: -425 }, 		
  { accountType: 'Payable', 	vendor: 'Smitham LLC', 	bills: 'Water Service', 	cost: -847 }
],
  },		
  { id_number: 14, 	accountNumber: 12360, 	name: 'Runolfsdottir LLC', 	type: 'Receivable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Receivable', 	vendor: 'Steuber-Armstrong', 	bills: 'Electrical Service', 	cost: 478 }, 		
  { accountType: 'Receivable', 	vendor: 'Crona-Kuhic', 	bills: 'Trash', 	cost: 716 }, 		
  { accountType: 'Receivable', 	vendor: 'Ullrich-Sauer', 	bills: 'Trash', 	cost: 500 }, 		
  { accountType: 'Receivable', 	vendor: 'Little, Collier and Labadie', 	bills: 'Trash', 	cost: 351 }
],
  },		
  { id_number: 15, 	accountNumber: 12362, 	name: 'Altenwerth LLC', 	type: 'Payable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Payable', 	vendor: 'Adams, Halvorson and Morar', 	bills: 'Gas Service', 	cost: -181 }, 		
  { accountType: 'Payable', 	vendor: 'Predovic, Gerhold and Schmitt', 	bills: 'Water Service', 	cost: -403 }, 		
  { accountType: 'Payable', 	vendor: 'Schumm, Lubowitz and Kling', 	bills: 'Electrical Service', 	cost: -112 }, 		
  { accountType: 'Payable', 	vendor: 'Wilderman-Jast', 	bills: 'Trash', 	cost: -991 }
],
  },		
  { id_number: 16, 	accountNumber: 12363, 	name: 'Gerlach, Rempel and Abbott', 	type: 'Receivable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Receivable', 	vendor: 'Rodriguez-Lubowitz', 	bills: 'Invoices', 	cost: 724 }, 		
  { accountType: 'Receivable', 	vendor: 'Moen, Harber and Howe', 	bills: 'Trash', 	cost: 530 }, 		
  { accountType: 'Receivable', 	vendor: 'Schaefer, Russel and Kozey', 	bills: 'Payroll', 	cost: 101 }, 		
  { accountType: 'Receivable', 	vendor: 'Prohaska LLC', 	bills: 'Gas Service', 	cost: 472 }
],
  },		
  { id_number: 17, 	accountNumber: 12365, 	name: 'Lang Group', 	type: 'Payable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Payable', 	vendor: 'Labadie-McClure', 	bills: 'Trash', 	cost: -978 }, 		
  { accountType: 'Payable', 	vendor: 'Heathcote-OConner', 	bills: 'Electrical Service', 	cost: -965 }, 		
  { accountType: 'Payable', 	vendor: 'Leuschke-Ritchie', 	bills: 'Electrical Service', 	cost: -45 }, 		
  { accountType: 'Payable', 	vendor: 'Goodwin-Kiehn', 	bills: 'Invoices', 	cost: -112 }
],
  },		
  { id_number: 18, 	accountNumber: 12366, 	name: 'Green and Sons', 	type: 'Receivable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Receivable', 	vendor: 'Kohler LLC', 	bills: 'Gas Service', 	cost: 760 }, 		
  { accountType: 'Receivable', 	vendor: 'Rempel, Schuppe and Jast', 	bills: 'Payroll', 	cost: 754 }, 		
  { accountType: 'Receivable', 	vendor: 'Buckridge-Kling', 	bills: 'Gas Service', 	cost: 241 }, 		
  { accountType: 'Receivable', 	vendor: 'Roob, Gerlach and Borer', 	bills: 'Electrical Service', 	cost: 230 }
],
  },		
  { id_number: 19, 	accountNumber: 12367, 	name: 'Baumbach Inc', 	type: 'Payable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Payable', 	vendor: 'Simonis-Waelchi', 	bills: 'Water Service', 	cost: -311 }, 		
  { accountType: 'Payable', 	vendor: 'Glover Group', 	bills: 'Electrical Service', 	cost: -269 }, 		
  { accountType: 'Payable', 	vendor: 'Gislason Group', 	bills: 'Water Service', 	cost: -370 }, 		
  { accountType: 'Payable', 	vendor: 'Bradtke Inc', 	bills: 'Trash', 	cost: -130 }
],
  },		
  { id_number: 20, 	accountNumber: 12368, 	name: 'Gaylord, Crist and Ward', 	type: 'Receivable', 	balance: 0, 	lineItems: [ 
  { accountType: 'Receivable', 	vendor: 'Rowe Inc', 	bills: 'Invoices', 	cost: 484 }, 		
  { accountType: 'Receivable', 	vendor: 'Kemmer and Sons', 	bills: 'Payroll', 	cost: 476 }, 		
  { accountType: 'Receivable', 	vendor: 'Rolfson, Tromp and Boehm', 	bills: 'Water Service', 	cost: 125 }, 		
  { accountType: 'Receivable', 	vendor: 'Price, Cronin and Mueller', 	bills: 'Gas Service', 	cost: 973 }]		
 }
];
