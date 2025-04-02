import React from 'react';
import { Car, Calendar, CreditCard, CheckCircle } from 'lucide-react';

function HowItWorks() {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Comment ça marche ?</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-blue-100 p-6 rounded-full">
                <Car className="h-12 w-12 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">1. Trouvez la voiture idéale</h2>
                <p className="text-gray-600">
                  Parcourez notre large sélection de véhicules disponibles dans votre région. 
                  Utilisez les filtres pour affiner votre recherche selon vos besoins spécifiques.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-blue-100 p-6 rounded-full">
                <Calendar className="h-12 w-12 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">2. Réservez aux dates souhaitées</h2>
                <p className="text-gray-600">
                  Sélectionnez vos dates de location et effectuez votre réservation en quelques clics. 
                  Le propriétaire confirmera rapidement votre demande.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-blue-100 p-6 rounded-full">
                <CreditCard className="h-12 w-12 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">3. Paiement sécurisé</h2>
                <p className="text-gray-600">
                  Effectuez le paiement en toute sécurité via notre plateforme. 
                  Le montant est débité uniquement après confirmation de la réservation.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-blue-100 p-6 rounded-full">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">4. Profitez de votre location</h2>
                <p className="text-gray-600">
                  Récupérez le véhicule auprès du propriétaire et profitez de votre location en toute tranquillité, 
                  avec une assurance tous risques incluse.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">Prêt à commencer ?</h3>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Rechercher une voiture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;