import React, { useState } from 'react';
import fakeData from '../../../fakeData'
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products,setProduct] = useState(firstTen)

    const[cart, setCart]= useState([]);

    const handleAddProduct = (product)=>{
        console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
            <h1>This is shop</h1>
            <h3>{products.length}</h3>
            
                {
                    products.map(pd=><Product handleProduct= {handleAddProduct} product={pd}></Product>)
                }
           
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;