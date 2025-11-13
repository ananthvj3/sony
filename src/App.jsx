import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Card from './component/Card'
import Details from './component/Details'
import Cart from './component/Cart'
import Login from './pages/Login'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "/details",
          element: <Details />

        },
        {
          path: "/cart",
          element: <Cart/>

        },
        {
          path:"/login",
          element:<Login/>
        },
      ]

    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
