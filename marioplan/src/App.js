import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SingIn from "./components/auth/SingIn";
import SingUp from "./components/auth/SingUp";
import CreateProject from "./components/projects/CreateProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/singin" component={SingIn} />
            <Route path="/singup" component={SingUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
