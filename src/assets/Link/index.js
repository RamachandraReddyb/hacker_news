import React from 'react';

const Link = ({ path, classNames, label}) => {
    return <a href={path} className={classNames}>{label}</a>
}

export default Link;
