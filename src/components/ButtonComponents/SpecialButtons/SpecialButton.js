import React from "react";

const SpecialButton = (props) => {
  return (
    <button onClick={() => props.clear(props.text)} className="calc-button special-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.text}
    </button>
  );
};

export default SpecialButton;