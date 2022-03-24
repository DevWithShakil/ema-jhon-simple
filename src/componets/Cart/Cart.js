import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    // let tax = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping = product.shipping;
        // tax = tax = product.tax;
    }
    const tax = parseFloat((total *10 / 100).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax} </p>
            <h3>Grand Total: ${grandTotal}</h3>
            <h4>Clear Cart</h4>
            <h4>Review Order</h4>
        </div>
        
    );
};

export default Cart;