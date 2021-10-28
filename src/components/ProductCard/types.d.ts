import { Product } from "../../globalTypes";
import { ButtonProps, CardMediaProps, TypographyProps } from "@mui/material";

type DisplayType = "product" | "cart";

export interface ProductCardProps {
  displaytype: DisplayType;
  product: Product;
}

export interface CardMediaCustomProps extends CardMediaProps {
  component: string;
}

export interface TypographyCustomProps extends TypographyProps {
  component?: string;
  displaytype?: DisplayType;
}

export interface ButtonCustomProps extends ButtonProps {
  displaytype: DisplayType;
}
