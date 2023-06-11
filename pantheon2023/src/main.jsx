import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from '../src/components/Events.jsx'
import Gallery from '../src/components/Gallery.jsx'
import AboutUs from '../src/components/AboutUs.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
