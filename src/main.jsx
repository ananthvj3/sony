import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FetchApi from './FetchApi.jsx'

// import bootstrap from 'bootstrap'

createRoot(document.getElementById('root')).render(
  <FetchApi>
   <StrictMode>
    <App />
  </StrictMode>
 </FetchApi>
)
