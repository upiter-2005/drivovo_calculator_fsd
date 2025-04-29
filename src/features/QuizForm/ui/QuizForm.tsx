'use client'
import { useIntersectionSwithes } from "@/features/intersections/actions/intersectionSlice";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useClickAway } from "react-use";

import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";

export const QuizForm:React.FC = () => {

    const [step, setStep] = useState<number>(1);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const {activeBlock, activeBlockHandler} = useIntersectionSwithes();
    const ref = useRef<HTMLDivElement>(null);

    useClickAway(ref, () => {
        console.log("handler child");
        setIsVisible(false);
        activeBlockHandler("");
       
    });

    useEffect(()=>{
        if (activeBlock === "openQuizForm") {
            setIsVisible(true);
        }

        return () => {
            setStep(1)
        }
    }, [activeBlock])

    const stepChange = () => {
        setStep(prev => prev + 1)
    }

    console.log(activeBlock);
    if (!activeBlock) return null;
    return (
        <>
          {
              createPortal(
                  <div ref={ref} className={ isVisible ? "communicationModal activeModal " : "communicationModal" } >
                    {step === 1 && <Step1 stepChange={stepChange} />}
                    {step === 2 && <Step2 stepChange={stepChange} />}
                    {step === 3 && <Step3 stepChange={stepChange} />}
                    {step === 4 && <Step4 stepChange={stepChange} />}
                  </div>,
                  window.document.body
              )
          }
      </>
  )
}