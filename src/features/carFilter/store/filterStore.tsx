import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type SetType = Set<string>
type ToggleType =  {[k: string]: string}

interface IFilterStore {
  count: number,
  setCount: (val: number) => void,
  resetFilter: () => void,
  brands: SetType,
  toggleBrand: (val: string) => void,
  setFiltersFromUrl: (params: ToggleType) => void
  type: SetType, 
  toggleType: (val: string) => void,
  patrol: SetType,
  togglePatrol: (val: string) => void,
  discount: SetType, 
  toggleDiscount: (val: string) => void,
  avail: SetType, 
  toggleAvail: (val: string) => void,
  sort: string , 
  setSort: (val: string) => void
}

export const useFilterStore = create<IFilterStore>()(
  persist(
    (set) => (
      {
        sort: "asc",
        setSort: (val: string) => {set({ sort: val })},
        count: 0,
        setCount: (val: number) => {
          set({ count: val })
        },
        resetFilter: () => {
          set({
            brands: new Set(),
            type: new Set(),
            patrol: new Set(),
            discount: new Set(),
            avail: new Set(),

          })
        },
        brands: new Set(),
        toggleBrand: (brand) => {
            set((state) => {
            const updated = new Set(state.brands);
            if (brand) {
              if (updated.has(brand)) {
                updated.delete(brand);
              } else {
                updated.add(brand);
              }
            }
            return { brands: updated };
          })
        },
        type: new Set(),
        toggleType: (type) => {
            set((state) => {
            const updated = new Set(state.type);
            if (type) {
              if (updated.has(type)) {
                updated.delete(type);
              } else {
                updated.add(type);
              }
            }
            return { type: updated };
          })
        },
        patrol: new Set(),
        togglePatrol: (patrol) => {
            set((state) => {
            const updated = new Set(state.patrol);
            if (patrol) {
              if (updated.has(patrol)) {
                updated.delete(patrol);
              } else {
                updated.add(patrol);
              }
            }
            return { patrol: updated };
          })
        },
        discount: new Set(),
        toggleDiscount: (discount) => {
            set((state) => {
            const updated = new Set(state.discount);
            if (discount) {
              if (updated.has(discount)) {
                updated.delete(discount);
              } else {
                updated.add(discount);
              }
            }
            return { discount: updated };
          })
        },
        avail: new Set(),
        toggleAvail: (avail) => {
            set((state) => {
            const updated = new Set(state.avail);
            if (avail) {
              if (updated.has(avail)) {
                updated.delete(avail);
              } else {
                updated.add(avail);
              }
            }
            return { avail: updated };
          })
        },

        
        setFiltersFromUrl: (params) =>
          set(() => {
            const newBrands =
              typeof params.brands === "string"
                ? params.brands.split(",").filter(Boolean)
                : [];
            const newType =
              typeof params.type === "string"
                ? params.type.split(",").filter(Boolean)
                : [];
            const newPatrol =
              typeof params.patrol === "string"
                ? params.patrol.split(",").filter(Boolean)
                : [];
            const newDiscount =
              typeof params.discount === "string"
                ? params.discount.split(",").filter(Boolean)
                : [];
            const newAvail =
              typeof params.avail === "string"
                ? params.avail.split(",").filter(Boolean)
                : [];

            return {
              brands: new Set(newBrands),
              type: new Set(newType),
              patrol: new Set(newPatrol),
              discount: new Set(newDiscount),
              avail: new Set(newAvail),
            };
          }),
       
      }
    ),
    {
      name: 'drivovo filters',
      version: 0.2,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({
        brands: state.brands,
        // type: state.type,
        // patrol: state.patrol,
        // discount: state.discount,
        // avail: state.avail,
      
      }),
    }
  )

)