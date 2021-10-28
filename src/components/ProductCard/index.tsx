import { ProductCardProps } from "./types";
import { useCart } from "../../providers/Cart";
import currencyFormatter from "../../utils/currencyFormatter";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TypographyPrice,
  TypographyTitle,
} from "./style";
import { CardActions, Divider, Typography } from "@mui/material";

const ProductCard = ({
  displaytype,
  product,
}: ProductCardProps): JSX.Element => {
  const { addProduct, deleteProduct } = useCart();

  const handleAddOrDeleteButton = (): void => {
    displaytype === "product" ? addProduct(product) : deleteProduct(product.id);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia component="img" image={product.image} />

        <Divider />

        <CardContent>
          <TypographyTitle gutterBottom variant="h6" component="div">
            {product.title}
          </TypographyTitle>

          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>

        <TypographyPrice component="p" displaytype={displaytype}>
          {currencyFormatter(product.price)}
        </TypographyPrice>

        <Divider />

        <CardActions>
          <Button
            variant="contained"
            size="large"
            fullWidth
            displaytype={displaytype}
            onClick={handleAddOrDeleteButton}
          >
            {displaytype === "product"
              ? "Adiconar ao carrinho"
              : "Remover do carrinho"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
