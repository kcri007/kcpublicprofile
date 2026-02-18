import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Newsletter from './pages/Newsletter';
import Article from './pages/Article';
import { ChatWidget } from './components/chat/ChatWidget';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/newsletter/:id" element={<Article />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
