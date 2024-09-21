import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home' 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout'
import Form from './Components/Form/Form'

function App() {

  let routing = createBrowserRouter([
    {path:'',element:<Layout></Layout>,children:[
      {index:true,element:<Home></Home>},
    {path:'form',element:<Form></Form>},
    ]},
    
  ])

  return (
    <>
     <RouterProvider router={routing}> </RouterProvider>
    </>
  )
}

export default App
