import { useParams } from "react-router-dom";
import { FaCalendar, FaTrophy, FaUsers, FaClock, FaGithub, FaGlobe } from "react-icons/fa";
import { useState } from "react";

const HackathonDetails = () => {
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);

  // Mock data - replace with actual data fetching
  const hackathon = {
    id: "1",
    title: "Web3 Innovation Hackathon",
    description: "Join us for an exciting 48-hour hackathon where developers, designers, and innovators come together to build groundbreaking blockchain solutions. This hackathon focuses on creating decentralized applications that solve real-world problems.",
    deadline: "2024-01-15",
    startDate: "2024-01-01",
    endDate: "2024-01-15",
    prizePool: "50,000",
    participants: 245,
    maxTeamSize: 4,
    status: "Active",
    tracks: [
      "DeFi Solutions",
      "NFT Innovations",
      "DAO Governance",
      "Web3 Social",
    ],
    prizes: [
      { place: "1st Place", amount: "$25,000", extras: "Plus mentorship opportunity" },
      { place: "2nd Place", amount: "$15,000", extras: "Plus cloud credits" },
      { place: "3rd Place", amount: "$10,000", extras: "Plus development tools" },
    ],
    requirements: [
      "Smart contract development experience",
      "Frontend development skills",
      "Understanding of blockchain technology",
      "Innovative mindset",
    ],
  };

  const handleRegister = () => {
    setIsRegistered(true);
    // Add registration logic here
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{hackathon.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <span className="flex items-center">
              <FaCalendar className="mr-2" />
              {hackathon.startDate} - {hackathon.endDate}
            </span>
            <span className="flex items-center">
              <FaUsers className="mr-2" />
              {hackathon.participants} Participants
            </span>
            <span className="flex items-center">
              <FaTrophy className="mr-2" />
              ${hackathon.prizePool} Prize Pool
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Description */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">About the Hackathon</h2>
            <p className="text-gray-600 leading-relaxed">{hackathon.description}</p>
          </div>

          {/* Tracks */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hackathon.tracks.map((track, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">{track}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Prizes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Prizes</h2>
            <div className="space-y-4">
              {hackathon.prizes.map((prize, index) => (
                <div key={index} className="border-l-4 border-yellow-500 pl-4 py-2">
                  <h3 className="font-bold text-lg">{prize.place}</h3>
                  <p className="text-xl text-blue-600 font-semibold">{prize.amount}</p>
                  <p className="text-gray-600">{prize.extras}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Registration Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                hackathon.status === 'Active' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-500 text-white'
              }`}>
                {hackathon.status}
              </span>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Registration Deadline:</span>
                <span className="font-semibold">{hackathon.deadline}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Max Team Size:</span>
                <span className="font-semibold">{hackathon.maxTeamSize} members</span>
              </div>
            </div>
            <button
              onClick={handleRegister}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                isRegistered 
                  ? 'bg-gray-500 text-white cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
              disabled={isRegistered}
            >
              {isRegistered ? 'Registered' : 'Register Now'}
            </button>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Requirements</h2>
            <ul className="space-y-3">
              {hackathon.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetails;