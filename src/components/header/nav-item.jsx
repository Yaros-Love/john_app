import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({navItem}) => {
  return (
    <React.Fragment>
      <li>
        <Link to={navItem.url} className="menu__link">{navItem.title}</Link>
      </li>
    </React.Fragment>
  );
};

export default NavItem;
