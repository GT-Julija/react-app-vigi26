import React from 'react';
import "./Button.css";



const Button = (props) => (
    <div className="button-wrapper">
        <button type="button" className="button">
                {props.text}
        </button>
      </div>
    );
    export default Button;