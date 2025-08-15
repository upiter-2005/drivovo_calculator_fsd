'use client'
import { useState } from "react";
import { quizStore } from "../store/quizStore";
import { Input } from "@/shared/ui/input";
import { isValidEmail } from "@/utils/isValidEmail";
export interface IStep1 {
    stepChange: () => void
}

export const Step3:React.FC<IStep1> = ({stepChange}) => {
    const {email, setEmail, activeTarif} = quizStore()
    const [error, setError] = useState<string | null>(null)

    const validate = (val: string) => {
        if(!isValidEmail(val)) {
            setError('Невірний формат пошти');
            return false;
        }
        stepChange()
    }
    return (
        <>
          {
            <div>
                <div className="flex justify-between items-center mb-1">
                    <div>
                        <p className="linearText text-base mb-1.5">Тариф: {activeTarif}</p>
                        <p className="text-xs">Email  </p>
                    </div>
                    <div></div>
                    <div>3/6</div>
                </div>
                <p className="text-xs font-light">Для відправки розрахунку, графіків платежів та шаблонів договорів.</p>
                <Input type='email' placeholder='Enter Your Email' className="mt-3" value={email} changeVal={(e)=>setEmail(e.target.value)}/>
               
                {error && <p className="text-[10px] text-red-600 m-0">{error}</p>}
                <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={() => validate(email)}>Next</button>
            </div> 
          }
      </>
  )
}