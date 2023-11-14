import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsPage from '../src/pages/EventsPage.jsx'
import AboutUsPage from '../src/pages/AboutUsPage.jsx'
import GalleryPage from '../src/pages/GalleryPage.jsx'
import Error from '../src/components/Error.jsx'
import EventDetailsPage from './pages/EventDetailsPage.jsx';
import ThankYou from './components/ThankYou.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="events/:id" element={<EventDetailsPage />} />
                <Route path="/thankyou" element={<ThankYou />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
