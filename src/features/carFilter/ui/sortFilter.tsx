'use client'
import {
   DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { useState } from "react"
import icoSort from '@/../public/assets/images/sort.svg'
import checkSort from '@/../public/assets/images/checkSort.svg'
import Image from "next/image"
// import { useFilter } from "../hooks/useFilter";
import { useFilterStore } from "../store/filterStore";
import { cn } from "@/utils/cn"

const sorting = [
  {name: 'asc', label: 'Ціна за зростанням'},
  {name: 'desc', label: 'Ціна за спаданням'},
]

interface ISortFilter {
  className?: string
}
export const SortFilter:React.FC<ISortFilter> = ({className}) => {
  const [position, setPosition] = useState("Ціна за зростанням")
 // const {count, resetFilter} = useFilterStore();
  //useFilter();
  const {setSort} = useFilterStore();

  return (
    <div className={cn('', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className=" text-xs w-[143px]   h-[40] cursor-pointer py-1.5 px-1 rounded-[10] border border-[#878787] flex justify-center items-center gap-1 dark:text-white text-[#232323]"><Image src={icoSort} width={18} height={18} alt="drivovo" /> {position} </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup 
          value={position} 
          onValueChange={(val: string) => {
                                            setSort(val); 
                                            const el = sorting.find(el => val === el.name)
                                            setPosition(el?.label ||"Ціна за зростанням");

                                            }}>
            {sorting.map((el, i) => <DropdownMenuRadioItem 
                                      key={i} 
                                      value={el.name}>{el.label} {position === el.label && <Image src={checkSort} width={18} height={18} alt="drivovo" />}
                                    </DropdownMenuRadioItem>)}
            
          
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    
  )
}