import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Product from './components/productInfo'
import Greetings from './components/Greetings'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greetings />
    <Product/>
  </StrictMode>,
)
