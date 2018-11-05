import React from "react";
import "./Button.css";

const Button = ({ label, click, name }) => {
    return (
        <button className="btn btn-custom" onClick={click} name={name}>
            {label}
        </button>
    );
};

Button.defaultProps = {
    label: "",
    click: () => {},
    name: ""
};

export default Button;