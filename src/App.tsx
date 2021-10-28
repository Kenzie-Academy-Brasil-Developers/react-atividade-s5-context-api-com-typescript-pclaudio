import "@fontsource/roboto";
import { useProducts } from "./providers/Products";
import { useCart } from "./providers/Cart";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Display from "./components/Display";

const App = (): JSX.Element => {
  const { products } = useProducts();

  const { cart } = useCart();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Display displaytype="product" products={products} />

      <Display displaytype="cart" products={cart} />
    </ThemeProvider>
  );
};

export default App;
