import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const HomePage = lazy(() => import("../../pages/Home/Home"));
const RegisterPage = lazy(() => import("../../pages/Register/Register"));
const LoginPage = lazy(() => import("../../pages/Login/Login"));
const ContactsPage = lazy(() => import("../../pages/Contacts/Contacts"));

const RouteSection = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteSection;
