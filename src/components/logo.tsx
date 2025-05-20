import Image from "next/image";
import { logo } from "@/assets/images";

export function Logo() {
  return (
    <div className="flex justify-center h-22.5 w-80">
      <Image
        aria-hidden
        src={logo}
        alt="LOGO"
        width={320}
        height={90}
        className="cursor-pointer"
      />
    </div>
  );
}
