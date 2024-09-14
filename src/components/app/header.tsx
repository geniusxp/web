import { ThemeSwitcher } from "./theme-switcher";

interface HeaderProps {
  eventName: string;
  pageName?: string;
}

export function Header({ eventName, pageName }: HeaderProps) {
  return (
    <header className="h-16 border-b flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">{eventName}</h1>
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
