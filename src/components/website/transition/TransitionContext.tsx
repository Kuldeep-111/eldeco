"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type TransitionContextType = {
  navigate: (path: string) => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export const useTransition = () => {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("useTransition must be used inside provider");
  return ctx;
};

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const isAnimating = useRef(false);
  const pendingPath = useRef<string | null>(null);

  // 🔥 When ENTER animation finishes → change route
  useEffect(() => {
    const onEnterComplete = () => {
      if (pendingPath.current) {
        router.push(pendingPath.current);
      }
    };

    const onExitComplete = () => {
      isAnimating.current = false;
      pendingPath.current = null;
    };

    window.addEventListener("transition-in-complete", onEnterComplete);
    window.addEventListener("transition-exit-complete", onExitComplete);

    return () => {
      window.removeEventListener("transition-in-complete", onEnterComplete);
      window.removeEventListener("transition-exit-complete", onExitComplete);
    };
  }, [router]);

  const navigate = (path: string) => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    pendingPath.current = path;

    window.dispatchEvent(new Event("start-transition"));
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
    </TransitionContext.Provider>
  );
};
