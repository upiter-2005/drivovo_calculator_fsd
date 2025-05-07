import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


interface ICalcStore {
    avans: number,
    months: number
    residual: number
    moved: boolean,
    setAvans: (val: number) => void
    setMonths: (val: number) => void
    setResidual: (val: number) => void
    sliderMoved: (val: boolean) => void
}

export const useCalcStore = create<ICalcStore>()(
  persist(
    (set) => (
      {
        avans: 5,
        months: 12,
        residual: 10,
        moved: false,
        setAvans: (val) => {
          set({avans: val})
        },
        setMonths: (val) => {
            set({months: val})
        },
        setResidual: (val) => {
            set({residual: val})
        },
        sliderMoved: (val) => {
            set({moved: val})
        },
      }
    ),
    {
      name: 'drivovo fsd',
      version: 0.1,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({avans: state.avans, months: state.months, residual: state.residual }),
    }
  )

)