import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({navItem, activePage}) => {
  return (
    <React.Fragment>
      <li>
        <Link to={navItem.url} className={activePage === navItem.url ? `menu__link _active` : `menu__link`}>{navItem.title}</Link>
      </li>
    </React.Fragment>
  );
};

export default NavItem;
