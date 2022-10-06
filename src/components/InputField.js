import React from "react";

function InputField(props) {
  return (
    <div>
      <label htmlFor={props.inputId}>{props.tag}</label>
      <input
        required={true}
        type={props.type}
        name={props.inputId}
        id={props.inputId}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default InputField;
