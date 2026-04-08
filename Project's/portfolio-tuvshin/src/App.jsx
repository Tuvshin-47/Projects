import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import SnowBackground from "./components/snowbackground";

function App() {
  // 'mn' - Монгол, 'jp' - Япон
  const [lang, setLang] = useState('mn');

  return (
    <div className="relative min-h-screen bg-[#0a0f1a] text-white">
      <SnowBackground /> 
      
      {/* 1. Navbar-т хэл солих функц болон хэлний утгыг дамжуулна */}
      <Navbar lang={lang} setLang={setLang} />

      <div className="pt-20">
        {/* 2. Бусад бүх хэсэгт одоогийн хэлийг дамжуулна */}
        <Hero lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </div>
    </div>
  );
}

export default App;