import React, { useState, useEffect } from 'react';
import './App.css';

// Tarot card data with astrology connections
const tarotCards = [
  {
    id: 0,
    name: "The Fool",
    number: "0",
    meaning: "New beginnings, innocence, spontaneity, a free spirit",
    description: "The Fool represents the beginning of a journey, approaching life with wonder and openness. It's time to take a leap of faith!",
    astrology: "Uranus",
    element: "Air",
    keywords: ["New start", "Adventure", "Innocence", "Trust"],
    image: "https://images.unsplash.com/photo-1607773709367-06b7a91f7e4a"
  },
  {
    id: 1,
    name: "The Magician",
    number: "I",
    meaning: "Manifestation, resourcefulness, power, inspired action",
    description: "The Magician reminds you that you have all the tools you need to succeed. Focus your will and manifest your dreams!",
    astrology: "Mercury",
    element: "Air",
    keywords: ["Manifestation", "Skill", "Concentration", "Action"],
    image: "https://images.pexels.com/photos/11437486/pexels-photo-11437486.jpeg"
  },
  {
    id: 2,
    name: "The High Priestess",
    number: "II",
    meaning: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
    description: "Trust your intuition and inner wisdom. The answers you seek are already within you.",
    astrology: "Moon",
    element: "Water",
    keywords: ["Intuition", "Mystery", "Subconscious", "Wisdom"],
    image: "https://images.unsplash.com/photo-1568817864737-638432504138"
  },
  {
    id: 3,
    name: "The Empress",
    number: "III",
    meaning: "Femininity, beauty, nature, nurturing, abundance",
    description: "The Empress represents fertility, creativity, and abundance. Embrace your nurturing side and watch things flourish.",
    astrology: "Venus",
    element: "Earth",
    keywords: ["Abundance", "Creativity", "Nurturing", "Nature"],
    image: "https://images.pexels.com/photos/3088369/pexels-photo-3088369.jpeg"
  },
  {
    id: 4,
    name: "The Emperor",
    number: "IV",
    meaning: "Authority, structure, control, fatherly figure",
    description: "The Emperor represents leadership and structure. Take charge of your situation with confidence and authority.",
    astrology: "Aries",
    element: "Fire",
    keywords: ["Leadership", "Authority", "Structure", "Control"],
    image: "https://images.unsplash.com/photo-1624274579623-18121fc8126e"
  },
  {
    id: 5,
    name: "The Hierophant",
    number: "V",
    meaning: "Spiritual wisdom, religious beliefs, conformity, tradition",
    description: "The Hierophant represents learning from tradition and seeking spiritual guidance. Honor the wisdom of those who came before.",
    astrology: "Taurus",
    element: "Earth",
    keywords: ["Tradition", "Conformity", "Morality", "Ethics"],
    image: "https://images.unsplash.com/photo-1607773709367-06b7a91f7e4a"
  }
];

const TarotApp = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showReading, setShowReading] = useState(false);

  const drawCard = () => {
    if (isDrawing) return;
    
    setIsDrawing(true);
    setShowReading(false);
    setSelectedCard(null);

    // Simulate card shuffling animation
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      setSelectedCard(tarotCards[randomIndex]);
      setIsDrawing(false);
      setTimeout(() => setShowReading(true), 500);
    }, 2000);
  };

  const resetReading = () => {
    setSelectedCard(null);
    setShowReading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            ✨ Mystic Tarot ✨
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover your path with beautiful artistic tarot cards. Perfect for beginners seeking guidance and wisdom.
          </p>
        </div>

        {/* Main Content */}
        {!selectedCard ? (
          <div className="text-center">
            <div className="mb-8">
              <div className="relative inline-block">
                <div className={`w-40 h-60 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-2xl border-2 border-yellow-400 cursor-pointer transform transition-all duration-300 hover:scale-105 ${isDrawing ? 'animate-pulse' : ''}`} 
                     onClick={drawCard}>
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🌟</div>
                      <div className="text-lg font-semibold">
                        {isDrawing ? 'Drawing...' : 'Draw Card'}
                      </div>
                    </div>
                  </div>
                </div>
                {isDrawing && (
                  <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg animate-pulse"></div>
                )}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">🔮 How to use Mystic Tarot</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl mb-3">🧘‍♀️</div>
                  <h3 className="font-semibold mb-2">1. Clear Your Mind</h3>
                  <p className="text-gray-300">Take a deep breath and focus on your question or situation.</p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl mb-3">🎴</div>
                  <h3 className="font-semibold mb-2">2. Draw Your Card</h3>
                  <p className="text-gray-300">Click the card above to draw your personalized reading.</p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl mb-3">⭐</div>
                  <h3 className="font-semibold mb-2">3. Reflect & Apply</h3>
                  <p className="text-gray-300">Read the meaning and see how it applies to your life.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Card Display */}
            <div className="text-center mb-8">
              <div className={`inline-block transition-all duration-1000 ${showReading ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                <div className="relative">
                  <img 
                    src={selectedCard.image} 
                    alt={selectedCard.name}
                    className="w-64 h-96 object-cover rounded-lg shadow-2xl border-4 border-yellow-400"
                  />
                  <div className="absolute -top-4 -left-4 bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {selectedCard.number}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Information */}
            {showReading && (
              <div className="grid md:grid-cols-2 gap-8 mb-8 animate-fade-in">
                {/* Main Meaning */}
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <h2 className="text-3xl font-bold mb-4 text-yellow-400">{selectedCard.name}</h2>
                  <p className="text-lg mb-4 text-gray-200">{selectedCard.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-pink-300 mb-2">Core Meaning:</h3>
                    <p className="text-gray-300">{selectedCard.meaning}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedCard.keywords.map((keyword, index) => (
                      <span key={index} className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Astrology Connection */}
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">🌟 Astrology Connection</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">🪐</span>
                      <div>
                        <span className="font-semibold text-pink-300">Ruling Planet: </span>
                        <span className="text-gray-200">{selectedCard.astrology}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-lg mr-3">🌍</span>
                      <div>
                        <span className="font-semibold text-pink-300">Element: </span>
                        <span className="text-gray-200">{selectedCard.element}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <h4 className="font-semibold mb-2">✨ For Beginners:</h4>
                    <p className="text-sm text-gray-200">
                      The {selectedCard.element.toLowerCase()} element represents {selectedCard.element === 'Air' ? 'thoughts and communication' : selectedCard.element === 'Water' ? 'emotions and intuition' : selectedCard.element === 'Fire' ? 'passion and action' : 'material world and stability'}. 
                      {selectedCard.astrology} influences how this energy manifests in your life.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {showReading && (
              <div className="text-center animate-fade-in">
                <button 
                  onClick={resetReading}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 mr-4"
                >
                  🔄 Draw Another Card
                </button>
                <button 
                  onClick={() => window.print()}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  🖨️ Save Reading
                </button>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-16 text-gray-400">
          <p>✨ Trust your intuition and let the cards guide you ✨</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return <TarotApp />;
}

export default App;