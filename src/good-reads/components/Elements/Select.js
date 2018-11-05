import React from "react";
import "./Select.css";

const Select = ({ list, change, value, name, defaultOption }) => {
    const onChange = e => {
        e.preventDefault();
        change(e.target.value);
    };

    return (
        <select
            className="select select-custom"
            onChange={onChange}
            name={name}
            value={value}
        >
            {list.map((item, index) => (
                <option key={index} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};

Select.defaultProps = {
    list: [],
    change: () => {},
    value: "0",
    name: "",
    defaultOption: ""
};

export default Select;