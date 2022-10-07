import React from 'react'; //nebutina jau rasyti
import "./Button.css";

 //return
 //props = {text: "Say hello"}
 //props.text = Say hello

/*const Button = (props) => (
<div className="button-wrapper">
    <button type="button" className="button">
            {props.text}
    </button>
  </div>
);
export default Button;*/


/*const Button = ({text}) => (
    <div className="button-wrapper">
        <button type="button" className="button">
                {text}
        </button>
      </div>
    );
    export default Button;*/


 // props = {text: "say hello", type: "button" | "submit" |"reset"}   
// props.type = ( { type})

    const Button = ({text, type, bgColor }) => (
        <div className="button-wrapper">
            <button type={type} className="button" style={{backgroundColor: bgColor}}>
                    {text}
            </button>
          </div>
        );
        export default Button;