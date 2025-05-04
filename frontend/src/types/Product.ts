export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discountPrice?: number;
  type?: string;
  brand?: string;
  porte?: string;
  idade?: string;
  sabor?: string;
  description?: string[];
  rating?: number;
  reviews?: number;
  [key: string]: any; // Permite adicionar outras propriedades dinâmicas
  }
