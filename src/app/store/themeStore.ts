// store/themeStore.ts
import { create } from 'zustand'

interface ThemeState {
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark',
  setTheme: (theme) => {
    // Сохраняем в localStorage
    localStorage.setItem('app-theme', theme)
    // Применяем класс к <html>
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(theme)

    set({ theme })
  },
}))
