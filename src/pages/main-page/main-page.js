import React, { Component } from 'react';
// import LocationSearchInput from '../../shared/location-search/location-search';
import {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';
import { searchDelivery } from '../../services/products-list.service';
import SearchField from '../../shared/search-field/search-field';
import { Redirect } from 'react-router-dom'

class MainPage extends Component {
    constructor(props) {
        super();
        this.state = {
            value: '',
            address: ''
        }
    }

    componentDidMount() {
        searchDelivery();
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        console.log('entrou handleSelect')
        geocodeByAddress(address)
            .then(results => {
                this.setState({ address: results[0].formatted_address })
                console.log(results[0].formatted_address)
                sessionStorage.setItem('address', results[0].formatted_address);
                return getLatLng(results[0])
            })
            .then(latLng => {
                sessionStorage.setItem('coordenates', JSON.stringify(latLng));
                console.log('Success', latLng)
                return <Redirect to='/products'  />
            })
            .catch(error => console.error('Error', error));
    };



    render() {
        return (
            <div>
                <SearchField address={this.state.address} handleChange={this.handleChange} handleSelect={this.handleSelect} />
            </div>
        );
    }
}

export default MainPage;