'use client'

import Image from "next/image"
import { useFilter } from "../hooks/useFilter";
import { useFilterStore } from "../store/filterStore";
import {FilterItem, filtersParams} from '../store/filtersParams'
import { SortFilter } from "./sortFilter";



export const ActiveFilters:React.FC = () => {
  const {count, resetFilter} = useFilterStore();
 useFilter();
  const {brands,
          type,
          patrol,
          discount,
          avail,
          toggleBrand,
          toggleType,
          togglePatrol,
          toggleDiscount,
          toggleAvail} = useFilterStore();
          getParamName(filtersParams.type, 'suv')

function getParamName(arr: FilterItem[], key: string): string | undefined{
  const result = arr.find(el => el.key === key)
  if(result) return result.label
}

  return (
    <div className="font-base text-white p-4 ">
      <div className="mb-3 flex justify-between">
        <div className="flex-1">
          {count} моделі 
          <button 
          onClick={() => resetFilter()}
          className="redGradient px-2 py-1 rounded-[10px] font-sm ml-2 cursor-pointer">Скинути всі</button>
        </div>
           <SortFilter className="w-[160px] hidden md:flex" />
      </div>
       {!count && <div className="mb-6">
        <p className="text-2xl font-bold">Схоже, ми не можемо знайти жодного збігу.</p>
        <span className="text-[#878787] text-base">Спробуйте прибрати деякі фільтри, щоб побачити кращі авто.</span>
        </div>}

      <div className="flex gap-1.5 items-center flex-wrap pr-[58px]">
          {(!count && !!Array.from(brands).length) && <p className="font-bold text-base w-full mb-2">Марка</p>}
        {( brands) && Array.from(brands).map((item) =>  (
          <button 
            key={item} 
            onClick={() => { toggleBrand(item); }}
            className="rounded-[10px] px-2 py-1 text-xs border border-[#3d3d3d] flex gap-2 cursor-pointer dark:text-white text-[#232323]">{item} <Image src="/assets/images/closeActive.svg" width={8} height={8} alt='drivovo'/>
          </button>
          ) )}
      {(!count && !!Array.from(type).length) && <p className="font-bold text-base w-full mb-2">Тип кузова</p>}
        {( type) && Array.from(type).map((item) =>  (
          <button 
            key={item} 
            onClick={() => { toggleType(item); }}
            className="rounded-[10px] px-2 py-1 text-xs border border-[#3d3d3d] flex gap-2 cursor-pointer dark:text-white text-[#232323]">{getParamName(filtersParams.type, item)} <Image src="/assets/images/closeActive.svg" width={8} height={8} alt='drivovo'/>
          </button>
          ) )}


{(!count && !!Array.from(patrol).length) && <p className="font-bold text-base w-full mb-2">Тип палива</p>}
        {( patrol) && Array.from(patrol).map((item) =>  (
          <button 
            key={item} 
            onClick={() => { togglePatrol(item); }}
            className="rounded-[10px] px-2 py-1 text-xs border border-[#3d3d3d] flex gap-2 cursor-pointer dark:text-white text-[#232323]">{getParamName(filtersParams.patrol, item)} <Image src="/assets/images/closeActive.svg" width={8} height={8} alt='drivovo'/>
          </button>
          ) )}
         {( discount) && Array.from(discount).map((item) =>  (
          <button 
            key={item} 
            onClick={() => { toggleDiscount(item); }}
            className="rounded-[10px] px-2 py-1 text-xs border border-[#3d3d3d] flex gap-2 cursor-pointer dark:text-white text-[#232323]">{getParamName(filtersParams.discount, item)} <Image src="/assets/images/closeActive.svg" width={8} height={8} alt='drivovo'/>
          </button>
          ) )}
       {( avail) && Array.from(avail).map((item) =>  (
          <button 
            key={item} 
            onClick={() => { toggleAvail(item); }}
            className="rounded-[10px] px-2 py-1 text-xs border border-[#3d3d3d] flex gap-2 cursor-pointer dark:text-white text-[#232323]">{getParamName(filtersParams.available, item)} <Image src="/assets/images/closeActive.svg" width={8} height={8} alt='drivovo'/>
          </button>
          ) )} 
      </div>

     
    </div>
  )
}