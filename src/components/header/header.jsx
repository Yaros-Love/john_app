import React from 'react';
import { navItems } from '../../const/const';
import NavItem from './nav-item';

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__content">
          <div className="header__menu menu">
            <div className="menu__icon icon-menu"><span></span> <span></span> <span></span></div>
            <nav className="menu__body _active">
              <ul className="menu__list">
                {navItems.map(item => <NavItem navItem={item} key={item.title}/>)}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
