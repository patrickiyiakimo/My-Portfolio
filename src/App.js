import Hero from "./pages/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Background from "./pages/Background";
import Contact from "./pages/Contact";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Patrick Iyiakimo</title>
        <meta
          name="Description"
          content="Get all the information you need to know about me"
        />
      </Helmet>
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
  );
}

export default App;
