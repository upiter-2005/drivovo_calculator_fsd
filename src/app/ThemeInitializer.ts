// app/layout.tsx или useEffect в компоненте
import { useEffect } from 'react'
import { useThemeStore } from '@/app/store/themeStore'

export function ThemeInitializer() {
  const setTheme = useThemeStore((s) => s.setTheme)

  useEffect(() => {
    const saved = localStorage.getItem('app-theme') as 'dark' | 'light' | null
    const theme = saved || 'dark'
    setTheme(theme)
  }, [])

  return null
}
