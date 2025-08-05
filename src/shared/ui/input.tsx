
//import { useFormContext } from "react-hook-form"

import { cn } from "@/utils/cn"
import { ChangeEvent } from "react"
//import { ErrorText } from "./errorText"


// import { Eye, EyeOff } from "lucide-react"

interface InputType {
  className?: string
  placeholder: string
  disabled?: true | false
  type?: 'text' | string
  name?: string
  eye?: boolean,
  value: string | number,
  changeType?: () => void
  changeVal: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input:React.FC<InputType> = ({className, type, placeholder, changeVal, value, disabled=false}) => {


  return(
    <div className="relative w-full">
     
        <input type={type} placeholder={placeholder} className={cn('text-md w-full border border-solid dark:border-white/30 border-[#d0d0d0] rounded-[10px] dark:bg-[#333]  placeholder:dark:text-[#fff] focus-within:outline-none autofill:bg-transparent py-[6px] px-3', className)} value={value} onChange={changeVal} disabled={disabled} />
      
      </div>
      
 

  )
}