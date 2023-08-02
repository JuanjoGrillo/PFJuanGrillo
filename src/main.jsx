import './index.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from './utils/theme'
import { ThemeProvider } from "@mui/material"
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { AuthContext } from "./context/AuthContext"
import Layout from './components/Layout/Layout'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import ErrorPage from './components/ErrorPage/ErrorPage'
import RegisterForm from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route path="login" element={ <LoginForm /> } />
      <Route path="registro" element={ <RegisterForm /> } />
      <Route path='tienda' element={ <ItemListContainer /> } />
      <Route path='tienda/:categoria' element={ <ItemListContainer /> } />
      <Route path='tienda/:categoria/:id' element={ <ItemDetail /> } />
      <Route path='carrito' element={ <Cart /> } />
      <Route path='compra' element={ <Checkout /> } />
      <Route path='*' element={ <ErrorPage /> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthContext>
        <RouterProvider router={route} />
      </AuthContext>
    </ThemeProvider>
  </React.StrictMode>,
)
