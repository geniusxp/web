import { Sidebar } from "@/app/events/sidebar";

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full">
      <Sidebar />
      {children}
    </div>
  );
}
