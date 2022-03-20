import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionCreator } from '../../store/actions';

const NavItem = ({navItem}) => {
  const currentPage = useSelector(state => state.currentPage);
  const dispatch = useDispatch();

  const onLinkClick = (page) => {
    dispatch(ActionCreator.setCurrentPage(page))
  };

  return (
    <React.Fragment>
      <li onClick={() => {
        onLinkClick(navItem.title)
      }}>
        <Link to={navItem.url} className={currentPage === navItem.title ? `menu__link _active` : `menu__link`}>{navItem.title}</Link>
      </li>
    </React.Fragment>
  );
};

export default NavItem;
