import React from "react";
import Header from "./components/common/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import SignupPage from "./components/SignupPage";
import CreativePage from "./components/CreativePage";
import NotFoundPage from "./components/NotFoundPage";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/creative/:slug" component={CreativePage} />
        <Route path="/creative" component={CreativePage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
