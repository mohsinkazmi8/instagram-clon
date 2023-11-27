import './App.css';
import { Route, Routes } from 'react-router-dom';
import SidebarComponent from './components/sidebar/SidebarComponent';
import SignupPage from './pages/singup/SignupPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SidebarComponent/>} />
      <Route path='signup' element={<SignupPage/>} />
    </Routes>
    </>
  );
}

export default App;
