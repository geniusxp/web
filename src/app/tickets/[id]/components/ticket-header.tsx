import Image from "next/image";

interface TicketHeaderProps {
  eventName: string;
}

export function TicketHeader({ eventName }: TicketHeaderProps) {
  return (
    <header className="container flex items-center gap-3 py-3 border-b text-sm sm:text-base">
      <Image
        src="/logo.svg"
        alt="GeniusXP"
        width={51}
        height={42}
        className="invert dark:invert-0 mix-blend-difference h-16 w-auto"
      />
      <span className="opacity-50">/</span>
      <Image
        height={32}
        width={32}
        className="size-8 rounded"
        src="/fiap-logo.png"
        alt="FIAP"
      />
      <h2 className="opacity-80">{eventName}</h2>
    </header>
  );
}
