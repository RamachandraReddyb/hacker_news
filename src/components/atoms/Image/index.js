import React from 'react';

const Image = ({ alt, src, classNames }) => {
    return <img alt={alt} src={src} className={classNames} />
}

export default Image;
