// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' //  import BrowserRouter
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css' // optional

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>   {/*  Routing wrapper */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
