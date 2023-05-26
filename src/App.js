
import Navbar from './Navbar/Navbar';
import Home from './Home/Home'
import Contact from './Contact/Contact'
import About from './About/About'
import { Route,Routes} from 'react-router-dom'
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';

import Products from './Products/Products';

import Skills from './Skills/Skills';
import Service from './Service/Service';
import Project from './Project/Project';

function App() {
  return (
    <div className="App">
       <Navbar />

   
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
