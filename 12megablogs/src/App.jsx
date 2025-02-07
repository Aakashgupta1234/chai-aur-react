import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import AuthService from './appwrite/auth'
import {login,logout}from "./store/authSlice"

function App() {
  const [loding,setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(()=>{
    AuthService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch((logout))
        }
      })
      .finally(()=>setLoading(false))
  },[])

  return !loding?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className="w-full flex">
      <Headers/>
      <main>
     TODO   {/* <outlet/> */}
      </main>
      <Footer/>
    </div>
    </div>
  ):null
  
}
export default App
