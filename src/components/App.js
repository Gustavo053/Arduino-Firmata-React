import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Installation from "./Installation";
import Connection from "./Connection";
import Examples from "./Examples";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/instalacao" exact component={Installation} />
          <Route path="/conexao" exact component={Connection} />
          <Route path="/exemplos" exact component={Examples} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
