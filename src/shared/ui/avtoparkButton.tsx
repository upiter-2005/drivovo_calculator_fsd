import { cn } from "@/utils/cn"
import Link from "next/link"
import Image from "next/image";

interface IAvtoparkButton {
  className?: string
}
export const AvtoparkButton:React.FC<IAvtoparkButton> = ({className}) => {
  return (
    <Link href='/catalog' className={cn('catalogBtn', className)}>
      Обрати авто
      <span className="redGradient rounded-full"><Image src="/assets/images/arrow.svg" width="23" height={23} alt="drivovo" / ></span>
      </Link>
  )
}