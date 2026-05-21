import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Protective = ({ children }: Props) => {
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  if (isLogin === null) {
    return <h1>Loading...</h1>;
  }

  if (!isLogin) {
    return <Navigate to="/register" />;
  }

  return <>{children}</>;
};

export default Protective;