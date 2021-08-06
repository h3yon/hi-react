import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Wrtiepage from "./components/Wrtiepage";
import BoardDetailPage from "./components/BoardDetailPage";
import EditPage from "./components/EditPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/write" component={Wrtiepage} />
        <Route exact path="/page/:id" component={BoardDetailPage} />
        <Route path="/page/:id/edit" component={EditPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
