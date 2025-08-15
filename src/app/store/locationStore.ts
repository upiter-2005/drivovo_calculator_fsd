import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ILocationState {
  location: string,
  setLocation: (val:string) => void
}

export const useLocationStore = create<ILocationState>()(
  persist(
    (set) => (
      {
        location: 'nextcar',
        setLocation: (val) => {
          set({location: val})
        },
       
      }
    ),
    {
      name: 'drivovo fsd',
      version: 0.1,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({location: state.location }),
    }
  )

)
