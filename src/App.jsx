import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-800">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
