import Greetings from './Greetings';
import Posts from './posts';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">


      <h1 className="text-4xl font-bold text-green-600 mb-8">
        Сайн уу, Tailwind Ажиллаж байна!
      </h1>

      <div className="space-y-4">
        <Greetings className="text-red" name="Dorj" topic="React + Tailwind" />
        <Greetings name="Bold" topic="React + Tailwind" />
        <Greetings name="Saraa" topic="React + Tailwind" />
        <Posts />
      </div>
    </div>
  );
}

export default App;