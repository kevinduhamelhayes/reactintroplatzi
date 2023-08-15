import React from 'react';
import PropTypes from 'prop-types';
import { GoCheck, GoX } from 'react-icons/go';
import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDeleteTodo }) {
    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${completed && "Icon-check--active"}`}
                onClick={onComplete}
            >
                <GoCheck className='Icon-check' />
            </span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDeleteTodo}
            >
                <GoX className='Icon-delete' />
            </span>
        </li>
    );
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onComplete: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
};

export { TodoItem };
