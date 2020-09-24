import React, { Component } from 'react';
import { searchDelivery } from '../../services/products-list.service';
import SearchField from '../../shared/search-field/search-field';

class MainPage extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        searchDelivery();
    }

    render() {
        return (
            <SearchField />
        );
    }
}

export default MainPage;