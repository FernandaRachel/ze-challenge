import React from 'react'
import style from './product-list.scss';
import currencyFormatter from '../../../utils/currency-formatter'

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
                        <p className="float-left"><b>{currencyFormatter.format('br', el.productVariants[0].price)}</b></p>
                    </div>
                    <div className="button-group">
                        <button className="remove" onClick={() => props.removeProduct(el.id)}>-</button>
                        <button className="add" onClick={() => props.addProduct(index)}>+</button>
                    </div>
                </li>;
            productsArr.push(htmlEl);
        }
        return productsArr;
    }

    const listCategories = (categories) => {
        const categoryArr = [];
        for (let idx = 0; idx < categories.length; idx++) {
            const el = categories[idx];
            const htmlEl =
                <li key={el.id}> {el.title}</li>
            categoryArr.push(htmlEl)
        }

        return categoryArr;
    }
    return (

        <div>
            {props && props.categoryList.length ?
                (<div className="category-list">
                    <ul>{listCategories(props.categoryList)}</ul>
                </div>) : ''
            }
            <h2 className="text-center">Lista de produtos</h2>

            {props && props.productList.length ?
                (<div className="product-list">
                    <ul>
                        {listProducts(props.productList)}
                    </ul>
                </div>) : ''
            }
        </div>
        // ) : 'Sem itens'
    )
}

export default ProductList;