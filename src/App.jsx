import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(16,185,129,0.15),transparent),radial-gradient(40rem_30rem_at_120%_10%,rgba(59,130,246,0.12),transparent)]" />
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
