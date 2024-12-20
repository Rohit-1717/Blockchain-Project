import { Link } from "react-router-dom";
import { FaCalendar, FaTrophy, FaUsers, FaClock } from "react-icons/fa";

const HackathonCard = ({ hackathon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Card Header with Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={hackathon.image || "/api/placeholder/400/320"} 
          alt={hackathon.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            hackathon.status === 'Active' 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-500 text-white'
          }`}>
            {hackathon.status || 'Upcoming'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {hackathon.title}
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {hackathon.description}
        </p>

        {/* Hackathon Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <FaTrophy className="mr-2 text-yellow-500" />
            <span>${hackathon.prizePool || '10,000'} Prize Pool</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaUsers className="mr-2 text-blue-500" />
            <span>{hackathon.participants || '0'} Participants</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaCalendar className="mr-2 text-green-500" />
            <span>{hackathon.startDate || 'Jan 1, 2024'}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaClock className="mr-2 text-red-500" />
            <span>{hackathon.duration || '48h'}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(hackathon.tags || ['Blockchain', 'Web3', 'DeFi']).map((tag, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <Link
          to={`/hackathon/${hackathon.id}`}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HackathonCard;