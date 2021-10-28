import { DisplayProps } from "./types";
import { Grid } from "@mui/material";
import { Box, Container, Typography } from "./style";
import ProductCard from "../ProductCard";

const Display = ({ displaytype, products }: DisplayProps): JSX.Element => {
  const displayTitle: string = displaytype === "product" ? "Produtos" : "Cart";
  const emptyDisplayMessage: string =
    displaytype === "product"
      ? "Não há produtos disponíveis!"
      : "Não há produtos no carrinho!";

  return (
    <Container maxWidth={false}>
      <Typography variant="h4" component="h2" align="center">
        {displayTitle}
      </Typography>

      <Box>
        <Grid container spacing={2}>
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                displaytype={displaytype}
                product={product}
              />
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h5" component="h3" align="center">
                {emptyDisplayMessage}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Display;
