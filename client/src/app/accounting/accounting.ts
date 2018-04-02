export interface Finance {
    id: number;
    accountNumber: number;
    name: string;
    type: string;
    balance?: number;
    lineItems: LineItem[];
    showLineItems?: boolean;
  }

  export interface LineItem {
    id: number;
    type: string;
    name: string;
    cost: number;
    edit?: boolean;
  }
