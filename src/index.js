import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Favicon from 'react-favicon'
import hotAirBalloonBear from './images/hot-air-balloon-bear.png'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Favicon url={hotAirBalloonBear} />
    <App />
  </React.StrictMode>
)
