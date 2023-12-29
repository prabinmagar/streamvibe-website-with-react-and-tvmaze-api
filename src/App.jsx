import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global/GlobalStyles";
import { theme } from "./styles/theme/theme";
import { BaseLayout } from "./components";
import { Home, PageNotFound, ShowDetail, Shows } from "./screens";
import routeConstants from "./constant/routeConstants";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            <Route path={routeConstants.HOME} element={<BaseLayout />}>
              <Route index element={<Home />} />
              <Route path={routeConstants.SHOWS} element={<Shows />} />
              <Route
                path={routeConstants.SHOWS + `/:id`}
                element={<ShowDetail />}
              />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
