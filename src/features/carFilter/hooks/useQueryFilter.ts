'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import qs from "qs"

interface IFilters {
  brands: Set<string>
  type: Set<string>
  patrol: Set<string>
  discount: Set<string>
  avail: Set<string>
}
export const useQueryFilter = (filters: IFilters) => {

  const router= useRouter()

  useEffect(()=>{
    const params = {
      brands: Array.from(filters.brands),
      type: Array.from(filters.type),
      patrol: Array.from(filters.patrol),
      discount: Array.from(filters.discount),
      avail: Array.from(filters.avail)
    }
    const query = qs.stringify(params,{arrayFormat: 'comma'})

  const currentQuery = window.location.search.replace('?', '');
  
  if (query !== currentQuery) {
    router.push(`?${query}`, { scroll: false });
  }
  }, [router, filters])

}