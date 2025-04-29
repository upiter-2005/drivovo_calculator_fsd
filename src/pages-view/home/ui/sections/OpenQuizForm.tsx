'use client'
import { useIntersectionSwithes } from '@/features/intersections/actions/intersectionSlice';

export const OpenQuizForm:React.FC = () => {

    const {activeBlockHandler} = useIntersectionSwithes();

    const openQuizForm = () => {
        activeBlockHandler("openQuizForm")
        console.log("openQuizForm");
    }

    return (
       
       <button className={'w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]'} onClick={openQuizForm}> openQuizForm </button>
    )
}