import "./globals.css";
import SidebarWrapper from "@/components/SidebarWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100">

        <SidebarWrapper />

        <main className="min-h-screen bg-slate-100 ml-0 md:ml-20 lg:ml-64">
          {children}
        </main>

      </body>
    </html>
  );
}