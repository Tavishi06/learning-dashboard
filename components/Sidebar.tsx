"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BarChart3,
  User,
  Settings,
  Shield,
  LogIn,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="
  h-screen
  bg-slate-900
  text-white
  shadow-2xl
  overflow-hidden

  w-64
  md:w-20
  lg:w-64
">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl lg:text-3xl font-bold">
          LearnTrack
        </h1>

        <p className="text-slate-400 mt-2 hidden lg:block">
          Learning Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 p-4">

        {/* Dashboard */}
        <Link
          href="/"
          className="flex items-center md:justify-center lg:justify-start gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
        >
          <LayoutDashboard size={20} />
          <span className="hidden lg:block">Dashboard</span>
        </Link>

        {/* Analytics */}
        <Link
          href="/analytics"
          className="flex items-center md:justify-center lg:justify-start gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
        >
          <BarChart3 size={20} />
          <span className="hidden lg:block">Analytics</span>
        </Link>

        {/* Profile */}
        <Link
          href="/profile"
          className="flex items-center md:justify-center lg:justify-start gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
        >
          <User size={20} />
          <span className="hidden lg:block">Profile</span>
        </Link>

        {/* Settings */}
        <Link
          href="/settings"
          className="flex items-center md:justify-center lg:justify-start gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
        >
          <Settings size={20} />
          <span className="hidden lg:block">Settings</span>
        </Link>

        {/* Admin */}
        <Link
          href="/admin"
          className="flex items-center md:justify-center lg:justify-start gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
        >
          <Shield size={20} />
          <span className="hidden lg:block">Admin</span>
        </Link>

        {/* Login */}
        <Link
          href="/login"
          className="flex items-center md:justify-center lg:justify-start gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
        >
          <LogIn size={20} />
          <span className="hidden lg:block">Login</span>
        </Link>

      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-full p-5 border-t border-slate-700">
        <p className="text-slate-400 text-sm hidden lg:block">
          Logged In As
        </p>
        <p className="font-semibold mt-1 text-center lg:text-left">
          Tavishi
        </p>
      </div>
    </aside>
  );
}