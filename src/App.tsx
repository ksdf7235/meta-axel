import { ThemeProvider } from "styled-components";
import { DarkThemeState } from "./atoms";
import { darkTheme, lightTheme, GlobalStyles } from "./styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./font/font.css";

import routes from "./routes";
import Layout from "./component/Common/Layout";
import Home from "./screen/Home";

function App() {
  const isDark = useRecoilValue(DarkThemeState);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
