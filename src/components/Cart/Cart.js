import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice= cart.reduce((total,pd) => total+pd.price,0)
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered:{cart.length} </p>
            <p>Total price: {totalPrice}</p>
        </div>
    );
};

export default Cart;