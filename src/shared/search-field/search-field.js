import React from 'react';
import './search-field.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const SearchField = props => {

    return (
        <div className="search">
            <input type="search" className="search-field" id="searchField" value={props.searchText} />
            {/* <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            /> */}
        </div>
    )
}

export default SearchField;