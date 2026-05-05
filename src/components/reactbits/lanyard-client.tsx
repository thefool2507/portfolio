"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

const Lanyard = dynamic(() => import("@/components/reactbits/lanyard"), {
  ssr: false,
  loading: () => null, // ✅ tidak ada flash saat loading
});

export function LanyardClient() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(window.innerWidth > 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      right: 0,
      top: 0,
      width: "100%",
      height: "100vh",
      zIndex: 0,
      pointerEvents: "none",
    }}>
      <div style={{ width: "100%", height: "100%", pointerEvents: "auto" }}>
        {/* ✅ Suspense double layer */}
        <Suspense fallback={null}>
          <Lanyard />
        </Suspense>
      </div>
    </div>
  );
}