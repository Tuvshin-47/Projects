const Contact = ({ lang = 'mn' }) => {
  const translations = {
    mn: {
      title: "Холбоо барих",
      subtitle: "Намтар болон төслийн талаар асуух зүйл байвал доорх сувгуудаар холбогдоорой.",
      email: "И-мэйл хаяг",
      location: "Байршил",
      locationDetail: "Улаанбаатар, Монгол (Японд ажиллах боломжтой)",
      button: "Зурвас илгээх",
      placeholderName: "Таны нэр",
      placeholderEmail: "И-мэйл хаяг",
      placeholderMessage: "Зурвас..."
    },
    jp: {
      title: "お問い合わせ",
      subtitle: "採用やプロジェクトに関するご質問がございましたら、お気軽にご連絡ください。",
      email: "メールアドレス",
      location: "現在地",
      locationDetail: "モンゴル・ウランバートル（日本での勤務可能）",
      button: "メッセージを送信",
      placeholderName: "お名前",
      placeholderEmail: "メールアドレス",
      placeholderMessage: "メッセージ内容..."
    }
  };

  const t = translations[lang] || translations['mn'];

  return (
    <section id="Холбоо барих" className="py-24 bg-[#0a0f1a]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-white tracking-tight">{t.title}</h2>
            <p className="text-gray-400 font-medium">{t.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                {/* Icon box - Orange border */}
                <div className="w-12 h-12 bg-orange-600/10 border border-orange-500/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:border-orange-500/50 transition-colors">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-1">{t.email}</p>
                  <p className="text-white font-bold">stuvshinbayar630@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-orange-600/10 border border-orange-500/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:border-orange-500/50 transition-colors">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-1">{t.location}</p>
                  <p className="text-white font-bold">{t.locationDetail}</p>
                </div>
              </div>
            </div>

            {/* Form UI - Orange focus */}
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder={t.placeholderName}
                className="w-full bg-[#161b22] border border-gray-800 rounded-2xl p-4 text-white focus:border-orange-500 outline-none transition-all placeholder:text-gray-600"
              />
              <input 
                type="email" 
                placeholder={t.placeholderEmail}
                className="w-full bg-[#161b22] border border-gray-800 rounded-2xl p-4 text-white focus:border-orange-500 outline-none transition-all placeholder:text-gray-600"
              />
              <textarea 
                placeholder={t.placeholderMessage}
                rows="4"
                className="w-full bg-[#161b22] border border-gray-800 rounded-2xl p-4 text-white focus:border-orange-500 outline-none transition-all placeholder:text-gray-600"
              ></textarea>
              <button className="w-full py-4 bg-orange-600 text-white font-black rounded-2xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98]">
                {t.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;