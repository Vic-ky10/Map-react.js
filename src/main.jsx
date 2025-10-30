import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import Weather from './components/Conditional-rendering.jsx/Weather'
import Apps from './components/Conditional-rendering.jsx/UserStatus'
import Day from './components/Day'
import Stylecard from './components/Stylecard'
import Appss from './components/Button'
import State from './State/State'
import Movie from './State/State-Object'
import States from './State/States'
import Intial from './State/Ex-1'
import RandomNumber from './State/RandomNumber'
import Example from './State/Example'






createRoot(document.getElementById('root')).render(
  <StrictMode>


{/* <RandomNumber /> */}
<Example />

  </StrictMode>,
)
