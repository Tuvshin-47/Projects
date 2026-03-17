const Navbar = ({ lang = 'mn', setLang }) => {
  // Хэлнээс хамаарч цэсний нэрсийг тодорхойлох
  const navLinks = {
    mn: [
      { name: "Нүүр", id: "#" },
      { name: "Төслүүд", id: "#Төслүүд" },
      { name: "Ур чадвар", id: "#Ур чадвар" },
    ],
    jp: [
      { name: "ホーム", id: "#" },
      { name: "プロジェクト", id: "#Төслүүд" },
      { name: "スキル", id: "#Ур чадвар" },
    ]
  };

  // Хэрэв lang утга олдохгүй бол 'mn' хувилбарыг авна
  const links = navLinks[lang] || navLinks['mn'];

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 border-b border-gray-800/50 bg-[#0a0f1a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <span className="text-2xl font-black tracking-tighter text-white">
          PORTFOLIO<span className="text-blue-600">.</span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links && links.map((link) => (
            <a 
              key={link.name} 
              href={link.id} 
              className="text-sm font-bold text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side Tools */}
        <div className="flex items-center gap-6">
          {/* Language Switch Button */}
          <button 
            onClick={() => setLang && setLang(lang === 'mn' ? 'jp' : 'mn')}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500 transition-all text-xs font-black"
          >
            <span className={lang === 'mn' ? 'text-blue-400' : 'text-gray-500'}>MN</span>
            <span className="text-gray-700">/</span>
            <span className={lang === 'jp' ? 'text-blue-400' : 'text-gray-500'}>JP</span>
          </button>

          {/* Contact Button */}
          <a 
            href="#Холбоо барих"
            className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-sm"
          >
            {lang === 'mn' ? 'Холбоо барих' : 'お問い合わせ'}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;