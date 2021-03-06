import Image from "next/image";
import Link from "next/link";

export default function ImageLogo(): JSX.Element {
  return (
    <Link href="/">
      <a className="inline-block">
        <Image
          priority
          src="/assets/logo.png"
          height={55}
          width={55}
          layout="fixed"
          alt="Logo"
          className="w-auto h-12 sm:h-10"
        />
      </a>
    </Link>
  );
}
