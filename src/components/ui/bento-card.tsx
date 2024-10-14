"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

interface BentoCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
  setReadMoreOpen?: (value: boolean) => void;
}

export function BentoCard({
  icon,
  title,
  description,
  className,
  children,
  setReadMoreOpen,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "bg-card border rounded-xl group min-h-80 relative overflow-hidden [box-shadow:0_-20px_80px_-20px_#F62DE010_inset]",
        className
      )}
    >
      <div className="grid absolute p-6 bottom-0 bg-gradient-to-t from-black/50 to-black/0 w-full z-10">
        <div className="grid gap-3 transition-all duration-300 group-hover:-translate-y-10">
          <Image
            src={icon}
            alt=""
            width="25"
            height="25"
            className="size-12 group-hover:scale-75 origin-left ease-in-out transform-gpu transition-all duration-300"
          />
          <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
          <p className="text-muted-foreground text-sm max-w-md">
            {description}
          </p>
        </div>

        {setReadMoreOpen && (
          <div
            className={cn(
              "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 pt-0 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            )}
          >
            <Button
              variant="ghost"
              size="sm"
              className="pointer-events-auto"
              onClick={() => setReadMoreOpen(true)}
            >
              Leia mais
              <ArrowRightIcon className="ml-2 size-4" />
            </Button>
          </div>
        )}
      </div>
      <div className="absolute inset-0 z-0 opacity-75 transition-all duration-300 ease-out group-hover:scale-[102%] group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
}
