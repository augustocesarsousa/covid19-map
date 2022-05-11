import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import React from "react";
import "./App.css";
import GlobalStyle from "./commons/styles/global-style";
import Footer from "./containers/Footer";
import Main from "./containers/Main";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
      <Footer />
    </StylesProvider>
  );
}

export default App;
