import React, { useState } from 'react'
import Products from './cart/Products'
import data from './cart/data';
import Cart from './cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './cart/Home';
import Header from './cart/header/Header';
import Contact from './cart/contact/Contact';

const App = () => {
  //getting the products array from the API
  const { products } = data;
  //setting up a hook for add to cart functionalities
  const [cartItems, setCartItems] = useState([]);

  /* this function do 2 functionalities
  1. increment the quantity of the existing product into the cart
  2. add a new product into the cart
  
  */
  const onAdd = (product) => {
    //checking if the product is already present into cart or not
    const exist = cartItems.find((x) => x.id === product.id);

    //if the product is already present into the cart
    if (exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
      console.log(cartItems);
    } else {
      /*if the product is not already present into the cart. Put the product into the cart with the default value
      of quantity 1 */
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      console.log(cartItems);
    }
  }

  //function that decrements the quantity of the product
  const onRemove = (product) => {
    //checking if the product is already present into cart or not
    const exist = cartItems.find((x) => x.id === product.id);

    //if there is only 1 quanity of the product
    if (exist.qty === 1) {
      //delete the product from the cart
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  }
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App