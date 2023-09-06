import { Header } from "./components/Header";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import light from "./themes/light";
import dark from "./themes/dark";

function App() {
  const [theme, setTheme] = useState(light);

  const onChangeTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header onChangeTheme={onChangeTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
