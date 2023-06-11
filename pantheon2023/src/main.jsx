import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsPage from '../src/pages/EventsPage.jsx'
import AboutUsPage from '../src/pages/AboutUsPage.jsx'
import GalleryPage from '../src/pages/GalleryPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
