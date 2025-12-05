'use client'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet"
import Image from "next/image"
import icoFilter from '@/../public/assets/images/filter.svg'
import { CalcFilter, SortFilter } from "@/features/carFilter"
import { useEffect, useState } from "react"

export const FilterWidget:React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);
  
  return (
    <>


    {isMobile ? (
        <div className="flex text-white min-w-[290px] lg:hidden justify-between pr-[82px] p-4 gap-2">

        <Sheet>
          <SheetTrigger asChild>
            <button className="text-white text-sm  w-[143px]  h-[40px] cursor-pointer py-1.5 px-1 rounded-[10] border border-[#878787] flex justify-center items-center gap-1"><Image src={icoFilter} width={18} height={18} alt="drivovo" />
            Фільтр</button>
            
            </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle><Image src={icoFilter} width={18} height={18} alt="drivovo" />
            Фільтр</SheetTitle>
                
            </SheetHeader>
            <CalcFilter />
          </SheetContent>
        </Sheet>

        <SortFilter />
      </div>
      ) : (
         <div className="lg:flex text-white flex-1 p-1 hidden "><CalcFilter /></div>
      )}

   
      
    </>
  )
}