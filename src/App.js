import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
