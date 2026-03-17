const Hero = ({ lang = 'mn' }) => {
  const content = {
    mn: {
      badge: "Full-stack Software Engineer",
      greeting: "Намайг ",
      name: "Түвшинбаяр",
      suffix: " гэдэг",
      desc: (
        <>
          Би орчин үеийн <span className="text-white">React.js</span> болон <span className="text-white">Java Spring Boot</span> технологиудаар дамжуулан цогц системүүдийг хөгжүүлдэг. 
          Японы мэдээллийн технологийн стандартыг эзэмшихийн тулд <span className="text-blue-400">ITPEC Fundamental Engineer (FE)</span> шалгалтаар суурь мэдлэгээ баталгаажуулж буй, 
          Японд мэргэжлээрээ ажиллах тууштай зорилготой хөгжүүлэгч юм.
        </>
      ),
      projectsBtn: "Төслүүд үзэх",
      cvBtn: "CV (Resume) татах",
      techTitle: "Гол технологиуд"
    },
    jp: {
      badge: "フルスタック・ソフトウェアエンジニア",
      greeting: "初めまして、",
      name: "トゥブシンバヤル",
      suffix: " と申します",
      desc: (
        <>
          私は <span className="text-white">React.js</span> と <span className="text-white">Java Spring Boot</span> を活用し、高品質なシステムの開発に取り組んでいます。 
          現在、日本での就職を目指し、<span className="text-blue-400">ITPEC FE</span> 試験の合格と技術向上に励んでおります。 
          誠実さと技術力でチームに貢献したいと考えています。よろしくお願いいたします。
        </>
      ),
      projectsBtn: "プロジェクトを見る",
      cvBtn: "履歴書をダウンロード",
      techTitle: "主な技術スタック"
    }
  };

  const t = content[lang] || content['mn'];

  return (
    <section className="relative overflow-hidden py-28 bg-[#0a0f1a]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[150px] -z-10"></div>

      <div className="container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 mb-8 bg-blue-500/10 border border-blue-500/20 rounded-full">
          <span className="text-blue-400 text-xs font-black tracking-[0.2em] uppercase">
            {t.badge}
          </span>
        </div>

        {/* Name Heading */}
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight text-white tracking-tight">
          {t.greeting}
          <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {t.name}
          </span>
          {t.suffix}
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto mb-14 leading-relaxed font-medium">
          {t.desc}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#Төслүүд" 
            className="group relative px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:-translate-y-1 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">{t.projectsBtn}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          
          <button className="px-10 py-4 border-2 border-gray-800 hover:border-blue-500 text-white font-bold rounded-2xl transition-all hover:bg-blue-500/5 backdrop-blur-sm">
            {t.cvBtn}
          </button>
        </div>

        {/* Tech Stack Indicators */}
        <div className="mt-28 flex flex-col items-center">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-[0.3em] mb-10">{t.techTitle}</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40">
             {['Java', 'Spring Boot', 'React', 'Next.js', 'Tailwind', 'PostgreSQL'].map(tech => (
               <span key={tech} className="text-lg font-bold text-white hover:opacity-100 transition-opacity cursor-default">{tech}</span>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;