"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

export function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex flex-col items-center justify-center bg-card py-3 px-6 rounded-md border text-center aspect-square h-full">
        <strong className="text-4xl tabular-nums">{timeLeft.days}</strong>
        <small className="text-sm">dias</small>
      </div>
      <span className="text-primary text-4xl font-bold">:</span>
      <div className="flex flex-col items-center justify-center bg-card py-3 px-6 rounded-md border text-center aspect-square h-full">
        <strong className="text-4xl tabular-nums">{timeLeft.hours}</strong>
        <small className="text-sm">horas</small>
      </div>
      <span className="text-primary text-4xl font-bold">:</span>
      <div className="flex flex-col items-center justify-center bg-card py-3 px-6 rounded-md border text-center aspect-square h-full">
        <strong className="text-4xl tabular-nums">{timeLeft.minutes}</strong>
        <small className="text-sm">mins</small>
      </div>
      <span className="text-primary text-4xl font-bold">:</span>
      <div className="flex flex-col items-center justify-center bg-card py-3 px-6 rounded-md border text-center aspect-square h-full">
        <strong className="text-4xl tabular-nums">{timeLeft.seconds}</strong>
        <small className="text-sm">segs</small>
      </div>
    </div>
  );
}
