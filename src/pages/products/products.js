import React, { Component } from 'react';
import { getProductList, searchDelivery, getAllCategory } from '../../services/products-list.service';
import CartBox from '../../shared/cart-box/cart-box';
import ProductList from './product-list/product-list';

class Products extends Component {

    constructor(props) {
        super();
        this.state = {
            productList: [],
            cartList: [],
            categoryList: []
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
        searchDelivery(coordenates.lat.toString(), coordenates.lng.toString()).then(deliveries => {
            const id = deliveries.data.pocSearch ? deliveries.data.pocSearch[0].id : ''
            getProductList(id).then(list => {
                this.setState({ productList: list.data.poc.products })
                console.log(this.state.productList);
            })
            getAllCategory(id).then(category => {
                this.setState({ categoryList: category.data.allCategory })

            })
        })
    };

    addProduct(index) {
        this.state.cartList.push(this.state.productList[index]);
        this.setState({ cartList: this.state.cartList });
        console.log(this.state.cartList);
    }

    removeProduct(id) {
        const index = this.state.cartList.findIndex(c => c.id === id);
        this.state.cartList.splice(index, 1);
        this.setState({ cartList: this.state.cartList });
        console.log(this.state.cartList);
    }

    render() {
        return (
            <div>
                <ProductList addProduct={this.addProduct} categoryList={this.state.categoryList} removeProduct={this.removeProduct} productList={this.state.productList} />
                <CartBox cartList={this.state.cartList} />
            </div>
        );
    }
}

export default Products;