import { Route, Routes } from 'react-router-dom';
import './App.css';
import Matter from './Components/Matter';
import Profile from './Components/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Matter />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default App; 
