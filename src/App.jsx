import { Suspense, lazy } from "react";
import "./App.css";

import HomePage from "./pages/home";
import { Router } from "./components/Router";
import { Page404 } from "./pages/404";
import SearchPage from "./pages/Search";
import { Route } from "./components/Route";

const AboutPage = lazy(() => import("./pages/About"));

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router defaultComponent={Page404}>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/search/:query" component={SearchPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
