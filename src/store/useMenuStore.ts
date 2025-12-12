import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MenuStore {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export const useMenuStore = create<MenuStore>()(
  persist(
    (set) => ({
      activeMenu: "dashboard", // default menu
      setActiveMenu: (menu: string) => set({ activeMenu: menu }),
    }),
    {
      name: "active-menu", // localStorage key
    }
  )
);
