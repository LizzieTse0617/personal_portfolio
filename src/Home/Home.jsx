import Introduction from '../Introduction/Introduction';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Touch from '../Touch/Touch';
import Project from '../Project/Project';
import Service from '../Service/Service';
import GoUp from '../GoUp/GoUp';

export default function Home() {
  return (
    <div className="home">
      <section id="home">
        <Introduction />

        <About />
        <Skills />
        <Work />
        <Service />
        <Project />
        <Touch />
        <Contact />
        <GoUp />
      </section>
    </div>
  );
}
