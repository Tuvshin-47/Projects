const Projects = ({ lang = 'mn' }) => {
  const translations = {
    mn: {
      title: "Миний Төслүүд",
      subtitle: "Одоо хөгжүүлж буй болон ирээдүйд хийхээр төлөвлөж буй төслүүд",
      statusOngoing: "Хөгжүүлж буй",
      statusIncoming: "Төлөвлөж буй",
      statusFinished: "Дууссан",
      viewProject: "Төсөл үзэх",
      code: "Код харах",
      projects: [
        {
          title: "Personal Portfolio v2",
          desc: "React.js, Tailwind CSS болон Framer Motion ашиглан бүтээж буй олон хэлний дэмжлэгтэй портфолио вэбсайт.",
          tech: ["React", "Tailwind", "Vite"],
          status: "Ongoing",
          icon: "💻",
          github: "https://github.com/Tuvshin-47/Projects/tree/main/Front/portfolio-tuvshin"
        },
        {
          title: "Java Banking System",
          desc: "Spring Boot болон PostgreSQL ашиглан гүйлгээ хийх, данс удирдах болон аюулгүй байдлыг хангасан банкны системийн backend хөгжүүлэлт.",
          tech: ["Java", "Spring Boot", "PostgreSQL"],
          status: "Ongoing",
          icon: "🏦",
          github: "#"
        },
        {
          title: "Foodie Go",
          desc: "Хэрэглэгчид хоол захиалах болон ресторан хайх боломжтой цогц вэб систем. Багаар ажиллаж хөгжүүлсэн төсөл.",
          tech: ["Java", "Spring Boot", "HTML/CSS"],
          status: "Finished",
          icon: "🍕",
          // ТАНЫ ӨГСӨН FOODIE GO ГИТХАБ ЛИНК:
          github: "https://github.com/Tuvshin-47/Projects/tree/main/project_foodie_gogo"
        }
      ]
    },
    jp: {
      title: "プロジェクト",
      subtitle: "現在開発中および今後の開発予定プロジェクト",
      statusOngoing: "開発中",
      statusIncoming: "予定",
      statusFinished: "完了",
      viewProject: "詳細を見る",
      code: "ソースコード",
      projects: [
        {
          title: "ポートフォリオ v2",
          desc: "React.jsとTailwind CSSを使用し、多言語対応（日・蒙）のポートフォリオサイトを構築中。",
          tech: ["React", "Tailwind", "Vite"],
          status: "Ongoing",
          icon: "💻",
          github: "https://github.com/Tuvshin-47/Projects/tree/main/Front/portfolio-tuvshin"
        },
        {
          title: "Java銀行管理システム",
          desc: "Spring BootとPostgreSQLを採用し、送金処理、口座管理、セキュリティ認証を備えたバックエンドシステムの構築。",
          tech: ["Java", "Spring Boot", "PostgreSQL"],
          status: "Ongoing",
          icon: "🏦",
          github: "#"
        },
        {
          title: "Foodie Go",
          desc: "ユーザーが料理を注文したりレストランを検索したりできる総合ウェブシステム。チームプロジェクト。",
          tech: ["Java", "Spring Boot", "HTML/CSS"],
          status: "Finished",
          icon: "🍕",
          github: "https://github.com/Tuvshin-47/Projects/tree/main/project_foodie_gogo"
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
          <div className="h-1.5 w-24 bg-orange-600 mx-auto rounded-full mb-4 shadow-lg shadow-orange-500/20"></div>
          <p className="text-gray-400 font-medium">{t.subtitle}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.map((project, index) => (
            <div key={index} className="bg-[#161b22] rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all group flex flex-col h-full">
              
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-orange-900/20 to-amber-900/10 relative flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <span className="text-4xl group-hover:scale-125 transition-transform duration-500 opacity-20 group-hover:opacity-40">
                    {project.icon}
                 </span>
                 
                 <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                   project.status === 'Ongoing' ? 'bg-orange-600 text-white' : 
                   project.status === 'Finished' ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-400'
                 }`}>
                   {project.status === 'Ongoing' ? t.statusOngoing : 
                    project.status === 'Finished' ? t.statusFinished : t.statusIncoming}
                 </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-[10px] px-2.5 py-1 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-lg font-black uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex-1 py-3 bg-gray-800 hover:bg-orange-600 text-white text-xs font-black rounded-xl transition-all active:scale-95">
                    {t.viewProject}
                  </button>
                  
                  {/* GitHub Link Button холбосон хэсэг */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 border border-gray-800 hover:border-orange-500 text-gray-400 hover:text-white rounded-xl transition-all flex items-center justify-center"
                    title={t.code}
                  >
                    📁
                  </a>
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