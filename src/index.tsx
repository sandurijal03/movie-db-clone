import * as React from 'react'
import { createRoot } from 'react-dom/client.js'

import App from './App'

createRoot(document.querySelector('#root') as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
