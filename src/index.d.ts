import { Tuple, DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors =
  | "brand-yellow"
  | "brand-gray"
  | "brand-green"
  | "grand-orange"
  | "brand-dark"
  | "brand-blue"
  | "brand-light"
  | "brand-red"
  | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
