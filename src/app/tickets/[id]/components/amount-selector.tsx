"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

export function AmountSelector() {
  const [amount, setAmount] = useState(0);

  function handleIncrease() {
    setAmount((amount) => amount + 1);
  }

  function handleDecrease() {
    setAmount((amount) => Math.max(0, amount - 1));
  }

  return (
    <div className="flex items-center gap-2">
      <Button size="icon" onClick={handleDecrease}>
        <MinusIcon className="size-4" />
      </Button>
      <Input
        className="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none"
        defaultValue={0}
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
        min={0}
      />
      <Button size="icon" onClick={handleIncrease}>
        <PlusIcon className="size-4" />
      </Button>
    </div>
  );
}
