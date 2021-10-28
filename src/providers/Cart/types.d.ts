import { Product } from "../../globalTypes";

export interface CartProviderData {
  cart: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (productId: number) => void;
}
