import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render(year) {
  return renderToString(<StrictMode><App year={year} /></StrictMode>)
}
