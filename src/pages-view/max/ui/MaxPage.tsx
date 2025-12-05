// import { CarData } from "@/shared/types/carAcf";
// import { fetchData } from "@/shared/api";

import Image from 'next/image' 
// export const dynamic = 'force-dynamic'

export async function MaxPage () {
  

    return ( <>
      <div className='flex flex-col pt-[70px] justify-center items-center'>
        <Image src="/assets/images/max-avatar.png" alt='' width={192} height={192}  />
        <p className='font-bold text-2xl mt-5' >Max Solovyov</p>
        <div>CEO & Co-Founder DRIVOVO</div>
        <div className='flex gap-3 my-6 '> 
          <a href="https://t.me/MSDrivovo" target='blank'><Image src="/assets/images/max-telega.svg" alt='' width={50} height={50}  /></a>
          <a href="https://wa.me/380676132493" target='blank'><Image src="/assets/images/max-whatsapp.svg" alt='' width={50} height={50}  /></a>
          <a href="https://www.linkedin.com/in/max-solovyov/" target='blank'><Image src="/assets/images/max-linkedin.svg" alt='' width={50} height={50}  /></a>
          <a href="https://www.facebook.com/SolovyovMax" target='blank'><Image src="/assets/images/max-fb.svg" alt='' width={50} height={50}  /></a>
        </div>
        <div className="flex flex-col justify-center items-center mb-20">
          <a href="mailto:ms@drivovo.com">ms@drivovo.com</a>
          <a href="tel:+38 067 613 24 93">+38 067 613 24 93</a>
          <a href="tel:+48 792 206 964">+48 792 206 964</a>
         <br />
          <a href="https://calendly.com/msdrivovo/30min" target="blank" className="max-btns-btn">Schedule a meeting</a>
          <a href="https://share.hsforms.com/1qQyTe69ATnW62E7ftvBxmgc3ag1?__hstc=268868462.c260e6fbfda67c2902711b2294b73d98.1753788659857.1758909894605.1758911960497.9&amp;__hssc=268868462.1.1758911960497&amp;__hsfp=333733472" target="blank" className="max-btns-btn">Сooperation</a>
          <a href="https://t.me/drive_it_easy_bot" target="blank" className="max-btns-btn">All about Drivovo [TG bot]</a>
        </div>
      </div>
    </> )
}