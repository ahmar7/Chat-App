import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chats from "../container/chat";
import Home from "../container/home/index";

class Routerapp extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chats} />
      </Router>
    );
  }
}

export default Routerapp;
