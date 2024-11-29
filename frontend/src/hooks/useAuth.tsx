import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    } catch (error) {
      console.error("Something went wrong inside useAuth hook : ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isAuthenticated, isLoading };
};

export default useAuth;
