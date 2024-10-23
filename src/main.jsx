import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {router} from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Nav/>
    <RouterProvider router={router} />
    <Footer/>
  </>
 
)
