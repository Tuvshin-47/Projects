const Projects = ({ lang = 'mn' }) => {
  const translations = {
    mn: {
      title: "Миний Төслүүд",
      subtitle: "Одоо хөгжүүлж буй болон ирээдүйд хийхээр төлөвлөж буй төслүүд",
      statusOngoing: "Хөгжүүлж буй",
      statusIncoming: "Төлөвлөж буй",
      viewProject: "Төсөл үзэх",
      code: "Код харах",
      projects: [
        {
          title: "Personal Portfolio v2",
          desc: "React.js, Tailwind CSS болон Framer Motion ашиглан бүтээж буй олон хэлний дэмжлэгтэй портфолио вэбсайт.",
          tech: ["React", "Tailwind", "Vite"],
          status: "Ongoing"
        },
        {
          title: "E-Commerce with Next.js",
          desc: "Next.js болон Java Spring Boot ашиглан бүтээх орчин үеийн онлайн дэлгүүрийн цогц систем.",
          tech: ["Next.js", "Spring Boot", "PostgreSQL"],
          status: "Incoming"
        },
        {
          title: "AI Chat Assistant",
          desc: "Хиймэл оюун ухаан ашиглан хэрэглэгчидтэй харилцах болон мэдээлэл боловсруулах туслах систем.",
          tech: ["Python", "OpenAI API", "React"],
          status: "Incoming"
        }
      ]
    },
    jp: {
      title: "プロジェクト",
      subtitle: "現在開発中および今後の開発予定プロジェクト",
      statusOngoing: "開発中",
      statusIncoming: "予定",
      viewProject: "詳細を見る",
      code: "ソースコード",
      projects: [
        {
          title: "ポートフォリオ v2",
          desc: "React.jsとTailwind CSSを使用し、多言語対応（日・蒙）のポートフォリオサイトを構築中。",
          tech: ["React", "Tailwind", "Vite"],
          status: "Ongoing"
        },
        {
          title: "Next.js ECサイト",
          desc: "Next.jsとJava Spring Bootを組み合わせた、モダンなECプラットフォームの開発を予定。",
          tech: ["Next.js", "Spring Boot", "PostgreSQL"],
          status: "Incoming"
        },
        {
          title: "AIチャットアシスタント",
          desc: "AI技術を活用した対話型および情報処理支援システムの構築を計画中。",
          tech: ["Python", "OpenAI API", "React"],
          status: "Incoming"
        }
      ]
    }
  };

  const t = translations[lang] || translations['mn'];

  return (
    <section id="Төслүүд" className="py-24 bg-[#0a0f1a]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-white tracking-tight">{t.title}</h2>
          <p className="text-gray-400 font-medium">{t.subtitle}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.map((project, index) => (
            <div key={index} className="bg-[#161b22] rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all group flex flex-col h-full">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 relative flex items-center justify-center">
                 <span className="text-4xl group-hover:scale-125 transition-transform duration-500 opacity-20">💻</span>
                 {/* Status Badge */}
                 <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                   project.status === 'Ongoing' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'
                 }`}>
                   {project.status === 'Ongoing' ? t.statusOngoing : t.statusIncoming}
                 </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-[10px] px-2.5 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg font-black uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <button className="flex-1 py-3 bg-gray-800 hover:bg-blue-600 text-white text-xs font-black rounded-xl transition-all active:scale-95">
                    {t.viewProject}
                  </button>
                  <button className="px-4 py-3 border border-gray-800 hover:border-blue-500 text-gray-400 hover:text-white rounded-xl transition-all">
                    📁
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;