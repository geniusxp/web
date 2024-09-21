import { Sidebar } from "@/components/app/sidebar";

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full">
      <aside className="flex flex-col h-screen sticky top-0 w-64 border-r max-md:hidden">
        <Sidebar />
      </aside>
      {children}
    </div>
  );
}
