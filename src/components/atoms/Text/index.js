import React from 'react';
import './text.css';

const Text = ({ label, classNames = "", color="black", fontWeight="normal", fontSize="base", ...rest }) => {
    let fontclass = `text--${fontSize} text--${color} text--${fontWeight}`;
    let allClassess = `${fontclass} ${classNames}`;
    return <span className={allClassess} {...rest} >{label}</span>
}

export default Text;
