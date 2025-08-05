'use client'
import { useState } from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";
import { Step5 } from "./step5";
import { Step6 } from "./step6";

export interface IStep6 {
    closeForm: () => void
}
export const QuizForm:React.FC<IStep6> = ({closeForm}) => {
    const [step, setStep] = useState<number>(1);
    const stepChange = () => {
        setStep(prev => prev + 1)
    }

    return (
        <>
            <div  className="" >
                {step === 1 && <Step1 stepChange={stepChange} />}
                {step === 2 && <Step2 stepChange={stepChange} />}
                {step === 3 && <Step3 stepChange={stepChange} />}
                {step === 4 && <Step4 stepChange={stepChange} />}
                {step === 5 && <Step5 stepChange={stepChange} />}
                {step === 6 && <Step6 closeForm={closeForm}  />}
            </div>
      </>
  )
}