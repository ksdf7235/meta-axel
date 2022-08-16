import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    bgDarkColor: string;
    fontColor: string;
    headerColor: string;
    btnColor: string;

    accent?: string;
    borderColor?: string;
    CardColor?: string;

    maxWidth: string;
    maxContentWidth: string;
  }
}
