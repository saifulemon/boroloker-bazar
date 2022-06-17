import { useEffect } from "react";
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = products => {
    const [cart, setCart] = useState([]);


    useEffect( () => {

        if(products.length) {
            const savedCart = getStoredCart();
            const storedCart = []; 
            for(const key in savedCart) {
                const addedProducts = products.find(product => product.key === key);
                if(addedProducts) {
                    const quantity = savedCart[key];
                    addedProducts.quantity = quantity;
                    storedCart.push(addedProducts);
                }
            }
            setCart(storedCart);
        }

    }, [products])
    return [cart, setCart];

}

export default useCart;