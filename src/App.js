import logo from './logo.svg';
import './App.css';
import Home from '../src/Home/Home'
import Contact from '../src/Contact/Contact'
import About from '../src/About/About'
import {Link, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>

   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   
    </div>
  );
}

export default App;
