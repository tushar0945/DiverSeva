import { Navigate } from "react-router-dom";
import { useAuthContext } from "../features/auth/auth.context";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
