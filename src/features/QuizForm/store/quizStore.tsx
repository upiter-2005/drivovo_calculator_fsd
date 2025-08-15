import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


interface IQuizStore {
    activeTarif: string,
    car: string,
    name: string,
    phone: string,
    email: string,
    skills: string,
    profileLink: string,
    timeToSpeak: string,
    dayToSpeak: string,
    cofee: string,
    setCar: (val: string) => void,
    setName: (val: string) => void,
    setPhone: (val: string) => void,
    setEmail: (val: string) => void,
    setSkills: (val: string) => void,
    setSProfileLink: (val: string) => void,
    setSTimeToSpeak: (val: string) => void,
    setDayToSpeak: (val: string) => void,
    setSCofee: (val: string) => void,
    setActiveTarif: (val: string) => void,
}

export const quizStore = create<IQuizStore>()(
  persist(
    (set) => (
      {
        activeTarif: 'Лізінг',
        car: '',
        name: '',
        phone: '',
        email: '',
        skills: '',
        profileLink: '',
        timeToSpeak: 'Вдень',
        dayToSpeak: 'Сьогодні',
        cofee: 'Americano',
        setCar: (val) => {
          set({car: val})
        },
        setName: (val) => {
          set({name: val})
        },
        setPhone: (val) => {
            set({phone: val})
        },
        setEmail: (val) => {
            set({email: val})
        },
        setSkills: (val) => {
            set({skills: val})
        },
        setSProfileLink: (val) => {
            set({profileLink: val})
        },
        setSTimeToSpeak: (val) => {
            set({timeToSpeak: val})
        },
        setDayToSpeak: (val) => {
            set({dayToSpeak: val})
        },
        setSCofee: (val) => {
            set({cofee: val})
        },
        setActiveTarif: (val) => {
            set({activeTarif: val})
        },
        
      }
    ),
    {
      name: 'drivovo fsd',
      version: 0.1,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({
        car: state.car, 
        name: state.name, 
        phone: state.phone,
        email: state.email,
        skills: state.skills,
        profileLink: state.profileLink,
        timeToSpeak: state.timeToSpeak,
        dayToSpeak: state.dayToSpeak,
        cofee: state.cofee,
        activeTarif: state.activeTarif,
       
       }),
    }
  )

)