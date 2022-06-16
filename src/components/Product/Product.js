import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';


const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <Rating
                    emptySymbol="far fa-star star-color"
                    fullSymbol="fas fa-star star-color"
                    fractions={2}
                />
                <br />
                <button className="main-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;