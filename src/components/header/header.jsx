import React, {useState} from 'react';
import { navItems } from '../../const/const';
import NavItem from './nav-item';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [activePage, _] = useState(window.location.pathname);

  return (
    <React.Fragment>
      <header className="header">
        <div className="header__content">
          <div 
            className="header__menu menu"
            onClick={() => setIsActive(!isActive)}>
            <div className={isActive ? `menu__icon icon-menu _active` : `menu__icon icon-menu`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav className={isActive ? `menu__body _active` : `menu__body`}>
              <ul className="menu__list">
                {navItems.map(item => <NavItem navItem={item} key={item.title} activePage={activePage}/>)}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
