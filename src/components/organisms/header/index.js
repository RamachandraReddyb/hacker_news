import React from 'react';
import Logo from '../../molecules/Logo';
import NavigationLink from '../../molecules/NavgationLink';

import './header.css';

const Header = () => {

    const Links =[
        {
          link: "/newest",
          label: "new",
        },
        {
          link: "/ask",
          label: "ask",
        },
        {
          link: "/show",
          label: "show",
        },
        {
          link: "/jobs",
          label: "jobs",
        },
      ];

    return (
        <table className="header">
            <tbody>
                <tr>
                    <td className="header-logo">
                        <NavigationLink link="/">
                            <Logo />
                        </NavigationLink>
                    </td>
                    {Links.map((item, key) => (
                        <td key={key}>
                        <NavigationLink activeClass="active" {...item} />{" "}
                        {key < Links.length - 1 && "|"}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}

export default Header;
