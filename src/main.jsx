import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Form from './Form/Form'
import { ThemeProvider, createTheme } from "@mui/material"
import { purple, green } from "@mui/material/colors"

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const theme = createTheme({
  palette:{
      primary: {
          main: purple[500]
      },
      secondary: {
          main: green[500]
      }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className='box1'>
          <Form />
        </div>  
      </div>        
    </ThemeProvider>
  </React.StrictMode>,
)
