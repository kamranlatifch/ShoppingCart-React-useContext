import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import Accessories from "./Components/Accessories";
import Shoes from "./Components/Shoes";
import { createContext, useState } from "react";
import CartList from "./Components/CartList";
export let Cart = createContext();

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [netTotal, setNetTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addQuantity = (product) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
            currentTotal: item.price * (item.quantity + 1),
          }
        : item
    );
    setCartItems(updatedCartItems);

    const newNetTotal = netTotal + product.price;
    setNetTotal(newNetTotal);
    setTotalCount(totalCount + 1);
  };

  const subtractQuantity = (product) => {
    if (product.quantity <= 1) {
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== product.id
      );
      setCartItems(updatedCartItems);
      setTotalCount(totalCount - 1);
      setNetTotal(netTotal - product.currentTotal);
    } else {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity - 1,

              currentTotal: item.price * (item.quantity - 1),
            }
          : item
      );
      setCartItems(updatedCartItems);

      const newNetTotal = netTotal - product.price;
      setNetTotal(newNetTotal);

      setTotalCount(totalCount - 1);
    }
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
    setTotalCount(totalCount - product.quantity);
    setNetTotal(netTotal - product.currentTotal);
  };

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              currentTotal: item.price * (item.quantity + 1),
            }
          : item
      );
      setCartItems(updatedCartItems);
      const newNetTotal = updatedCartItems.reduce(
        (total, item) => total + item.currentTotal,
        0
      );
      setNetTotal(newNetTotal);
    } else {
      const newItem = {
        id: product.id,
        name: product.title,
        price: product.discountedPrice,
        img: product.img,
        quantity: 1,
        currentTotal: product.discountedPrice * 1,
      };
      setCartItems([...cartItems, newItem]);
      const newNetTotal = netTotal + newItem.currentTotal;
      setNetTotal(newNetTotal);
    }
    setTotalCount(totalCount + 1);
  };

  return (
    <>
      <BrowserRouter>
        <Cart.Provider
          value={{
            totalCount,
            netTotal,
            addToCart,
            cartItems,
            addQuantity,
            subtractQuantity,
            removeFromCart,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/cartList" element={<CartList />} />
          </Routes>
        </Cart.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
