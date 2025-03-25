import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


interface IntersectionSwitches {
    activeBlock: string,
    activeBlockHandler: (val:string) => void
}

export const useIntersectionSwithes = create<IntersectionSwitches>()(
  persist(
    (set) => (
      {
        activeBlock: '' ,
        activeBlockHandler: (val) => {
          set({activeBlock: val})
        },
      }
    ),
    {
      name: 'drivovo fsd',
      version: 0.1,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({activeBlock: state.activeBlock, }),
    }
  )

)