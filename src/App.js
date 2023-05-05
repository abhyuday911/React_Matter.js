import { Route, Routes } from 'react-router-dom';
import './App.css';
import Maatter from './Components/Maatter';
import Profile from './Components/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Maatter/>}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default App; 
