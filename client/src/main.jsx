import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import CreateCrewmate from './pages/CreateCrewmate.jsx';
import CrewmateGallery from './pages/CrewmateGallery.jsx';
import CrewmateDetails from './pages/CrewmateDetails.jsx';
import NotFound from './pages/NotFound.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/create-crewmate" element={<CreateCrewmate/>} /> 
        <Route path="/crewmate-gallery" element={<CrewmateGallery/>} /> 
        <Route path="/crewmate/:id" element={<CrewmateDetails/>} />
        <Route path="*" element={ <NotFound /> }/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)