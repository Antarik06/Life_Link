import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BloodCompatibility from './components/BloodCompatibility';
import FindDonationCenter from './components/FindDonationCenter';
import RequestBlood from './components/RequestBlood';
import OrganizeCamp from './components/OrganizeCamp';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const HomePage = () => (
    <div className="min-h-screen">
      <Hero />
      <BloodCompatibility />
      <FindDonationCenter />
      <RequestBlood />
      <OrganizeCamp />
      <About />
      <Contact />
    </div>
  );

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar 
          isSignedIn={isSignedIn} 
          onSignInClick={() => setShowSignIn(true)}
          onSignOut={() => setIsSignedIn(false)}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
        <Footer />
        
        {showSignIn && (
          <SignIn 
            onClose={() => setShowSignIn(false)}
            onSignIn={() => {
              setIsSignedIn(true);
              setShowSignIn(false);
            }}
          />
        )}
      </div>
    </Router>
  );
}

export default App;