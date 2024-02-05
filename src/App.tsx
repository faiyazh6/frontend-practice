import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses, { CoursesArray } from './components/Courses';
import Cart from './components/Cart';
import courses from './data/courses.json'
import Checkout from './components/Checkout';
import Nav from './components/Nav';
import React, { useState, ChangeEvent } from 'react';
import './App.css';
import './components/Courses.css';
import ShareCourses from './components/ShareCourses'; // Import the ShareCourses component

function App() {
  const [filteredCourses] = useState([]);
  const initialCartState = courses.map(() => false); 
  const [cartItems, setCartItems] = useState([]); // Update cartItems type
  const [shippingAddress, setShippingAddress] = useState(
    '3333 WALNUT ST, RM #123456 PHILADELPHIA PA 19104-6193'
  );
  const [cart, setCart] = useState(initialCartState);
  
  const handleCartChange =  (courseIndex: any) => {
    
    const updatedCart = [...cart];
    const isCourseInCart = updatedCart[courseIndex];
    const maxCoursesInCart = 7; // Maximum number of courses allowed in the cart

    if (!isCourseInCart) {
      const numCoursesInCart = updatedCart.filter((item) => item).length;
      if (numCoursesInCart >= maxCoursesInCart) {
        alert('You cannot have more than 7 courses in your cart!');
        return;
      }
    }
  
    updatedCart[courseIndex] = !updatedCart[courseIndex]; // Toggle the state
    setCart(updatedCart);
  
    if (!updatedCart[courseIndex]) {
      alert('Removed from Cart'); 
    } 
  }
  return (
    <>
      <Router>
        <Nav />
        <div style={{ width: '100%', boxSizing: 'border-box', padding: '0 calc(1rem + 10%)' }}>
          <Routes>
            <Route path="/" element={<Courses cart={cart} changeCart={handleCartChange}/>} />
            <Route path="/cart" element={<Cart cart={cartItems} />} />
            <Route path="/checkout" element={<Checkout cart={cart} shippingAddress={shippingAddress} />} />
            <Route path="/share-courses" element={<ShareCourses selectedCourses={[]} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;