'use client'
import { useIntersectionSwithes } from '@/features/intersections/actions/intersectionSlice';
import { useEffect } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

export const Block1:React.FC = () => {

    const {activeBlockHandler} = useIntersectionSwithes();

    const { isIntersecting, ref } = useIntersectionObserver({
        threshold: 0.8,
      })

      useEffect(()=>{
        if(isIntersecting){
            activeBlockHandler("");
            activeBlockHandler("firstWindow");
        }else{
            activeBlockHandler("");
        }
        console.log("Block 1  ---  isIntersectingisIntersectingisIntersecting");
      }, [isIntersecting, activeBlockHandler])

console.log(`Render Section`, {
    isIntersecting,
  })
    return (
      
        <section ref={ref} className="w-full min-h-[100vh] firstBaner flex flex-col   items-center justify-center pr-[72px] pl-4 text-white">
            <h1 className="linearText text-[38px] font-600 text-left leading-11 mb-5 pl-0">Car as a Service <br />
            (CaaS)</h1>
            <p className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia, voluptate non itaque consectetur aut, nisi perferendis tenetur voluptas quis soluta molestiae facere dolor eius nulla laboriosam aperiam vero tempora?</p>
        </section>
    )
}