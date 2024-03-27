import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import NoPage from "./pages/NoPage";
import NavHamburger from "./pages/nav-hamburger"
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavHamburger />
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
