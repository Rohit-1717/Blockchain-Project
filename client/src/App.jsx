import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HackathonDetails from "./pages/HackathonDetails";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";
import SignInComponent from "./components/SignIn";
import SignUpComponent from "./components/SignUp";
import WalletConnect from "./components/WalletConnect";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hackathon/:id" element={<HackathonDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/sign-in" element={<SignInComponent />} />
          <Route path="/sign-up" element={<SignUpComponent />} />
          <Route path="/connect-wallet" element={<WalletConnect />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;