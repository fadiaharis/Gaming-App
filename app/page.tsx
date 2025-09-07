"use client";

import clsx from "clsx";

import { SignInForm, SignUpForm } from "@/components/AuthForms";
import Header from "@/components/Header/Header";
import MainSection from "@/components/MainSection";
import Modal from "@/components/Modal";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useSidebar } from "@/components/Sidebar/SidebarContext";
import { useHashModal } from "@/components/Hooks/useHashModal";

export default function Page() {
  const { modal, close } = useHashModal();
  const { collapsed } = useSidebar();

  return (
    <div>
      <Header />
      <Sidebar />
      <main
        className={clsx(
          "pt-20 px-4 pb-10 transition-[margin-left] duration-200",
          collapsed ? "ml-16" : "ml-64"
        )}
      >
        <MainSection />
      </main>

      <Modal open={modal === "signin"} onClose={close} title="Sign in">
        <SignInForm />
      </Modal>

      <Modal
        open={modal === "signup"}
        onClose={close}
        title="Create your account"
      >
        <SignUpForm />
      </Modal>
    </div>
  );
}
