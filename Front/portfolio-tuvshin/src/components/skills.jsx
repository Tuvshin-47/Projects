const Skills = ({ lang = 'mn' }) => {
  // Хэлний орчуулгууд
  const translations = {
    mn: {
      title: "Ур чадвар & Боловсрол",
      certTitle: "Гэрчилгээнүүд",
      eduTitle: "Боловсрол",
      levels: { expert: "Expert", advanced: "Advanced", intermediate: "Intermediate", learning: "Learning" },
      status: { achieved: "Achieved", upcoming: "Upcoming" },
      year: "Төгссөн"
    },
    jp: {
      title: "スキル & 学歴",
      certTitle: "資格・認定",
      eduTitle: "学歴",
      levels: { expert: "エキスパート", advanced: "上級", intermediate: "中級", learning: "学習中" },
      status: { achieved: "取得済み", upcoming: "予定" },
      year: "卒業"
    }
  };

  const t = translations[lang] || translations['mn'];

  const skills = [
    { name: "HTML & CSS", level: t.levels.expert, icon: "🌐", color: "border-orange-500" },
    { name: "JavaScript", level: t.levels.advanced, icon: "💛", color: "border-yellow-400" },
    { name: "Tailwind CSS", level: t.levels.intermediate, icon: "🎨", color: "border-cyan-400" },
    { name: "React.js", level: t.levels.advanced, icon: "⚛️", color: "border-blue-500" },
    { name: "Next.js", level: t.levels.learning, icon: "🚀", color: "border-black dark:border-white" },
    { name: "Java", level: t.levels.intermediate, icon: "☕", color: "border-red-500" },
  ];

  const certifications = [
    { name: "JLPT N2", status: t.status.achieved, icon: "🎓" },
    { name: "ITPEC FE", status: t.status.achieved, icon: "💻" },
    { name: "AWS Practitioner", status: t.status.upcoming, icon: "☁️" },
    { name: "JLPT N1", status: t.status.upcoming, icon: "📜" },
    { name: "Oracle Silver", status: t.status.upcoming, icon: "💾" },
  ];

  const education = [
    { school: "東京国際知識学院 (Japanese Language School)", year: t.year },
    { school: "東京アニメ声優＆eスポーツ専門学校 (Tokyo Anime Voice Acting & Esports College)", year: t.year },
    { school: "iCode Academy", year: t.year },
  ];

  return (
    <section id="Ур чадвар" className="py-20 bg-gray-50 dark:bg-[#0a0f1a] transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Хэсгийн гарчиг */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight dark:text-white">{t.title}</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full shadow-lg shadow-blue-500/20"></div>
        </div>

        {/* Ур чадварын картууд */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`p-6 bg-white dark:bg-[#161b22] rounded-3xl border-b-4 ${skill.color} shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 text-center group`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="font-bold text-lg dark:text-white">{skill.name}</h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">{skill.level}</p>
            </div>
          ))}
        </div>

        {/* Гэрчилгээ болон Боловсрол */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Гэрчилгээ */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black flex items-center gap-3 dark:text-white">
              <span className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">🏆</span> 
              {t.certTitle}
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="group flex items-center justify-between p-5 bg-white dark:bg-[#161b22] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500 transition-colors shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{cert.icon}</span>
                    <span className="font-bold text-gray-700 dark:text-gray-200">{cert.name}</span>
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-lg font-black ${
                    cert.status === t.status.achieved 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Боловсрол */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black flex items-center gap-3 dark:text-white">
              <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">🏫</span> 
              {t.eduTitle}
            </h3>
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500 before:to-transparent">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    🎓
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white dark:bg-[#161b22] border border-gray-100 dark:border-gray-800 shadow-sm">
                    <h4 className="font-black text-gray-800 dark:text-gray-100 leading-tight">{edu.school}</h4>
                    <time className="font-medium text-blue-600 dark:text-blue-400 text-sm">{edu.year}</time>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;