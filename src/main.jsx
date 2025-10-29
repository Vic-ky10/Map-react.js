import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import Weather from './components/Conditional-rendering.jsx/Weather'
import Apps from './components/Conditional-rendering.jsx/UserStatus'
import Day from './components/Day'
import Stylecard from './components/Stylecard'
import Appss from './components/Button'






createRoot(document.getElementById('root')).render(
  <StrictMode>
<Day isTime ="morning" />
<Stylecard />
<Appss />

  </StrictMode>,
)
