import React from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

function PrivateRouter() {
    let location = useLocation();
    const { currentUser } = useAuth();

    if (!currentUser) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
      return <Outlet />;
    }
  }
export default PrivateRouter