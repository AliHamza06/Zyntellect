import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/Style.css'; // Ensure correct path to your CSS file
import Home from './Pages/Home';
import Layout from './Layout/Layout';
import Services from './Pages/Services';
import Industries from './Pages/Industries';
import Insights from './Pages/Insights';
import About from './Pages/About';
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
import AIDevelopment from './Pages/ServicesDrop/ArtificialIntelligenceML/AIDevelopment';
import AIConsulting from './Pages/ServicesDrop/ArtificialIntelligenceML/AIConsulting';
import HireAIEngineers from './Pages/ServicesDrop/ArtificialIntelligenceML/HireAIEngineers';
import AIService from './Pages/ServicesDrop/ArtificialIntelligenceML/AIService';
import HireTransformer from './Pages/ServicesDrop/ArtificialIntelligenceML/HireTransformer';
import MLOpsConsulting from './Pages/ServicesDrop/ArtificialIntelligenceML/MLOpsConsulting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/insights' element={<Insights />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />

          {/* Services Dropdown */}
          <Route path='/generative-ai-development-company' element={<GenerativeDevelopment />} />
          <Route path='/generative-ai-integration-service' element={<GenerativeIntegration />} />
          <Route path='/generative-ai-consulting-company' element={<GenerativeConsulting />} />
          <Route path='/hire-generative-ai-engineers' element={<GenerativeEngineers />} />
          <Route path='/ai-agent-development-company' element={<GenerativeAgent />} />
          <Route path='/ai-copilot-development-company' element={<GenerativeCopilot />} />
          <Route path='/ai-marketing-agent-development' element={<GenerativeMarketing />} />
          <Route path='/hire-prompt-engineers' element={<HirePromptEngineers />} />
          <Route path='/adaptive-ai-development-company' element={<AdaptiveDevelopmentCompany />} />
          <Route path='/chatgpt-developers' element={<ChatGPTDevelopers />} />
          <Route path='/stable-diffusion-developers' element={<StableDiffusionDevelopers />} />
          <Route path='/large-language-model-development-company' element={<LargeLanguageModel />} />

          {/* Artificial Intelligence */}
          <Route path='/ai-development-services-company' element={<AIDevelopment />} />
          <Route path='/ai-consulting-services-company' element={<AIConsulting />} />
          <Route path='/hire-ai-engineers' element={<HireAIEngineers />} />
          <Route path='/ai-as-a-service' element={<AIService />} />
          <Route path='/hire-action-transformer-developers' element={<HireTransformer/>} />
          <Route path='/mlops-consulting-services' element={<MLOpsConsulting/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
