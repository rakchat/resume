import "./App.css";
import Router from "./router/Router";
import Theme from "./theme/Theme";
import { ThemeProvider } from "styled-components";

import "@fontsource/questrial";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
