import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// project import
// import { useSelector } from "react-redux";

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }) => {
  // const isLogined = useSelector((state) => state.auth.isLogined);
  const navigate = useNavigate();
  const location = useLocation();

  const isLogined = localStorage.getItem('isLogined');

  useEffect(() => {
    if (!isLogined) {
      navigate("login", { replace: true });
    }
  }, [isLogined, navigate, location]);

  return children;
};

export default AuthGuard;
