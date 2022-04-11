import React from "react";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <Router>
      <div className="ui container">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogdetails/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
