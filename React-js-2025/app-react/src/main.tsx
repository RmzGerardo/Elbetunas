import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppAwesome } from './AppAwesome';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppAwesome/>
  </StrictMode>,
)
