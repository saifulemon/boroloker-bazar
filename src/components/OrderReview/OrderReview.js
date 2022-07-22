import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useNavigate();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        history('/shipping');
        // setCart([]);
        // clearTheCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    cart.map(pd => <ReviewItem 
                        key={pd.key} 
                        product={pd}
                        handleRemove = {handleRemove}
                        >
                        </ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='main-btn'>Proceed to shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;