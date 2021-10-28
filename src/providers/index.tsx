import { NodeProps } from "../globalTypes";
import { ProductsProvider } from "./Products";
import { CartProvider } from "./Cart";

const Providers = ({ children }: NodeProps): JSX.Element => {
  return (
    <ProductsProvider>
      <CartProvider> {children}</CartProvider>
    </ProductsProvider>
  );
};

export default Providers;
