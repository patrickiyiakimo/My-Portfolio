import Hero from "./pages/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Background from "./pages/Background";
import OtherSkills from "./pages/OtherSkills";

function App() {
  return (
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
          <Route path="/otherskills">
            <OtherSkills />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
