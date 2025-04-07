import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Pages/Home'
import Service from './Pages/Service'
import About from './Pages/About'
import Contact from './Pages/Contact'
import StoreLocater from './Pages/StoreLocater'
import AppLayout from './Layout/AppLayout'



function App() {
 const router = createBrowserRouter([
   {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/service",
        element:<Service />
      },
      {
        path:"/about",
        element:<About />
      },{
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/Storelocater",
        element:<StoreLocater />
      }
    ]
   }
 
 ])
  return <RouterProvider router={router} />
}

export default App
