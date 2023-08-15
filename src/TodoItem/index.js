import './TodoItem.css';
import React from 'react';
import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";


function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
                onClick={props.onComplete}
            >
            <GoCheck className='Icon-check'></GoCheck>
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
            {props.text}
            </p>
            <span className="Icon Icon-delete"
                onClick={props.onDeleteTodo}
            >
            <GoX className='Icon-delete'></GoX>
            </span>
        </li>
    );
}

export { TodoItem };