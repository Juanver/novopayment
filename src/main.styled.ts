import { createGlobalStyle } from "styled-components";
import { Spacing } from "./assets/spacing/Spacing";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: ${Spacing.Spacing2};
    line-height: ${Spacing.Spacing3};
    margin: 0;
  }
`;
