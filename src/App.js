import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contactus from "./Pages/ContactUs";
import Login from "./Pages/Login";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

function App() {
  const [Sign, setSign] = useState(false);
  return (
    <Router basename="/fury">
      <Header />
      <button onClick={() => setSign(!Sign)}>
        {Sign ? "Sign out" : "Sign In"}
      </button>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/products">
          {Sign ? <Products /> : <Redirect to="/" />}{" "}
        </Route>
        <Route path="/contact" component={Contactus} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
