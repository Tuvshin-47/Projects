import Avatar from './components/Avatar';
import Ex01 from './components/Exercises';
import Profile from './components/Profile';
import Todos from './components/Todos';

function App() {
  const header: string = 'This is Avatar profile';
  const today: Date = new Date();

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('mn-MN', { weekday: 'long' }).format();
  }

  return (
    <>
      <h1 className="header">Lesson day 58</h1>
      <div className="profiles">
        <Profile />
        <Profile />
        <Profile />
      </div>
      <h1 className="header">My To do List</h1>
      <div className="todos">
        <Todos />
      </div>
      <div className="avatar">
        <h1 className="header">
          {header}
          {formatDate(today)}
        </h1>
        <Avatar />
      </div>
      <div className="ex01">
        <Ex01 />
      </div>
    </>
  );
}

export default App;
