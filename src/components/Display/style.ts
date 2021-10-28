import { styled } from "@mui/material/styles";
import { TypographyCustomProps } from "./types";
import {
  Box as MuiBox,
  BoxProps,
  Container as MuiContainer,
  ContainerProps,
  Typography as MuiTypography,
} from "@mui/material";

export const Container = styled(MuiContainer)<ContainerProps>(({ theme }) => ({
  padding: theme.spacing(1),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(2),
  },
}));

export const Typography = styled(MuiTypography)<TypographyCustomProps>(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.secondary,
  })
);

export const Box = styled(MuiBox)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  margin: `${theme.spacing(1)} 0`,
  padding: `${theme.spacing(2)} ${theme.spacing(1)}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.colors.frenchGrey,
  boxShadow: theme.shadows[8],

  [theme.breakpoints.up("md")]: {
    margin: `${theme.spacing(2)} 0`,
    padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  },
}));
