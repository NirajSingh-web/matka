//Auth provider component to protect routes
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/getTocken";
interface AuthProviderProps {
  children: ReactNode
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const Authorization = Boolean(getToken());
  return !Authorization ? <Navigate to="/login" /> : <>{children}</>;
};

export default AuthProvider;
