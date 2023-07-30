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

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import StoreLayout from './components/StoreLayout/StoreLayout'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import ErrorPage from './components/ErrorPage/ErrorPage'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route index element={ <Home /> } />
      <Route path='tienda' element={ <StoreLayout /> }>
        <Route index element={ <ItemListContainer /> } />
        <Route path=':categoria' element={ <ItemListContainer /> } />
        <Route path=':categoria/:id' element={ <ItemDetail /> } />
        <Route path='carrito' element={ <Cart /> } />
        <Route path='compra' element={ <Checkout /> } />
      </Route>
      <Route path='*' element={ <ErrorPage /> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={route} />
    </ThemeProvider>
  </React.StrictMode>,
)
