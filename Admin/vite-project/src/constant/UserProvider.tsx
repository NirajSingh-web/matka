import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { removeToken, setToken } from "../utils/getTocken";
import { useAdminDetails } from "../hook/useAdminDetails";
import { apiServer } from "./apiclient";
import type { ILoginResults, IUser } from "../hook/useAuth";
interface UserContextType {
  user:  IUser| null;
  isAuthenticated: boolean;
  login: (data: any) => boolean;
  logout: () => Promise<void>;
  refetch: () => void;
}
const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const { data, refetch } = useAdminDetails();
  useEffect(() => {
    if (data?.success && data.data) {
      setUser(data.data);
    }
  }, [data]);
  const login = (data: ILoginResults): boolean => {
    const token = data?.accessToken;
    setUser(data.data);
    if (token) {
      setToken(token);
      apiServer.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;;
      return true;
    }
    return false;
  };

  const logout = async (): Promise<void> => {
    try {
      await apiServer.post("/admin-auth/logOut/");
    } catch (e) {
      console.error("Logout failed:", e);
    } finally {
      removeToken();
      delete apiServer.defaults.headers.common["Authorization"];
      setUser(null);
      window.location.reload();
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        refetch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const
  useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useUser must be used within a UserProvider");
    }
    return context;
  };
