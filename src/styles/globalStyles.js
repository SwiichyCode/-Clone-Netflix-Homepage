import { createGlobalStyle } from "styled-components";

export const COLORS = {
  white: "#FFFFFF",
  black: "#000000",
  red: "#e50914",
  blue: "#0071EB",
  orange: "#ffa00a",
};

export const GlobalStyle = createGlobalStyle`
  h1 {
  font-size: 1.65rem;
  @media only screen and (min-width: 550px) and (max-width: 949px) {
  font-size: 2.725rem;
  }
  @media only screen and (min-width: 950px) and (max-width: 1449px) {
  font-size: 3.125rem;
  }
  @media only screen and (min-width: 1450px),
  only screen and (min-width: 950px) and (max-width: 1449px) {
  font-size: 3.5rem;
  }
  @media only screen and (min-width: 1500px) {
  font-size: 4rem;
  }
  }
  h2{
  font-size: 1.025rem;
  @media only screen and (min-width: 550px) and (max-width: 949px) {
  font-size: 1.625rem;
  line-height: 1.8rem;
  }
  @media only screen and (min-width: 1450px),
  only screen and (min-width: 950px) and (max-width: 1449px) {
  font-size: 1.625rem;
  line-height: 1.8rem;
  }
  }
  h3{
    
  }
`;
