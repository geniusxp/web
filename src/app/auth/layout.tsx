import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid md:grid-cols-2 w-full">
      <div className="md:sticky top-0 md:h-screen flex flex-col justify-between items-start bg-[url(/auth-background.png)] bg-no-repeat bg-cover bg-zinc-900 p-12 max-md:gap-8">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="GeniusXP" width={100} height={120} />
        </div>
        <p className="text-lg max-w-[463px]">
          A melhor experiência em eventos que você já viu! Faça login para obter
          uma experiência completa!
        </p>
      </div>
      <div className="border-l p-12 bg-[url(/pattern-background.png)] bg-contain bg-no-repeat bg-center">
        {children}
      </div>
    </div>
  );
}
