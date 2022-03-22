import React, { Component } from "react";
import "./form-input.styles.scss";
class FormInput extends Component {
  constructor() {
    super();
  }
  render() {
    const { handleChange, label, ...otherProps } = this.props;
    return (
      <div className="group">
        <input
          className="form-input"
          onChange={handleChange}
          {...otherProps}
        ></input>
        {label ? (
          <label
            className={`${
              otherProps.value.length ? "shrink" : ""
            } form-input-label`}
          >
            {label}
          </label>
        ) : null}
      </div>
    );
  }
}

export default FormInput;
