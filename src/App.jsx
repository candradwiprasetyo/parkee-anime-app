import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import AppRoutes from "./router/AppRoutes";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
