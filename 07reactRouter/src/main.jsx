import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/about.jsx'
import Contract from './components/contract/contract.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Github from './components/Github/Github.jsx'

const router =  createBrowserRouter([
{
  path:'/',
  element:<Layout />,
  children :[
    {
      path:"",
      element:<Home/>
},
{
     path:"about",
     element:<About/>
},
{
  path:"contract",
  element:<Contract/>
},
{
  path:"github",
  element:<Github/>
},
]
}
])

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,

)