import { useAuth } from "../../hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import style from "./AppHeader.module.css";

const AppHeader = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={`${style.header} ${style.container}`}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppHeader;
