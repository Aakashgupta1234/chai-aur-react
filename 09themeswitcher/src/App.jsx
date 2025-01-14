import { ThemeProvider } from './contexts/theme'
import './App.css'
import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'

function App() {
  const [ThemeMode,setThemeMode] =useState("light")

  const  LightTheme = ()=>{
    setThemeMode("light")
  }
  const  darkTheme = ()=>{
    setThemeMode("dark")
  }

  //actual  change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("Light","dark")
    document.querySelector('html').classList.add(ThemeMode)
  },[ThemeMode])

  return (
   <ThemeProvider value={{ThemeMode, darkTheme, LightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <card />
                    </div>
                </div>
            </div>
            </ThemeProvider>

  )
}

export default App
