import React from 'react';

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__content">
          <div className="header__menu menu">
            <div className="menu__icon icon-menu"><span></span> <span></span> <span></span></div>
            <nav className="menu__body _active">
              <ul className="menu__list">
                <li><a href="" className="menu__link">Works</a></li>
                <li><a href="" className="menu__link">Blog</a></li>
                <li><a href="" className="menu__link _active">Profile</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
