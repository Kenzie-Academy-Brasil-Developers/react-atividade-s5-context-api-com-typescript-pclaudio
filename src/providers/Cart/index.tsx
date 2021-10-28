import { createContext, useContext, useState } from "react";
import { NodeProps, Product } from "../../globalTypes";
import { CartProviderData } from "./types";

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: NodeProps): JSX.Element => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product): void => {
    const isAdded: boolean = cart.some(
      (currentProduct: Product): boolean => currentProduct.id === product.id
    );

    !isAdded && setCart([...cart, product]);
  };

  const deleteProduct = (productId: number): void => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
