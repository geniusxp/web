import { MobileSidebar } from "./mobile-sidebar";
import { ThemeSwitcher } from "./theme-switcher";

interface HeaderProps {
  eventName: string;
  pageName?: string;
}

export function Header({ eventName, pageName }: HeaderProps) {
  return (
    <header className="h-16 border-b flex items-center px-4 ">
      <div className="flex items-center gap-2 flex-1">
        <MobileSidebar />

        <h1 className="text-lg sm:text-xl font-bold flex-1">
          {eventName}{" "}
          {pageName ? (
            <span className="text-xs sm:text-sm md:text-base font-normal opacity-80 ml-1 space-x-1">
              <span>/</span>
              <h2 className="inline-flex">{pageName}</h2>
            </span>
          ) : null}
        </h1>
      </div>

      <ThemeSwitcher />
    </header>
  );
}
