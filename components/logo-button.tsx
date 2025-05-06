import Link from "next/link"
import Image from "next/image"

export function LogoButton() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-10 h-10 relative">
        <Image src="/images/pain-logo.png" alt="Pain Gaming Logo" width={40} height={40} className="object-contain" />
      </div>
      <span className="text-xl font-bold">FANS</span>
    </Link>
  )
}
