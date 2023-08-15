import React from 'react';
import PropTypes from 'prop-types';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input
            placeholder="Busca en tus pendientes"
            className="TodoSearch"
            value={searchValue}
            onChange={handleChange}
        />
    );
}

TodoSearch.propTypes = {
    searchValue: PropTypes.string.isRequired,
    setSearchValue: PropTypes.func.isRequired
};

export { TodoSearch };