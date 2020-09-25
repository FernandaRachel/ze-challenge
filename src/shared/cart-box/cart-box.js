import React from 'react';
import './cart-box.scss';

const CartBox = props => {
    const renderProductsInCart = (list) => {
        const cartsArr = [];
        for (let index = 0; index < list.length; index++) {
            const el = list[index];
            const htmlEl =
                <li key={[list.id, 'cart']}>
                    <img className="product-image" src={el.images[0].url}></img>
                    <hr />
                    <div className="details-box">
                        <h3 className="title">{el.title}</h3>
                        <p className="float-left"><b>R${el.productVariants[0].price}</b></p>
                    </div>
                </li>
            cartsArr.push(htmlEl);
        }
        return cartsArr;
    }

    return (
        props.cartList.length ?
            (<div className="cart-box">
                <ul>
                    {renderProductsInCart(props.cartList)}
                </ul>
            </div>) : ''
    );
}

export default CartBox;