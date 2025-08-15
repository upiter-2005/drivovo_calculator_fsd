'use client'
import { useState } from "react"
import { quizStore } from "../store/quizStore"
import {IStep1} from "./step1"
import { Input } from "@/shared/ui/input"
import { isValidPhone } from "@/utils/isValidatePhone"

export const Step2:React.FC<IStep1> = ({stepChange}) => {
   const {phone, setPhone, activeTarif} = quizStore()
    const [error, setError] = useState<string | null>(null)
        const validate = (val: string) => {
            console.log("validate");
            if(!isValidPhone(val)) {
                setError('Невірний формат номеру');
                return false;
            }
            stepChange()
        }
    return (
            <>
            <div className="flex justify-between items-center mb-1">
                <div>
                    <p className="linearText text-base mb-1.5">Тариф: {activeTarif}</p>
                    <p className="text-xs">Phone</p>
                </div>
                    <div>2/6</div>
                </div>
                <p className="text-xs font-light">Щоб закріпити за номером персонального менеджера та бонусний рахунок.</p>
               
                <div className='flex gap-[6px] mt-3 mb-[6px] w-full'>
                
                    <div className='w-[77px]'><Input placeholder="+038" value="+38" disabled={true} changeVal={() => {return true;}} />
                        </div>
                        <div className="flex-1">
                            
                            <Input 
                                placeholder='093 000 00 00'
                                value={phone}
                                changeVal={(e)=>setPhone(e.target.value)}
                        />
                        </div>
                    
                </div>

                 {error && <p className="text-[10px] text-red-600 m-0">{error}</p>}
                <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={() => validate(phone)}>Next</button>
            </>
                
            
    
  )
}