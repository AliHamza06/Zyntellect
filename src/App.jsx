import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/Style.css'; // Ensure correct path to your CSS file
import Home from './Pages/Home';
import Layout from './Layout/Layout';
import Services from './Pages/Services';
import Industries from './Pages/Industries';
import Insights from './Pages/Insights';
import About from './Pages/About';
import Work from './Pages/Work';
import GenerativeDevelopment from './Pages/ServicesDrop/GenerativeDevelopment'
import GenerativeIntegration from './Pages/ServicesDrop/GenerativeIntegration';
import GenerativeConsulting from './Pages/ServicesDrop/GenerativeConsulting';
import GenerativeEngineers from './Pages/ServicesDrop/GenerativeEngineers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path='/industries' element={<Industries/>}/>
          <Route path='/insights' element={<Insights/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/work' element={<Work/>}/>

          {/* Services Dropdown */}
          <Route path='/generative-ai-development-company' element={<GenerativeDevelopment/>}/>
          <Route path='/generative-ai-integration-service' element={<GenerativeIntegration/>}/>
          <Route path='/generative-ai-consulting-company' element={<GenerativeConsulting/>}/> 
          <Route path='/hire-generative-ai-engineers' element={<GenerativeEngineers/>}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
