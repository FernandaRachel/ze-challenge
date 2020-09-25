import React, { Component } from 'react';
import { getProductList, searchDelivery } from '../../services/products-list.service';
import CartBox from '../../shared/cart-box/cart-box';
import ProductList from './product-list/product-list';

class Products extends Component {

    constructor(props) {
        super();
        this.state = {
            productList: [],
            cartList: [],
        }

        this.callProductList = this.callProductList.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        const coordenates = JSON.parse(sessionStorage.getItem('coordenates'));
        console.log(coordenates);

        this.callProductList(coordenates);
    }


    callProductList(coordenates) {
        const lat = coordenates.lat.toString();
        const lng = coordenates.lng.toString();
        // getAllCategory().then(resp => {
        searchDelivery(coordenates.lat.toString(), coordenates.lng.toString()).then(resp => {
            const id = resp.data.pocSearch ? resp.data.pocSearch[0].id : ''
            getProductList(id).then(resp1 => {
                this.setState({ productList: resp1.data.poc.products })
                console.log(this.state.productList);
            })
        })
        // })
    };

    addProduct(index) {
        this.state.cartList.push(this.state.productList[index]);
        this.setState({ cartList: this.state.cartList });
        console.log(this.state.cartList);
    }

    removeProduct(index) {
        this.state.cartList.splice(index, 1);
        this.setState({ cartList: this.state.cartList });
        console.log(this.state.cartList);
    }

    render() {
        return (
            <div>
                <h2>Lista de produtos</h2>
                <ProductList addProduct={this.addProduct} removeProduct={this.removeProduct} productList={this.state.productList} />
                <CartBox cartList={this.state.cartList} />
            </div>
        );
    }
}

export default Products;