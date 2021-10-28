import { TypographyProps } from "@mui/material";
import { Product } from "../../globalTypes";

export interface DisplayProps {
  displaytype: "product" | "cart";
  products: Product[];
}

export type TypographyCustomProps = TypographyProps & {
  component?: string;
};
