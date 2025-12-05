'use client'

import { CheckboxGroup } from "./checkboxGroup"
import {filtersParams} from '../store/filtersParams'
import { useFilter } from "../hooks/useFilter"
import { useFilterStore } from "../store/filterStore"


export const CalcFilter:React.FC = () => {
  useFilter ();

  const {brands,
          type,
          patrol,
          discount,
          avail,
          toggleBrand,
          toggleType,
          togglePatrol,
          toggleDiscount,
          toggleAvail
    } = useFilterStore()


  const filtersArray = [
    {
      data: filtersParams.brands,
      checkedItems: brands,
      title: "Марка",
      toggleFn: toggleBrand
    },
    {
      data: filtersParams.type,
      checkedItems: type,
      title: "Тип кузова",
      toggleFn: toggleType
    },
    {
      data: filtersParams.patrol,
      checkedItems: patrol,
      title: "Тип палива",
      toggleFn: togglePatrol
    },
    {
      data: filtersParams.discount,
      checkedItems: discount,
      title: "Акція",
      toggleFn: toggleDiscount
    },
    {
      data: filtersParams.available,
      checkedItems: avail,
      title: "Наявність",
      toggleFn: toggleAvail
    }
  ]


  return (
    <div className="w-full text-white h-[calc(100%-40px)] overflow-y-auto no-scrollbar">
      {filtersArray.map((filterItem, i) => (
        <CheckboxGroup 
        key={i} 
        data={filterItem.data} 
        checkedItems={filterItem.checkedItems} 
        title={filterItem.title} 
        changeVal={val =>  filterItem.toggleFn(val)} />)
      )}
    </div>
  )
}