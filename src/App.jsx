import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>Página About</div>} />
          <Route path="/shop" element={<div>Página Shop</div>} />
          <Route path="/contact" element={<div>Página Contact</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
