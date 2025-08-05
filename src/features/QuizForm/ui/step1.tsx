'use client'
import { useState } from "react";
import { quizStore } from "../store/quizStore";
import { Input } from "@/shared/ui/input";
export interface IStep1 {
    stepChange: () => void
}

export const Step1:React.FC<IStep1> = ({stepChange}) => {
    const {name, setName} = quizStore()
    const [error, setError] = useState<string | null>(null)
    const validate = (val: string) => {
        console.log("validate");
        if(val.length < 2) {
            setError('Занадто коротко, введіть більше символів!');
            return false;
        }
        stepChange()
    }
    
    return (
        <>
          {
            <div>
                <div className="flex justify-between items-center mb-1">
                    <div>Enter your name</div>
                    <div>1/6</div>
                </div>
                {/* <p className="text-xs font-light">For us to agree on the details of the test drive</p> */}
                <Input 
                    placeholder='Enter Your Name' 
                    className="mt-3"
                    value={name}
                    changeVal={(e)=>setName(e.target.value)}
                />
                {error && <p className="text-[10px] text-red-600 m-0">{error}</p>}
                <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={() => validate(name)}>Next</button>
            </div> 
          }
      </>
  )
}