import React, { Component } from 'react';
import { getProductList, getAllCategory } from '../../services/products-list.service';
import ProductList from './product-list/product-list';
import { compose, withHandlers, setDisplayName } from 'recompose';

class Products extends Component {

    constructor(props) {
        super();
        this.state = {
            productList: []
        }

        this.callProductList = this.callProductList.bind(this);
        this.callProductList();
    }


    callProductList() {
        // getAllCategory().then(resp => {
        getProductList().then(data => {
            this.setState({ productList: data.data.poc.products })
            console.log(this.state.productList);
        })
        // })
    };

    render() {
        return (
            <div>
                <ProductList productList={this.state.productList} />
                <h2>Lista de produtos</h2>
            </div>
        );
    }
}

export default Products;