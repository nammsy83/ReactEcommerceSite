import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/cart/Cart';
import Details from './components/Details';
import Default from './components/Default';
import { Switch, Route } from 'react-router-dom';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
