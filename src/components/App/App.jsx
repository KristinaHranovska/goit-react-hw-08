import { useEffect } from "react";
import RouteSection from "../RouteSection/RouteSection";
import { refreshUser } from "../../redux/auth/operation";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <RouteSection />
    </>
  );
}

export default App;
