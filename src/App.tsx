import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Car } from 'lucide-react';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import RentMyCar from './pages/RentMyCar';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8" />
              <span className="text-2xl font-bold">CarShare</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/comment-ca-marche" className="hover:text-blue-200">Comment ça marche</Link>
              <Link to="/louer-ma-voiture" className="hover:text-blue-200">Louer ma voiture</Link>
              <Link to="/connexion" className="hover:text-blue-200">Connexion</Link>
              <Link to="/inscription" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                S'inscrire
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comment-ca-marche" element={<HowItWorks />} />
          <Route path="/louer-ma-voiture" element={<RentMyCar />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
        </Routes>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Car className="h-8 w-8" />
                  <span className="text-2xl font-bold">CarShare</span>
                </div>
                <p className="text-gray-400">
                  La meilleure façon de louer une voiture entre particuliers.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">À propos</h4>
                <ul className="space-y-2">
                  <li><Link to="/comment-ca-marche" className="text-gray-400 hover:text-white">Comment ça marche</Link></li>
                  <li><Link to="/qui-sommes-nous" className="text-gray-400 hover:text-white">Qui sommes-nous</Link></li>
                  <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Aide</h4>
                <ul className="space-y-2">
                  <li><Link to="/aide" className="text-gray-400 hover:text-white">Centre d'aide</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Nous contacter</Link></li>
                  <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Légal</h4>
                <ul className="space-y-2">
                  <li><Link to="/conditions" className="text-gray-400 hover:text-white">Conditions d'utilisation</Link></li>
                  <li><Link to="/confidentialite" className="text-gray-400 hover:text-white">Politique de confidentialité</Link></li>
                  <li><Link to="/mentions-legales" className="text-gray-400 hover:text-white">Mentions légales</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;