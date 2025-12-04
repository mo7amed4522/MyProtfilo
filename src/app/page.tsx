import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
