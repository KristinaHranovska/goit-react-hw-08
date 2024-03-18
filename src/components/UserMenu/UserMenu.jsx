import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { logOut } from "../../redux/auth/operation";
import { Avatar } from "@mui/material";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>Welcom, {user.name}</p>
      <Avatar>{user.name.charAt(0)}</Avatar>
      <button type="button" onClick={() => dispatch(logOut())}>
        SignOut
      </button>
    </div>
  );
};

export default UserMenu;
