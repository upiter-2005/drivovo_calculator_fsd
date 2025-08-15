'use client'
import {IStep1} from "./step1"
import { Label } from "@/shared/ui/label"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { quizStore } from "../store/quizStore"

export const Step4:React.FC<IStep1> = ({stepChange}) => {
    const {skills, setSkills, activeTarif} = quizStore()
    const validate = () => { 
        stepChange()
    }

    return (
        <>
          {
            <div>
                <div className="flex justify-between items-center mb-1">
                    <div>
                        <p className="linearText text-base mb-1.5">Тариф: {activeTarif}</p>
                        <p className="text-xs">Your driving skills:  </p>
                    </div>
                    <div>4/6</div>
                </div>
                <p className="text-xs font-light">We don’t hold exams However, it’s important for us to understand you won’t park your car into the nearest pole.</p>
                <RadioGroup defaultValue={skills || "«Блискавка» (початковий)"} className="py-3" onValueChange={(val) => setSkills(val)}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="«Блискавка» (початковий)" id="r1" className="border-[#F9521B] w-5 h-5" />
                        <Label htmlFor="r1" className="text-base font-normal">«Блискавка» (початковий)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="«Екстреміст» (впевнений)" id="r2" className="border-[#F9521B] w-5 h-5" />
                        <Label htmlFor="r2" className="text-base font-normal">«Екстреміст» (впевнений)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="«Фігаро» (нормальний)" id="r3" className="border-[#F9521B] w-5 h-5" />
                        <Label htmlFor="r3" className="text-base font-normal">«Фігаро» (нормальний)</Label>
                    </div>
                    </RadioGroup>
                
                <div className="flex justify-between gap-2">
                    <button className="w-full border border-[#FE31A1] textLinear text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={stepChange}>Skip</button>   
                    <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={validate}>Next</button>
                </div>
                
            </div>
          }
      </>
  )
}