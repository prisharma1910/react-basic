import React from "react";
import "./Loader.css";

const Loader = ({ loading }) => {
    return (
        <div
            className={
                "loader-container " + (loading ? "show-loader" : "hide-loader")
            }
        >
            <div className="loader" />
        </div>
    );
};

export default Loader;