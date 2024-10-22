import NavBar from "./components/NavBar.jsx";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import DUMMY_PRODUCTS from "./data/products.js";
import './index.css'
import { useState } from "react";

const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const App = () => {
  const [items, setItems] = useState(storedCartItems);
  const [isCartOpen, setIsCartOPen] = useState(false);

  const handleAddItemToCart = (id, quantity) => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      const existingCartItemIndex = updatedItems.findIndex(cartItem => cartItem.id === id);
      const existingCartItem = updatedItems[existingCartItemIndex];
  
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({
          id: id,
          quantity: quantity
        });
      } 

      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  }

  const handleUpdateCartItemQuantity = (id, amount) => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      const updatedItemIndex = updatedItems.findIndex(item => item.id === id);
      
      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      }
      updatedItem.quantity += amount;
      
      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
       updatedItems[updatedItemIndex] = updatedItem;
      } 
      
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    }); 
  }

  const handleDeleteCartItem = (id) => {
    setItems(prevItems => {
      const cartItems = [...prevItems];

      const index = cartItems.findIndex(cartItem => cartItem.id === id);

      cartItems.splice(index, 1);

      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return cartItems;
    });
  }

  const handleCartClick = () => {
    setIsCartOPen(prevValue => !prevValue);
  }
  return (
    <>
      <header>
        <NavBar onCartClick={handleCartClick} items={items} />
      </header>
      <main>
        <div className="container">
          {isCartOpen && (
            <Cart items={items} onDeleteCartItem={handleDeleteCartItem} />
          )}
          <Product
            {...DUMMY_PRODUCTS[0]}
            items={items}
            updateItemQuantity={handleUpdateCartItemQuantity}
            addItemToCart={handleAddItemToCart}
          />
        </div>
      </main>
    </>
  );
}

export default App
