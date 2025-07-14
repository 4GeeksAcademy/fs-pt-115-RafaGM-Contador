import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
// components
import Home from './components/Home';

let counter = 0;

const reactRender = ReactDOM.createRoot(document.getElementById('root'))
setInterval(() => {
  reactRender.render(
    <React.StrictMode>
      <Home counter={counter} />
    </React.StrictMode>
  )
  counter++
}, 1000)
