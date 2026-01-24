import { Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';
import './css/App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/Products">Продукты</Link>
        <Link to="/Register">Регистрация</Link>
        <Link to="/Login">Вход</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;