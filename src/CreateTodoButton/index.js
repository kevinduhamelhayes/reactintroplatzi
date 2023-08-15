import React from "react"
// import PropTypes from 'prop-types'; // Si decides usar prop-types
import "./CreateTodoButton.css"

function CreateTodoButton() {
  const handleClick = () => {
    console.log("New todo")
  }

  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  )
}

// CreateTodoButton.propTypes = {
//     // Si decides usar prop-types, puedes definir las propiedades aquí.
// };

export { CreateTodoButton }
