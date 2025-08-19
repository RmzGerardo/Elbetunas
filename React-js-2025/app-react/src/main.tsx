import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Primer } from './Primer';
import { ItemCounter } from './assets/carrito/ItemCounter';
import { AppAwesome } from './AppAwesome';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppAwesome/>
  </StrictMode>,
)
