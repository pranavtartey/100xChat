import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router";
import { Outlet } from "react-router";

const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <p className="h-screen flex items-center justify-center text-xl font-bold">
        Loading
      </p>
    );
  }

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default AuthLayout;
