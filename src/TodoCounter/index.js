import React from 'react';
import PropTypes from 'prop-types';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h1 className="TodoCounter">
            Has completado {completed} de {total} TODOs
        </h1>
    );
}

TodoCounter.propTypes = {
    total: PropTypes.number.isRequired,
    completed: PropTypes.number.isRequired
};

export { TodoCounter };

