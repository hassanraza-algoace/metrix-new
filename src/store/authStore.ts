import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: true,
      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
          loading: false,
        }),
      setLoading: (loading) => set({ loading }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          loading: false,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);