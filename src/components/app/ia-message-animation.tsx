import Image from "next/image";
import { TypingTextAnimation } from "../animations/typing-text";

interface IAMessageAnimationProps {
  message: string;
  from?: string;
  avatar: string;
  disabled?: boolean;
}

export function IAMessageAnimation({
  from,
  message,
  avatar,
}: IAMessageAnimationProps) {
  return (
    <div className="flex flex-col gap-2 border bg-muted/25 shadow p-4 rounded-lg max-w-[95%]">
      {from ? (
        <header className="flex items-center gap-2 text-sm">
          <Image
            src={avatar}
            alt=""
            width={100}
            height={100}
            className="rounded-full size-8 object-contain bg-secondary font-light"
          />
          <span>
            <strong className="font-semibold">{from}</strong> sobre o evento{" "}
            <strong className="font-semibold">FIAP NEXT 2024</strong>
          </span>
        </header>
      ) : null}
      <TypingTextAnimation
        text={message}
        speed={10}
        className="text-secondary-foreground/75 text-sm leading-relaxed"
      />
    </div>
  );
}
