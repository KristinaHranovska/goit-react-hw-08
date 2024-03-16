import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { logOut } from "../../redux/auth/operation";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>Welcom, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        SignOut
      </button>
    </div>
  );
};

export default UserMenu;
