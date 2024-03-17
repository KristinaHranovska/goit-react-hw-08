import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const getMenuItemClass = (to) => {
    return to === location.pathname
      ? clsx(styles.link, styles.active)
      : styles.link;
  };
  return (
    <nav>
      <NavLink to="/" className={getMenuItemClass("/")}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getMenuItemClass("/contacts")}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
