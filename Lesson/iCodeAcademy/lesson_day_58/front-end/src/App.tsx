import Avatar from "./components/Avatar"
import Profile from "./components/Profile"

function App() {
  const header: string = "This is Avatar Profile";
  const today: Date = new Date();

  function formatDate(date: Date): string {
    return (
      new Intl.DateTimeFormat(
        'mn-MN',
        { weekday: 'long' }
      ).format(date)
    );
  }
  return (
    <div>
      <h1 className="header">Lesson Day 58</h1>
      <div className="profiles">
        <Profile />
        <Profile />
        <Profile />
      </div>
      <div className="">
        <h1>{header} {formatDate(today)}</h1>
        <Avatar />
      </div>
    </div>
  )
}

export default App
