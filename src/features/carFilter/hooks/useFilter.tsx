'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import qs from "qs";
import { useEffect, useRef, useState } from "react";
// import { useSet } from "react-use"
import { useFilterStore } from "../store/filterStore";

// debounce helper
function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay = 300
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>): void => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export const useFilter = () => {
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
 const {
    brands,
    type,
    patrol,
    discount,
    avail,
    setFiltersFromUrl,
  } = useFilterStore()

  const isInitialized = useRef(false)
  const [isReady, setIsReady] = useState(false)


  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries())
    setFiltersFromUrl(params)
    isInitialized.current = true

    const timer = setTimeout(() => setIsReady(true), 120)
    return () => clearTimeout(timer)
  }, [])

  const updateUrl = debounce(() => {
    if (!isInitialized.current || !isReady) return

    const paramsObj = {
      brands: Array.from(brands),
      type: Array.from(type),
      patrol: Array.from(patrol),
      discount: Array.from(discount),
      avail: Array.from(avail),
    }

    // очищаем пустые фильтры
    Object.keys(paramsObj).forEach((key) => {
      const value = paramsObj[key as keyof typeof paramsObj]
      if (Array.isArray(value) && value.length === 0) delete paramsObj[key as keyof typeof paramsObj]
    })

    const query = qs.stringify(paramsObj, { arrayFormat: 'comma', skipNulls: true })
    const hasUrl = searchParams.toString().length > 0

    if (Object.keys(paramsObj).length === 0 && !hasUrl) {
      router.replace(pathname, { scroll: false })
    } else {
      router.replace(`${pathname}?${query}`, { scroll: false })
    }
  }, 250) 

 
  useEffect(() => {
    updateUrl()
  }, [brands, type, patrol, discount, avail])

  return {
    brands,
    type,
    patrol,
    discount,
    avail,
  }

 
};
