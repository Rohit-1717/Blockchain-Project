import React, { useState } from 'react';

const Home = () => {
  const [filter, setFilter] = useState('all'); // State to manage selected filter

  // Mock data array - in a real app, this might come from an API
  const hackathons = [
    {
      id: 1,
      title: "Web3 DeFi Hackathon",
      description: "Build the future of decentralized finance. Create innovative DeFi solutions using blockchain technology.",
      image: "https://developers.moralis.com/wp-content/uploads/2022/09/DeFi-Defined-Hackathon-Moralis-Google.png", // You can add a valid image URL here
      status: "Active",
      prizePool: "10,000",
      participants: 150,
      startDate: "Jan 1, 2024",
      duration: "48h",
      tags: ["Blockchain", "Web3", "DeFi"]
    },
    {
      id: 2,
      title: "NFT Gaming Challenge",
      description: "Develop next-generation gaming experiences with NFT integration.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ahT30YQqAwZgNdGcYen3wVwSWOgCKK9ZrQ&s", // You can add a valid image URL here
      status: "Upcoming",
      prizePool: "15,000",
      participants: 200,
      startDate: "Feb 1, 2024",
      duration: "72h",
      tags: ["Gaming", "NFT", "Metaverse"]
    },
    {
      id: 3,
      title: "DAO Governance Hackathon",
      description: "Create innovative solutions for decentralized autonomous organizations.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABd26ldehhYcp40c86qTQWT0qm3mCLgaN1A&s", // Example image
      status: "Active",
      prizePool: "12,000",
      participants: 175,
      startDate: "Jan 15, 2024",
      duration: "48h",
      tags: ["DAO", "Governance", "Web3"]
    }
  ];

  // Function to filter hackathons based on selected status
  const filteredHackathons = hackathons.filter((hackathon) => {
    if (filter === 'active') return hackathon.status === 'Active';
    if (filter === 'upcoming') return hackathon.status === 'Upcoming';
    return true; // For 'all' and any other filter
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Blockchain Hackathons
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the next generation of builders and innovators. Participate in 
            cutting-edge hackathons and win exciting prizes.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors`}
          >
            All Hackathons
          </button>
          <button 
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-full ${filter === 'active' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors`}
          >
            Active
          </button>
          <button 
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-full ${filter === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors`}
          >
            Upcoming
          </button>
          <button 
            onClick={() => setFilter('past')}
            className={`px-4 py-2 rounded-full ${filter === 'past' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors`}
          >
            Past
          </button>
        </div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-white rounded-lg shadow-md p-6">
              {hackathon.image && (
                <img 
                  src={hackathon.image} 
                  alt={hackathon.title} 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{hackathon.title}</h2>
              <p className="text-gray-700 mb-4">{hackathon.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Status: {hackathon.status}</span>
                <span>Prize Pool: ${hackathon.prizePool}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Participants: {hackathon.participants}</span>
                <span>Starts: {hackathon.startDate}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - Optional */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Load More Hackathons
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
