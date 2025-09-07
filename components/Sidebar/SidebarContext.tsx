'use client';
import { createContext, useContext, useState } from 'react';

type Ctx = { collapsed: boolean; setCollapsed: (v: boolean) => void };
const C = createContext<Ctx | null>(null);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  return <C.Provider value={{ collapsed, setCollapsed }}>{children}</C.Provider>;
};

export const useSidebar = () => {
  const ctx = useContext(C);
  if (!ctx) throw new Error('Sidebar context used outside provider');
  return ctx;
};
