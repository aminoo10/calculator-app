import React from "react";
import "./radiobutton.module.scss";

const RadioButton = (props) => {
    return (
        <div className="RadioButton">
            <input id={props.id} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}
export default RadioButton;


//the source of this code snippet is via: https://medium.com/@mushfiqur.keuna/creating-a-radio-button-component-in-react-cbd03752521b
