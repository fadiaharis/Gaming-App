"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header/Header";
import Dashboard from "@/components/Dashboard";
import Modal from "@/components/Modal";
import clsx from "clsx";
import { SignInForm, SignUpForm } from "@/components/AuthForms";
import { useHashModal } from "@/components/useHashModal";
import { useSidebar } from "@/components/SidebarContext";

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
        <section className="flex flex-col gap-6">
          <div className="card overflow-hidden relative">
            <div className="relative">
              <div className="text-sm muted mb-1">Welcome to HG Game</div>
              <h1 className="text-2xl md:text-3xl font-semibold">
                Play, compete, and win.
              </h1>
              <p className="muted mt-2 max-w-2xl">
                Sign Up & Get UP TO ₹1,749,238.93 in Casino or Sports
              </p>
              <div className="flex gap-2 mt-4">
                <a href="/#signup" className="btn-primary">
                  Create account
                </a>
                <a href="/#signin" className="btn-ghost">
                  I have an account
                </a>
              </div>
            </div>
          </div>

          <Dashboard />
        </section>
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
