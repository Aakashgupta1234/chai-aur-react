import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  let myObj={
    username:"Aakash",
    age:21
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
     <Card userName="chaiaurcode"someObje={myObj} />
     <Card userName="aakash"btnText="visit me" />
     
    
    </>
  )
}

export default App
