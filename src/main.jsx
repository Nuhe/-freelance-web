import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const prerendered = root.hasAttribute('data-build-year')
const year = prerendered ? Number(root.dataset.buildYear) : new Date().getFullYear()
const app = <StrictMode><App year={year} /></StrictMode>

if (prerendered) hydrateRoot(root, app)
else createRoot(root).render(app)
