import css from '../navigation/Navigation.module.css';

import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const AuthNav = () => {
  return (
    <div>
      <NavLink className={getNavLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
