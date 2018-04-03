export interface Finance {
    id_number: number;
    accountNumber: number;
    name: string;
    type: string;
    balance?: number;
    lineItems: LineItem[];
    showLineItems?: boolean;
  }

  export interface LineItem {
    id_number: number;
    type: string;
    name: string;
    cost: number;
    edit?: boolean;
  }
