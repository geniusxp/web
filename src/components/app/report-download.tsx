"use client";

import { Button } from "@/components/ui/button";
import { FileDown, Loader2 } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function ReportDownload() {
  const [isGenerating, setIsGenerating] = useState(false);

  function handleDownload() {
    setIsGenerating(true);
    setTimeout(() => {
      const fileName = "/GeniusXP - Análise pós evento.pdf";
      const link = document.createElement("a");
      link.href = fileName;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsGenerating(false);
    }, 2000);
  }

  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            className="fixed bottom-8 right-8 md:size-12"
            disabled={isGenerating}
            onClick={handleDownload}
          >
            {isGenerating ? (
              <Loader2 className="animate-spin" />
            ) : (
              <FileDown className="size-4 md:size-6" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-white text-slate-600 border-slate-200">Gerar relatório</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
