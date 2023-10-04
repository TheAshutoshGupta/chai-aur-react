import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import { Router, RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import {Home, About, Contact, User} from './components'
import Layout from './Layout'
import Github, { githubinfoLoader } from './components/Github/Github'

/* const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"About",
        element:<About/>
      },{
        path:"contact",
        element:<Contact/>
      },{}
    ]
  }
]) */

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>

      {/* loader will fetch the data on hover and wont wait for the onclick event */}
      <Route
      loader={githubinfoLoader}
      path='github'
      element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
