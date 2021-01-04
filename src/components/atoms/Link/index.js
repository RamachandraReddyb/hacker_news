import React from "react";

const Link = ({ label, path, classNames, target = "" }) => {
  return (
    <a href={path} className={classNames} target={target}>
      {label}
    </a>
  );
};

export default Link;
