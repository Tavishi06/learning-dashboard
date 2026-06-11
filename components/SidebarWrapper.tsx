"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

export default function SidebarWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 text-white">
        <h1 className="font-bold">LearnTrack</h1>

        <button onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {/* Mobile Sidebar (Drawer) */}
      {open && (
        <div className="md:hidden fixed top-0 left-0 w-64 h-full z-50">
          <Sidebar />
        </div>
      )}

      {/* Desktop + Tablet Sidebar */}
      <div className="hidden md:block fixed top-0 left-0 h-screen z-40">
        <Sidebar />
      </div>
    </>
  );
}