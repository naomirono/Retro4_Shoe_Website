import React, { useState, useEffect } from "react";
import Navbar from "./components/User/Navbar";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/User/ProductDetail";
import BestSeller from "./components/User/BestSeller";
import Orders from "./components/User/Orders";
import SplashScreen from "./components/SplashScreen";
import AddProduct from "./components/Admin/AddProduct";
import ProductPage from "./components/User/ProductPage";
import AdminNavBar from "./components/Admin/AdminNavBar";
import AdminHome from "./components/Admin/AdminHome";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [loggedInUserId, setLoggedInUserId] = useState("");
  const [loggedInUserRole, setLoggedInUserRole] = useState("");
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
        setLoggedInUserRole(data.user.role);
      });
  }, [storedToken]);

  return (
    <div className="App bg-black">
      {storedToken && loggedInUserRole === "admin" && (
        <AdminNavBar setStoredToken={setStoredToken} />
      )}
      {storedToken && loggedInUserRole === "user" && (
        <Navbar setStoredToken={setStoredToken} />
      )}

      <Routes>
        {storedToken && loggedInUserRole === "admin" && (
          <Route path="/" element={<AdminHome />} />
        )}
        {storedToken && loggedInUserRole === "user" && (
          <Route path="/" element={<ProductPage />} />
        )}
        {!storedToken && <Route path="/" element={<SplashScreen />} />}

        <Route
          path="/login"
          element={<LoginForm setStoredToken={setStoredToken} />}
        />

        <Route path="/Featured" element={<BestSeller />} />

       
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
