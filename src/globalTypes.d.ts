import { ReactNode } from "react";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      carmineRed: string;
      frenchGrey: string;
      indanthroneBlue: string;
    };
  }

  interface ThemeOptions {
    colors?: {
      carmineRed?: string;
      frenchGrey?: string;
      indanthroneBlue?: string;
    };
  }
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface NodeProps {
  children: ReactNode;
}
