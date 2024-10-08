import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { LogOutIcon } from "lucide-react";
import { SiderbarLinks } from "./sidebar-links";

export function Sidebar() {
  return (
    <>
      <div className="h-16 border-b px-5 flex items-center">
        <Link href="/events">
          <Image
            src="/logo.svg"
            alt="GeniusXP"
            width={51}
            height={42}
            className="invert dark:invert-0 mix-blend-difference"
          />
        </Link>
      </div>
      <nav className="flex-1">
        <SiderbarLinks />
      </nav>
      <div className="h-16 border-t flex items-center gap-3 px-5">
        <Avatar className="size-8">
          <AvatarImage src="/ericknathan.png" />
          <AvatarFallback>EN</AvatarFallback>
        </Avatar>
        <div className="grid">
          <span className="text-sm">Erick Nathan</span>
          <span className="text-[11px] text-muted-foreground">
            @ericknathan
          </span>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="ml-auto border border-input"
          asChild
        >
          <Link href="/auth/signin">
            <LogOutIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </>
  );
}
