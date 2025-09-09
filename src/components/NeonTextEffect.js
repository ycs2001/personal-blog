import React from "react";
import PropTypes from "prop-types";
import "./NeonTextEffect.css";

const NeonTextEffect = ({ text = "" }) => {
    return <h1 className="neon-text">{text}</h1>;
};

NeonTextEffect.propTypes = {
    text: PropTypes.string,
};

export default NeonTextEffect;
