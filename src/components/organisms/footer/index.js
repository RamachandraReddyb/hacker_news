import React from "react";
import NavigationLink from "../../molecules/NavgationLink";

import "./footer.css";

const Footer = () => {
  const Links = [
    {
      link: "/guidelines",
      label: "Guidelines",
      isExternalLink: false,
    },
    {
      link: "/faq",
      label: "FAQ",
      isExternalLink: false,
    },
    {
      link: "mailto:hn@ycombinator.com",
      label: "Support",
      isExternalLink: true,
    },
    {
      link: "https://github.com/HackerNews/API",
      label: "API",
      isExternalLink: true,
    },
    {
      link: "/security",
      label: "Security",
      isExternalLink: false,
    },
    {
      link: "/lists",
      label: "Lists",
      isExternalLink: false,
    },
    {
      link: "/bookmarklet",
      label: "Bookmarklet",
      isExternalLink: false,
    },
    {
      link: "http://www.ycombinator.com/legal/",
      label: "Legal",
      isExternalLink: true,
    },
    {
      link: "http://www.ycombinator.com/apply/",
      label: "Apply to YC",
      isExternalLink: true,
    },
    {
      link: "mailto:hn@ycombinator.com",
      label: "Contact",
      isExternalLink: true,
    },
  ];
  return (
    <footer className="footer">
      {Links.map((item, index) => (
        <>
          <NavigationLink
            element="span"
            fontSize="sm"
            color="gray"
            key={index}
            {...item}
          />
          {index < Links.length - 1 && " | "}
        </>
      ))}
    </footer>
  );
};

export default Footer;
