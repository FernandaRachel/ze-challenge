import React, { Component } from 'react';
import getProductList from '../../services/products-list';
import SearchField from '../../shared/search-field/search-field';

class MainPage extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        getProductList();
    }

    render() {
        return (
            <div>
                <SearchField />
            </div>
        );
    }
}

export default MainPage;