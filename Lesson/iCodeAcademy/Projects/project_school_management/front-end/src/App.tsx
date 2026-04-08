import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from './components/Navigation';
import Login from './components/Login';
import ParentList from './components/ParentList';
import ParentDetail from './components/ParentDetail';
import ParentForm from './components/ParentForm';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>School Management System</h1>
          </header>
          
          <Navigation />
          
          <main className="container">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/parents" replace />} />
              <Route
                path="/parents"
                element={
                  <ProtectedRoute>
                    <ParentList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/parents/new"
                element={
                  <ProtectedRoute>
                    <ParentForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/parents/:id"
                element={
                  <ProtectedRoute>
                    <ParentDetail />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/parents/:id/edit"
                element={
                  <ProtectedRoute>
                    <ParentForm />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import ParentList from "./components/ParentList";
// import ParentForm from "./components/ParentForm";
// import ParentDetail from "./components/ParentDetail";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>School Management System</h1>
//         </header>
//         <main className="container">
//           <Routes>
//             <Route path="/" element={<Navigate to="/parents" replace />}/>
//             <Route path="/parents" element={<ParentList />} />
//             <Route path="/parents/new" element={<ParentForm />} />
//             <Route path="/parents/:id" element={<ParentDetail />} />
//             <Route path="/parents/:id/edit" element={<ParentForm />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
