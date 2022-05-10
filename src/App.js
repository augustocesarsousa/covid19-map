import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import React from "react";
import GlobalStyle from "./commons/styles/global-style";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <div>test</div>
    </StylesProvider>
  );
}

export default App;
