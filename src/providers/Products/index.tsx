import { createContext, useContext, useState } from "react";
import { NodeProps, Product } from "../../globalTypes";
import { ProductsProviderData } from "./types";
import productsDB from "../../services/db";

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: NodeProps) => {
  const [products] = useState<Product[]>(productsDB);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
