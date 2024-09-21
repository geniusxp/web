import { MobileSidebar } from "./mobile-sidebar";
import { ThemeSwitcher } from "./theme-switcher";

interface HeaderProps {
  eventName: string;
  pageName?: string;
}

export function Header({ eventName, pageName }: HeaderProps) {
  return (
    <header className="h-16 border-b flex items-center justify-between px-4 text-sm sm:text-base">
      <div className="flex items-center gap-2">
        <MobileSidebar />

        <h1 className="text-lg sm:text-xl font-bold">{eventName}</h1>
        {pageName ? (
          <>
            <span className="opacity-80">/</span>
            <h2 className="opacity-80">{pageName}</h2>
          </>
        ) : null}
      </div>

      <ThemeSwitcher />
    </header>
  );
}
