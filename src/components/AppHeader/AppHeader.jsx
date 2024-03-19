import { useAuth } from "../../hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import style from "./AppHeader.module.css";

const AppHeader = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={style.container}>
      <div className={style.navigation}>
        <div className={style.thumb}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
