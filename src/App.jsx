import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { Homepage } from "./pages/Homepage/index";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Homepage />
    </Fragment>
  );
};
