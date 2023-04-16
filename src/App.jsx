import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import ProductCard from "./components/Product";
import ContactForm from "./components/Contact";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import BestSeller from "./components/BestSeller";
import Orders from "./components/Orders";
import SplashScreen from "./components/SplashScreen";
import AddProduct from "./components/AddProduct";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [loggedInUserId, setLoggedInUserId] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUserId(data.user.id);
      });
  }, [storedToken]);

  return (
    <div className="App bg-black">
      {storedToken && <Navbar setStoredToken={setStoredToken} />}
      <Routes>
        {storedToken ? (
          <Route path="/" element={<ProductCard />} />
        ) : (
          <Route path="/" element={<SplashScreen />} />
        )}

        <Route
          path="/login"
          element={<LoginForm setStoredToken={setStoredToken} />}
        />

        <Route path="/Featured" element={<BestSeller />} />

        <Route path="/Contact" element={<ContactForm />} />
        <Route
          path="/signUp"
          element={<SignUp setStoredToken={setStoredToken} />}
        />
        <Route path="/addProduct" element={<AddProduct />} />

        <Route path="/AddProduct" element={<AddProduct />} />

        <Route
          path="/product/:id"
          element={<ProductDetail loggedInUserId={loggedInUserId} />}
        />
        <Route
          path="/Orders"
          element={<Orders loggedInUserId={loggedInUserId} />}
        />
      </Routes>
    </div>
  );
}

export default App;
