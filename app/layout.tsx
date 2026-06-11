import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( 
<html lang="en"> 
  <body className="bg-slate-100"> 
    <Sidebar /> 
    <div className="ml-64 min-h-screen">
      {children} 
    </div> 
  </body> 
</html>
);
}
