import React from 'react';
import './search-field.css';

const SearchField = props => {

    return (
        <div className="search">
            <input type="search" className="search-field" id="searchField" value={props.searchText} />
        </div>
    )
}

export default SearchField;