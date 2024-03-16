import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">SignUp</NavLink>
      <NavLink to="/login">SignIn</NavLink>
    </div>
  );
};

export default AuthNav;
