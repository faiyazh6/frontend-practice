import React from 'react';
import Courses from "./Courses"; 
import "./Courses.css"; 
import "./Checkout.css"; 
import courses from "../data/courses.json"

const Checkout = ({ cart, shippingAddress }: { cart: any[], shippingAddress: string }) => {
  console.log(courses)
  return (
    <div className='card-container'>
      <h2>Checkout Page</h2>

      <h3>Items in Cart:</h3>
      <ul>
        {cart.map((item, index) => (
          cart[index] ?
          <li key={index}> 
            {courses[index].dept + " " + courses[index].number}
          </li>
          :
          <div></div>
        ))}
      </ul>

      <h3>Shipping Address:</h3>
      <p>{shippingAddress}</p>

      <button>Confirm Purchase</button>
    </div>
  );
};

export default Checkout;