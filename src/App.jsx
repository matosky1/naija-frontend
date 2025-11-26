import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Story from './pages/Story';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import LoginSignup from "./pages/LoginSignup";
import ForgotPassword from "./pages/ForgotPassword";
import SquarePayment from "./components/SquarePayment";
import ThankYou from './pages/ThankYou';



export default function App(){
return (
<div className="site">
<Header />
<main>
<Routes>
<Route index element={<Collection />} />
<Route path="/collection" element={<Collection />} />
{/* <Route path="/product" element={<Product />} /> */}

<Route path="/story" element={<Story />} />
<Route path="/about" element={<About />} />
<Route path="/home" element={<Home />} />
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/login" element={<LoginSignup />} />
 <Route path="/forgot-password" element={<ForgotPassword />} />
 <Route path="/checkout" element={<SquarePayment />} />
 <Route path="/thank-you" element={<ThankYou />} />
 

</Routes>
</main>
<Footer />
</div>
);
}