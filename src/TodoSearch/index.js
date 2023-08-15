import './TodoSearch.css';
import React from 'react';

function TodoSearch({
    searchValue,
    setSearchValue,
}) {

    return (
        <input
            placeholder="Busca en tus pendientes"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                console.log(event.target.value);
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };