import React from "react";

const OperatorButton = (props) => {

  return (
    <div className="operator">
        <button onClick={() => props.displayOperator(props.operator.value)} className="calc-button operator-button">
        {/* Display a button element rendering the data being passed down from the parent container on props */
        props.operator.char}
        </button>
    </div>
  );
};

export default OperatorButton;
