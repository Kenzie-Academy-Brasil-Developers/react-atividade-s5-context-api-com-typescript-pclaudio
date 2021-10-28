import { styled } from "@mui/material/styles";
import {
  ButtonCustomProps,
  CardMediaCustomProps,
  TypographyCustomProps,
} from "./types";
import {
  Button as MuiButton,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardContentProps,
  CardMedia as MuiCardMedia,
  CardProps,
  Grid as MuiGrid,
  GridProps,
  Typography,
} from "@mui/material";

export const Grid = styled(MuiGrid)<GridProps>(({ theme }) => ({
  display: "flex",
}));

export const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "350px",
  margin: "0 auto",
}));

export const CardMedia = styled(MuiCardMedia)<CardMediaCustomProps>(
  ({ theme }) => ({
    width: "auto",
    maxHeight: "300px",
    margin: "0 auto",
  })
);

export const CardContent = styled(MuiCardContent)<CardContentProps>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(1)}`,
  })
);

export const TypographyTitle = styled(Typography)<TypographyCustomProps>(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",
    lineHeight: "1.2",
  })
);

export const TypographyPrice = styled(Typography)<TypographyCustomProps>(
  ({ displaytype, theme }) => ({
    fontSize: "1.5rem",
    fontWeight: theme.typography.fontWeightBold,
    color:
      displaytype === "product"
        ? theme.colors.indanthroneBlue
        : theme.colors.carmineRed,
    textAlign: "center",
    marginBottom: theme.spacing(1),
  })
);

export const Button = styled(MuiButton)<ButtonCustomProps>(
  ({ displaytype, theme }) => ({
    backgroundColor:
      displaytype === "product"
        ? theme.colors.indanthroneBlue
        : theme.colors.carmineRed,

    "&:hover": {
      backgroundColor:
        displaytype === "product"
          ? theme.colors.indanthroneBlue
          : theme.colors.carmineRed,
      filter: "brightness(85%)",
    },
  })
);
