import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SigninForm from "./forms/SigninForm";
import ReviewsPage from "./pages/ReviewsPage";
import SignupForm from "./forms/SignupForm";
import UserSettings from "./user_dashboard/UserSettings";
import SavedProducts from "./user_dashboard/SavedProducts";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/products" element={HomePage} />
        <Route path="/products/:id" element={ProductPage} />
        <Route path="/signin" element={SigninForm} />
        <Route path="/signup" element={SignupForm} />
        <Route path="/products/:id/reviews" element={ReviewsPage} />
      </Routes>
    </Router>
  )
}

export default Main


