import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
// import DetailView from '../routes/DetailView';
import About from '../routes/About';
import NotFound from '../routes/NotFound';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/about" element={<About/>} /> 
        {/* <Route path="/recipe/:id" element={<DetailView/>} />  */}
        <Route path="*" element={ <NotFound /> }/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)