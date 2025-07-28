import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


interface ICalcStore {
    avans: number,
    months: number,
    residual: number,
    moved: boolean,
    isCalcOpen: boolean,
    setAvans: (val: number) => void,
    setIsCalcOpen: (val: boolean) => void,
    setMonths: (val: number) => void,
    setResidual: (val: number) => void,
    sliderMoved: (val: boolean) => void
}

export const useCalcStore = create<ICalcStore>()(
  persist(
    (set) => (
      {
        avans: 10,
        months: 36,
        residual: 25,
        moved: false,
        isCalcOpen: false,
        setAvans: (val) => {
          set({avans: val})
        },
        setIsCalcOpen: (val) => {
          set({isCalcOpen: val})
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