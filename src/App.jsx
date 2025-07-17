import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Layout from '../src/Layout/Layout';
import Home from '../src/Home';
import Inventory from '../src/Components/Inventory';
import Cart from '../src/Components/Cart';
import SweetItems from '../src/Components/SweetItems';
import Navbar from '../src/Components/Navbar';
import BackgroundImageSlider from '../src/Components/BackgroundImageSlider';
import Footer from '../src/Components/Footer';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/navbar" element={<Navbar />} />
                    <Route path="/background-slider" element={<BackgroundImageSlider />} />
                    <Route path="/sweet-items" element={<SweetItems />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/footer" element={<Footer />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;