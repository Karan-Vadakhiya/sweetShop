import BackgroundImageslider from "./Components/BackgroundImageSlider.jsx";
import Inventory from "./Components/Inventory.jsx";
import SweetItems from "./Components/SweetItems.jsx";
import Navbar from "./Components/Navbar.jsx"; 
import Cart from "./Components/Cart.jsx";
import handleAddToCart from "./Components/1.jsx";


const Home = () => {
  return (
    <>
    <Navbar />
    <BackgroundImageslider />
    <Inventory />
    <SweetItems  addToCart={handleAddToCart} />
    <Cart cartItems={cartItems} isOpen={isCartOpen} onClose={handleCloseCart} />
    <SweetItems />

    </>
  )
}

export default Home;