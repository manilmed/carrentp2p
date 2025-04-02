import React from 'react';
import { Search, Star, Users, Car } from 'lucide-react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("src/pages/toyota-aygo-2020-gallery-07-full_tcm-10-1960522.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.65)'
          }}
        />

        <div className="relative z-10 text-white">
          <div className="container mx-auto px-6 py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Louez la voiture parfaite près de chez vous
              </h1>
              <p className="text-xl mb-8">
                Trouvez la voiture idéale pour tous vos besoins, à des prix compétitifs, directement auprès des propriétaires locaux.
              </p>
              
              <div className="bg-white rounded-lg p-4 shadow-lg max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow">
                    
                    <div className="flex items-center">
                      <Search className="h-5 w-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="Entrez une ville"
                        className="w-full text-gray-900 focus:outline-none"
                      />
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Rechercher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir CarShare ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Communauté de confiance</h3>
              <p className="text-gray-600">
                Propriétaires et locataires vérifiés pour une expérience sûre et fiable.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Large choix de véhicules</h3>
              <p className="text-gray-600">
                Des citadines aux SUV, trouvez le véhicule parfait pour chaque occasion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Assurance incluse</h3>
              <p className="text-gray-600">
                Location 100% assurée pour votre tranquillité d'esprit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Voitures populaires
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
                name: "BMW Série 3",
                price: "65",
                rating: "4.9",
                location: "Paris"
              },
              {
                image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
                name: "Tesla Model 3",
                price: "89",
                rating: "4.8",
                location: "Lyon"
              },
              {
                image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
                name: "Volkswagen Golf",
                price: "45",
                rating: "4.7",
                location: "Marseille"
              }
            ].map((car, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1">{car.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{car.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{car.price}€</span>
                    <span className="text-gray-600">par jour</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;