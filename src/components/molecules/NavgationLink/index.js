import React from "react";

import Link from "../../atoms/Link/index";
import Text from "../../atoms/Text";
import { NavLink } from "react-router-dom";

const NavigationLink = ({
  link,
  label,
  isExternalLink,
  classNames = "",
  activeClass = "",
  element = "text",
  fontSize = "",
  fontWeight = "400",
  fontColor = "black",
  children,
}) => {
  return isExternalLink ? (
    <Link path={link} label={label} target="_blank" />
  ) : (
    <NavLink
      activeClassName={activeClass}
      className={`${classNames}`}
      to={link}
    >
      {children}
      {label && (
        <Text
          color={fontColor}
          fontSize={fontSize}
          fontWeight={fontWeight}
          element={element}
          label={label}
        />
      )}
    </NavLink>
  );
};

export default NavigationLink;
