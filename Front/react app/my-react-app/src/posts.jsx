import { useState, useEffect } from 'react';

function Posts() {
  const [data, setData] = useState([]); // Өгөгдөл хадгалах сав
  const [loading, setLoading] = useState(true); // Ачаалж буй төлөв

  useEffect(() => {
    // 1. Өгөгдөл татах функц
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => response.json())
      .then(json => {
        setData(json); // Өгөгдлийг саванд хийх
        setLoading(false); // Ачаалж дууссаныг мэдэгдэх
      });
  }, []); // [] байгаа учир зөвхөн хуудас АНХ ачаалагдахад ганцхан удаа ажиллана

  if (loading) return <h3>Уншиж байна...</h3>;

  // posts.jsx доторх return хэсэг
return (
  <div className="p-6 bg-gray-50 min-h-screen">
    <h2 className="text-3xl font-black text-gray-800 mb-8 text-center uppercase tracking-widest">
      Интернэтээс ирсэн мэдээллүүд
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map(post => (
        <div key={post.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <span className="text-xs font-bold text-blue-500 uppercase">Post #{post.id}</span>
          <h4 className="text-xl font-bold text-gray-900 mt-2 mb-4 capitalize">
            {post.title}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Энэ бол API-аас ирсэн бодит өгөгдөл юм. Tailwind ашиглан загварчлав.
          </p>
          <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Дэлгэрэнгүй
          </button>
        </div>
      ))}
    </div>
  </div>
);
}

export default Posts;