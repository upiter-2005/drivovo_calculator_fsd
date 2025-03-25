
//import { useFormContext } from "react-hook-form"

import { cn } from "@/utils/cn"
//import { ErrorText } from "./errorText"


// import { Eye, EyeOff } from "lucide-react"

interface InputType {
  className?: string
  placeholder: string
  type?: 'text' | string
  name?: string
  eye?: boolean,
  changeType?: () => void
}

export const Input:React.FC<InputType> = ({className, type, placeholder}) => {


  return(
    <div className="relative w-full">
     
        <input type={type} placeholder={placeholder} className={cn('text-md w-full border border-solid border-white/30 rounded-[10px] bg-[#333] placeholder:text-[#fff] focus-within:outline-none autofill:bg-transparent py-[6px] px-3', className)} />
      
      </div>
      
 

  )
}