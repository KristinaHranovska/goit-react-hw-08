import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader/AppHeader";

const Layout = () => {
  return (
    <>
      <AppHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
