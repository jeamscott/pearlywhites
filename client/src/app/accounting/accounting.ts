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
    accountType: string;
    vendor: string;
    bills: string;
    cost: number;
    edit?: boolean;
  }
