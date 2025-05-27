import React, { useState, useEffect } from 'react';
import './App.css';

// Traditional Rider-Waite Tarot Cards with In-Depth Daily Meanings
const tarotCards = [
  {
    id: 0,
    name: "The Fool",
    number: "0",
    meaning: "New beginnings, innocence, spontaneity, a free spirit",
    description: "The Fool represents the beginning of a journey, approaching life with wonder and openness. It's time to take a leap of faith!",
    dailyGuidance: {
      morning: "Start your day with an open mind and heart. Today brings opportunities for fresh starts and new perspectives. Don't overthink - trust your instincts.",
      energy: "Embrace your inner child today. Take risks that feel right, even if they seem unconventional. Your spontaneity will lead to unexpected discoveries.",
      challenge: "You may feel uncertain about a decision today. Remember that not knowing all the answers is perfectly fine - sometimes the best adventures begin with a single brave step.",
      opportunity: "A chance for a completely new beginning presents itself today. Whether it's a new project, relationship, or way of thinking, trust your courage to explore uncharted territory.",
      evening: "Reflect on the bold choices you made today. Even if things didn't go as planned, you've learned something valuable about trusting yourself."
    },
    astrology: "Uranus",
    element: "Air",
    keywords: ["New start", "Adventure", "Innocence", "Trust", "Courage"],
    image: "https://images.unsplash.com/photo-1600430073932-e915854d9d4d"
  },
  {
    id: 1,
    name: "The Magician",
    number: "I",
    meaning: "Manifestation, resourcefulness, power, inspired action",
    description: "The Magician reminds you that you have all the tools you need to succeed. Focus your will and manifest your dreams!",
    dailyGuidance: {
      morning: "You wake up today with incredible creative power. Set clear intentions for what you want to accomplish - the universe is ready to support your goals.",
      energy: "Your ability to influence and create is at its peak today. Use your skills, knowledge, and natural talents to make things happen. You're in the driver's seat.",
      challenge: "Don't scatter your energy across too many projects today. Focus your magical abilities on one or two important goals for maximum impact.",
      opportunity: "A situation requiring leadership and innovation appears today. You have exactly the right combination of skills and vision to handle it brilliantly.",
      evening: "Review what you manifested today. Notice how your focused intention and action created real results in your world."
    },
    astrology: "Mercury",
    element: "Air",
    keywords: ["Manifestation", "Skill", "Concentration", "Action", "Power"],
    image: "https://images.pexels.com/photos/14730819/pexels-photo-14730819.jpeg"
  },
  {
    id: 2,
    name: "The High Priestess",
    number: "II",
    meaning: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
    description: "Trust your intuition and inner wisdom. The answers you seek are already within you.",
    dailyGuidance: {
      morning: "Pay attention to your dreams and the subtle messages your subconscious is sending you today. Your intuition is especially strong right now.",
      energy: "Today calls for stillness and deep listening. Instead of rushing into action, take time to tune into your inner wisdom and let it guide your decisions.",
      challenge: "Others may pressure you to make quick decisions today, but your power lies in patient observation. Don't let external noise drown out your inner voice.",
      opportunity: "A mystery or hidden knowledge reveals itself to you today. Trust your psychic abilities and pay attention to symbols, synchronicities, and gut feelings.",
      evening: "Spend quiet time in meditation or journaling. The insights that come to you in stillness tonight will illuminate tomorrow's path."
    },
    astrology: "Moon",
    element: "Water",
    keywords: ["Intuition", "Mystery", "Subconscious", "Wisdom", "Psychic"],
    image: "https://images.unsplash.com/photo-1600430086946-2d9fc61bbefc"
  },
  {
    id: 3,
    name: "The Empress",
    number: "III",
    meaning: "Femininity, beauty, nature, nurturing, abundance",
    description: "The Empress represents fertility, creativity, and abundance. Embrace your nurturing side and watch things flourish.",
    dailyGuidance: {
      morning: "Connect with nature today - even a few minutes outdoors will recharge your creative energy. Your nurturing instincts are your superpower right now.",
      energy: "Today is perfect for creative projects, caring for others, or beautifying your environment. Your ability to bring life and growth to situations is remarkable.",
      challenge: "You might feel pulled in many directions by people needing your care today. Remember to nurture yourself too - you can't pour from an empty cup.",
      opportunity: "A creative project or relationship is ready to flourish under your loving attention. Your gentle guidance will help something beautiful grow.",
      evening: "Celebrate the abundance already present in your life. Notice how your caring energy today created more love, beauty, or prosperity around you."
    },
    astrology: "Venus",
    element: "Earth",
    keywords: ["Abundance", "Creativity", "Nurturing", "Nature", "Fertility"],
    image: "https://images.unsplash.com/photo-1600429753199-5376c2738737"
  },
  {
    id: 4,
    name: "The Emperor",
    number: "IV",
    meaning: "Authority, structure, control, fatherly figure",
    description: "The Emperor represents leadership and structure. Take charge of your situation with confidence and authority.",
    dailyGuidance: {
      morning: "Today requires your leadership and organizational skills. Approach challenges with confidence and create the structure needed for success.",
      energy: "Your natural authority shines today. Others look to you for guidance and stability. Step into your power with wisdom and fairness.",
      challenge: "Avoid being overly controlling or rigid today. True leadership means knowing when to be firm and when to be flexible.",
      opportunity: "A situation requires someone to take charge and bring order to chaos. Your ability to create systems and lead with integrity is exactly what's needed.",
      evening: "Reflect on how you used your authority today. Did you lead with both strength and compassion? Learn from both your successes and any missteps."
    },
    astrology: "Aries",
    element: "Fire",
    keywords: ["Leadership", "Authority", "Structure", "Control", "Stability"],
    image: "https://images.unsplash.com/photo-1600429991827-5224817554f8"
  },
  {
    id: 5,
    name: "The Hierophant",
    number: "V",
    meaning: "Spiritual wisdom, religious beliefs, conformity, tradition",
    description: "The Hierophant represents learning from tradition and seeking spiritual guidance. Honor the wisdom of those who came before.",
    dailyGuidance: {
      morning: "Seek guidance from mentors, spiritual teachers, or traditional wisdom today. The answers you need may come through established practices or institutions.",
      energy: "Today favors following proven methods rather than reinventing the wheel. Honor tradition while finding your own authentic path within it.",
      challenge: "You may feel torn between conforming and rebelling today. Find the balance between respecting tradition and staying true to your personal beliefs.",
      opportunity: "A teacher, mentor, or spiritual community offers exactly the guidance you need right now. Be open to learning from established wisdom.",
      evening: "Consider what traditions or teachings served you well today. How can you honor the wisdom of the past while continuing to grow into your authentic self?"
    },
    astrology: "Taurus",
    element: "Earth",
    keywords: ["Tradition", "Conformity", "Morality", "Ethics", "Teaching"],
    image: "https://images.pexels.com/photos/27967867/pexels-photo-27967867.jpeg"
  },
  {
    id: 6,
    name: "The Lovers",
    number: "VI",
    meaning: "Love, harmony, relationships, choices, union",
    description: "The Lovers represent important choices about relationships and values. Follow your heart while using your head.",
    dailyGuidance: {
      morning: "Today brings important decisions about relationships or values. Take time to understand what truly matters to your heart before choosing.",
      energy: "Your relationships are highlighted today. Focus on creating harmony and deeper connections with those you love. Communication is key.",
      challenge: "You may face a choice between what's easy and what's right today. Trust your moral compass and choose love over fear.",
      opportunity: "A relationship reaches a new level of understanding and connection today. Whether romantic, friendship, or family - love deepens through honest communication.",
      evening: "Reflect on the choices you made in relationships today. Did you act from love and authenticity? Every interaction is a chance to practice compassion."
    },
    astrology: "Gemini",
    element: "Air",
    keywords: ["Love", "Choice", "Harmony", "Relationships", "Union"],
    image: "https://images.pexels.com/photos/27967870/pexels-photo-27967867.jpeg"
  }
];

const TarotApp = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeOfDay = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'energy';
    return 'evening';
  };

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

  const getCurrentGuidance = (card) => {
    const timeOfDay = getTimeOfDay();
    return card.dailyGuidance[timeOfDay];
  };

  const formatTime = () => {
    return currentTime.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            🔮 Traditional Tarot Reading 🔮
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-2">
            Discover your daily guidance with authentic Rider-Waite tarot cards
          </p>
          <p className="text-lg text-yellow-300 font-semibold">
            {formatTime()}
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
                      <div className="text-4xl mb-2">🎴</div>
                      <div className="text-lg font-semibold">
                        {isDrawing ? 'Drawing...' : 'Draw Your Daily Card'}
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
              <h2 className="text-2xl font-semibold mb-4">🌟 Your Daily Tarot Guidance</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl mb-3">🌅</div>
                  <h3 className="font-semibold mb-2">Morning Insight</h3>
                  <p className="text-gray-300">Start your day with clarity and purpose through traditional tarot wisdom.</p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl mb-3">🎴</div>
                  <h3 className="font-semibold mb-2">Authentic Cards</h3>
                  <p className="text-gray-300">Experience genuine Rider-Waite tarot imagery with centuries of wisdom.</p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl mb-3">💫</div>
                  <h3 className="font-semibold mb-2">Daily Application</h3>
                  <p className="text-gray-300">Receive personalized guidance for your specific day and time.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
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
              <div className="grid lg:grid-cols-3 gap-8 mb-8 animate-fade-in">
                {/* Card Meaning */}
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <h2 className="text-3xl font-bold mb-4 text-yellow-400">{selectedCard.name}</h2>
                  <p className="text-lg mb-4 text-gray-200">{selectedCard.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-pink-300 mb-2">Traditional Meaning:</h3>
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

                {/* Daily Guidance */}
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">📅 Today's Guidance</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-300">
                        {getTimeOfDay() === 'morning' ? '🌅 Morning Energy' : 
                         getTimeOfDay() === 'energy' ? '☀️ Daytime Focus' : '🌙 Evening Reflection'}
                      </h4>
                      <p className="text-sm text-gray-200">
                        {getCurrentGuidance(selectedCard)}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="border-l-4 border-yellow-400 pl-4">
                        <h5 className="font-semibold text-pink-300">💪 Challenge Guidance:</h5>
                        <p className="text-sm text-gray-300">{selectedCard.dailyGuidance.challenge}</p>
                      </div>
                      
                      <div className="border-l-4 border-green-400 pl-4">
                        <h5 className="font-semibold text-green-300">🌟 Opportunity:</h5>
                        <p className="text-sm text-gray-300">{selectedCard.dailyGuidance.opportunity}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Astrology Connection */}
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">🌟 Astrology & Elements</h3>
                  
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
                    <h4 className="font-semibold mb-2">✨ Elemental Wisdom:</h4>
                    <p className="text-sm text-gray-200">
                      The {selectedCard.element.toLowerCase()} element represents {
                        selectedCard.element === 'Air' ? 'thoughts, communication, and new ideas. Let mental clarity guide your decisions today.' : 
                        selectedCard.element === 'Water' ? 'emotions, intuition, and flow. Trust your feelings and go with the natural rhythm.' : 
                        selectedCard.element === 'Fire' ? 'passion, action, and transformation. Channel your energy into bold, confident moves.' : 
                        'material world, stability, and growth. Focus on practical matters and building solid foundations.'
                      }
                    </p>
                  </div>

                  <div className="mt-4 text-center">
                    <div className="text-xs text-gray-400">
                      Reading generated at {currentTime.toLocaleTimeString()}
                    </div>
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
                  🖨️ Save Daily Reading
                </button>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-16 text-gray-400">
          <p>🔮 Traditional Rider-Waite wisdom for modern daily guidance 🔮</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return <TarotApp />;
}

export default App;