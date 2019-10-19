import React from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
import NumberButton from "./NumberButton.js";
//Import your array data to from the provided data file
import { numbers } from "./../../../data.js";

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbersArr, setNumber] = useState(numbers);

  return (
    <div className="number-button-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       props.numbersArr.map(number => (
        <NumberButton number={number} />
      ))}
    </div>
  );
};

export default Numbers;