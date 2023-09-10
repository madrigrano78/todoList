import { Header } from "./components/Header";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import light from "./themes/light";
import dark from "./themes/dark";
// import { ModalToDo } from "./components/Modal";
import { Body } from "./components/Body";

function App() {
  const [theme, setTheme] = useState(light);

  const onChangeTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header onChangeTheme={onChangeTheme} />
        <Body />
      </ThemeProvider>
    </>
  );
}

export default App;
