import Image from "next/image";

export function EventBanner() {
  return (
    <div className="relative h-52 w-full rounded-lg overflow-hidden bg-card">
      <Image src="/fiap-banner.png" fill alt="" className="absolute inset-0" />
    </div>
  );
}
