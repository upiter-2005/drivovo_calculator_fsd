'use client'
import { Checkbox } from "@/shared/ui/checkbox"
import { FilterItem } from "../store/filtersParams"
// import { useEffect, useState } from "react"

interface ICheckboxGroup {
  data: FilterItem[],
  title: string,
  checkedItems?: Set<string>
  changeVal: (val: string) => void
}
export const CheckboxGroup:React.FC<ICheckboxGroup> = ({data, title, changeVal, checkedItems}) => {
//   const [loaded, setLoaded] = useState<boolean>(false)
//   useEffect(() => {
//     setLoaded(true)
//   }, [checkedItems])

  
  // if(!loaded) return
  return (
    <div className="border-b border-[#3d3d3d] py-4 flex flex-col gap-3">
      <p className="text-left font-bold text-base mb-3 flex items-center">
        {title} 
        {/* <span className="w-[22] h-[22] ml-3 text-white redGradient flex items-center justify-center rounded-full text-xs">1</span> */}
      </p>
      {data.map((el) =>( <div key={el.key} className="flex items-center">
        <Checkbox 
        className="cursor-pointer"
        id={el.key}
        onCheckedChange={() => changeVal(el.key)} 
        checked={checkedItems && Array.from(checkedItems).includes(el.key)
      }
        /> 
        <label className="pl-2 text-[14px] cursor-pointer dark:text-white text-[#232323]" htmlFor={el.key}>
				  {el.label}
			  </label>
      </div>))}
    </div>
  )
}