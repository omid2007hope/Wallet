// src/App.jsx
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Account from "../pages/Account";
import Wallet from "../pages/Wallet";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Wallet" element={<Wallet />} />

        {/* Add more routes as needed */}
      </Routes>

      <NavBar />
    </>
  );
}
