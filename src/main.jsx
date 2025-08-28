import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FeatureShowcase from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeatureShowcase />
  </StrictMode>,
)
