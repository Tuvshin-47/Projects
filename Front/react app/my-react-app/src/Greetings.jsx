function Greetings({ name, topic, colorClass = "bg-blue-100 text-blue-700" }) {
  return (
    <div className={`p-4 rounded-lg shadow-sm border-l-4 ${colorClass} mb-3`}>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm opacity-80">{topic} сурч байна.</p>
    </div>
  );
}

export default Greetings;