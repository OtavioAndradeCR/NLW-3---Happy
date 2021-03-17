import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";
import GlobalStyles from "./styles/global";
import Routes from "./routes";

import ThemeSwitcher from "./components/ThemeSwitcher";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = (): void => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ThemeSwitcher toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
