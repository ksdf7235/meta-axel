import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
  //essentail
  headerColor: "#141323",
  bgColor: "#FAFAFA",
  fontColor: "rgb(38, 38, 38)",
  bgDarkColor: "rgba(0, 0, 0, 0.3)",
  btnColor: "#00fefe",
  // none essentail
  accent: "red",
  borderColor: "rgb(219, 219, 219)",
  CardColor: "#12123B",
  //width
  maxWidth: "1200px",
  maxContentWidth: "600px",
};

export const darkTheme: DefaultTheme = {
  // none essential
  accent: "red",
  borderColor: "rgb(219, 219, 219)",
  CardColor: "#12123B",
  //essential
  fontColor: "white",
  bgColor: "#000000",
  bgDarkColor: "rgba(0, 0, 0, 0.3)",
  headerColor: "#000000",
  btnColor: "#00fefe",
  //width
  maxWidth: "1200px",
  maxContentWidth: "600px",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
        background-color:${(props) => props.theme.bgColor};
        font-size:18px;
        font-family:'Gotham', sans-serif;
        color:${(props) => props.theme.fontColor};
    }
    a {
      text-decoration: none;
      color:inherit;
    }
    div
      {
        -ms-user-select: none; 
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }
`;
