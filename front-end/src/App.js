import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Login from "./components/login";
import Register from "./components/register"
import { useState } from 'react';


//Combining Backend and Frontend and rendering

function App() {

  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
            {
              user && user._id ? <ProductList setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>

          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />


          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
