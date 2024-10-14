"use client";

import { Toaster } from "@/components/ui/sonner";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
      <Analytics />
    </QueryClientProvider>
  );
}
