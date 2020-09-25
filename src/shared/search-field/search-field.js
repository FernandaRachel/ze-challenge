import React from 'react';
import './search-field.css';
import PlacesAutocomplete from 'react-places-autocomplete';

const SearchField = props => {

    return (
        <PlacesAutocomplete
            value={props.address}
            onChange={props.handleChange}
            onSelect={props.handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="search">
                    <input className="search-field"
                        {...getInputProps({
                            placeholder: 'Insira o endereço e número',
                        })}
                    />
                    <div>
                        {loading && <div>Carregando...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>

    )
}

export default SearchField;