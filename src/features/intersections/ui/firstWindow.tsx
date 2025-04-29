'use client'
import { RedButton } from "@/shared/ui/redButton"
import { useEffect, useState, useRef } from "react";
import { useClickAway } from "react-use";
import { useIntersectionSwithes } from "../actions/intersectionSlice";

export const FirstWindow:React.FC = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const {activeBlock} = useIntersectionSwithes()
    const ref = useRef(null);

    useClickAway(ref, () => {
        setIsVisible(false)
    });

    useEffect(()=>{
        if (activeBlock == 'firstWindow') {
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
        console.log(activeBlock);
    }, [activeBlock])

    
    return (
        <div className={ isVisible ? "communicationModal activeModal" : "communicationModal" } ref={ref}>
            <p className="text-[#C74C05] text-xs pb-3">Lorem ipsum dolor sit amet consectetur. Cras aliquam suspendisse amet fermentum enim.</p>
            <RedButton text='Book a test drive'  />
        </div>
    )
}