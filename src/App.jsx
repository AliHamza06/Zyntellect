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
import GenerativeAgent from './Pages/ServicesDrop/GenerativeAgent';
import GenerativeCopilot from './Pages/ServicesDrop/GenerativeCopilot';
import GenerativeMarketing from './Pages/ServicesDrop/GenerativeMarketing';
import HirePromptEngineers from './Pages/ServicesDrop/HirePromptEngineers';
import AdaptiveDevelopmentCompany from './Pages/ServicesDrop/AdaptiveDevelopmentCompany';
import ContactUs from './Pages/ContactUs';
import ChatGPTDevelopers from './Pages/ServicesDrop/ChatGPTDevelopers';
import StableDiffusionDevelopers from './Pages/ServicesDrop/StableDiffusionDevelopers';
import LargeLanguageModel from './Pages/ServicesDrop/LargeLanguageModel';

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
          <Route path='/contact-us' element={<ContactUs/>}/>

          {/* Services Dropdown */}
          <Route path='/generative-ai-development-company' element={<GenerativeDevelopment/>}/>
          <Route path='/generative-ai-integration-service' element={<GenerativeIntegration/>}/>
          <Route path='/generative-ai-consulting-company' element={<GenerativeConsulting/>}/> 
          <Route path='/hire-generative-ai-engineers' element={<GenerativeEngineers/>}/>
          <Route path='/ai-agent-development-company' element={<GenerativeAgent/>}/>
          <Route path='/ai-copilot-development-company' element={<GenerativeCopilot/>}/>
          <Route path='/ai-marketing-agent-development' element={<GenerativeMarketing/>}/>  
          <Route path='/hire-prompt-engineers' element={<HirePromptEngineers/>}/>
          <Route path='/adaptive-ai-development-company' element={<AdaptiveDevelopmentCompany/>}/>
          <Route path='/chatgpt-developers' element={<ChatGPTDevelopers/>}/>
          <Route path='/stable-diffusion-developers' element={<StableDiffusionDevelopers/>}/>
          <Route path='/large-language-model-development-company' element={<LargeLanguageModel/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
