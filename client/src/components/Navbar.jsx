import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">
          Hackathon Rewards
        </Link>
        <div className="flex space-x-4 items-center">
          <Link to="/leaderboard" className="hover:underline">
            Leaderboard
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
          {isSignedIn ? (
            <SignOutButton>
              <button className="bg-red-500 px-4 py-2 rounded">Sign Out</button>
            </SignOutButton>
          ) : (
            <SignInButton>
              <button className="bg-blue-500 px-4 py-2 rounded">Sign In</button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
