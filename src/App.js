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
      <Route exact path="/ReactEcommerceSite/home" component={ProductList} />
      <Switch>

        <Route path="/ReactEcommerceSite/details" component={Details} />
        <Route path="/ReactEcommerceSite/cart" component={Cart} />
        {/* <Route path="/default" component={Default} /> */}
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
