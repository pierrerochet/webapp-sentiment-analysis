import "./App.css";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Main from "./components/Main";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
