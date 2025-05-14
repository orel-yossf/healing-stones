export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    productCode?: string;
    inStock: boolean;
    longDescription?: string; 
  }