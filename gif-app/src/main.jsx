import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {GifApp} from './gifApp.jsx'
import './style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <GifApp />
  </StrictMode>
)
