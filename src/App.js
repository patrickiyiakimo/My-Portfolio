import Hero from "./pages/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Background from "./pages/Background";
import Contact from "./pages/Contact";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Router>
        <div className="App ">
          <Switch>
            <Route exact path="/">
              <Hero />
            </Route>
            <Route path="/background">
              <Background />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
