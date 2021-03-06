import React from 'react';
import Option from './Option.js';
 

const Options = (props) => (
  <div>
  <button onClick={props.handleDeleteOptions}> Remove All</button>
 {props.options.length === 0 && <p>Please add am option to get started </p>} 
  {
  props.options.map((option) => (
  <Option 
  key={option} 
  optionText={option}
  handleDeleteOption={props.handleDeleteOption}
  />
 ))
  }
  </div>
);
  

  export default Options;