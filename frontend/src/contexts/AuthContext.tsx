import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

// ---- Types ----
interface User {
  id: string;
  fullName: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;

  signUp: (
    fullName: string,
    email: string,
    password: string
  ) => Promise<{ error: any }>;

  signIn: (email: string, password: string) => Promise<{ error: any }>;

  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ---- Provider ----
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Load user from backend on page refresh
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data } = await axios.get("/api/auth/me", {
        withCredentials: true,
      });

      setUser(data.user);
      setIsAdmin(data.isAdmin);
    } catch (err) {
      setUser(null);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  // ---- SIGN UP ----
  const signUp = async (fullName: string, email: string, password: string) => {
    try {
      const { data } = await axios.post(
        "/api/auth/register",
        { fullName, email, password },
        { withCredentials: true }
      );

      toast({
        title: "Account created!",
        description: "You can now log in.",
      });

      return { error: null };
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.response?.data?.message || "Error",
        variant: "destructive",
      });

      return { error };
    }
  };

  // ---- SIGN IN ----
  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      setUser(data.user);
      setIsAdmin(data.isAdmin);

      return { error: null };
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.response?.data?.message || "Error",
        variant: "destructive",
      });

      return { error };
    }
  };

  // ---- SIGN OUT ----
  const signOut = async () => {
    await axios.post("/api/auth/logout", {}, { withCredentials: true });

    setUser(null);
    setIsAdmin(false);

    toast({
      title: "Signed out",
      description: "You have been logged out.",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ---- Hook ----
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
