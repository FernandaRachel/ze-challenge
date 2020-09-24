import React from 'react'
import style from './product-list.scss';

const ProductList = props => {

    const listProducts = (products) => {
        const productsArr = [];
        for (let index = 0; index < products.length; index++) {
            const el = products[index];
            const htmlEl =
                <li key={el.id}>
                    <img className="product-image" src={el.images[0].url}></img>
                    <hr />
                    <div className="details-box">
                        <h3 className="title">{el.title}</h3>
                        <p className="float-left"><b>R${el.productVariants[0].price}</b></p>
                    </div>
                </li>;
            productsArr.push(htmlEl);
        }
        return productsArr;
    }
    return (
        props && props.productList.length ? (
            <div className="product-list">
                <ul>
                    {listProducts(props.productList)}
                </ul>
            </div>
        ) : 'Sem itens'
    )
}

export default ProductList;