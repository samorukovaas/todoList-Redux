import React from "react";
import Counter from "./Containers/Counter/Counter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Components/Main/Main";

const App = () => (
  <Router>
    <ul>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/counter">
        <Counter />
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  </Router>
);

export default App;
