import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Form from './Form/Form'
import { theme } from './utils/theme'
import { ThemeProvider } from "@mui/material"
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

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
