"use client";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faUser, faRightFromBracket, faHospitalUser, faIdCard } from '@fortawesome/free-solid-svg-icons';
import Auth from "@/components/Auth";

export default function Header({ onNavClick, auth, setAuth, onLogout }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const storedAuth = auth ? auth : null;

  useEffect(() => {
    console.log("Auth state changed:", auth);
  }, [auth]);

  const handleLoginClick = () => {
    setIsAuthOpen(true);
  };

  const handleCloseAuth = () => {
    setIsAuthOpen(false);
  };

  const handleLogoutClick = () => {
    setAuth(null);
    onLogout();
  };

  return (
    <header className="bg-purple-600 text-white py-3 px-4 w-full shadow-md fixed top-0 z-50">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-12 h-12 md:w-24 md:h-24 flex items-center justify-center bg-purple-500 rounded-full shadow-lg">
              <button onClick={() => onNavClick('home')}>
                <FontAwesomeIcon icon={faHospital} className="text-2xl md:text-4xl" />
              </button>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-lg md:text-2xl font-bold">Number One TH Hospital</h1>
              <p className="text-sm md:text-lg">We care for you</p>
            </div>
          </div>

          <nav className="flex flex-row gap-1 md:gap-4">
            {auth ? (
              <>
                <button
                  onClick={() => onNavClick('patients')}
                  className="text-white hover:bg-purple-700 hover:scale-105 transform transition-transform px-3 py-2 text-sm md:text-base rounded-md shadow-md"
                >
                  <FontAwesomeIcon icon={faHospitalUser} className="mr-1 md:mr-2" />
                  <span className="hidden md:inline">Patients</span>
                </button>

                <button
                  onClick={() => onNavClick('rights')}
                  className="text-white hover:bg-purple-700 hover:scale-105 transform transition-transform px-3 py-2 text-sm md:text-base rounded-md shadow-md"
                >
                  <FontAwesomeIcon icon={faIdCard} className="mr-1 md:mr-2" />
                  <span className="hidden md:inline">Rights</span>
                </button>

                <button
                  onClick={handleLogoutClick}
                  className="text-white hover:bg-purple-700 hover:scale-105 transform transition-transform px-3 py-2 text-sm md:text-base rounded-md shadow-md"
                >
                  Hello, {storedAuth}
                  <FontAwesomeIcon icon={faRightFromBracket} className="ps-2 mr-1 md:mr-2" />
                </button>
              </>
            ) : (
              <button
                onClick={handleLoginClick}
                className="text-white hover:bg-purple-700 hover:scale-105 transform transition-transform px-3 py-2 text-sm md:text-base rounded-md shadow-md"
              >
                <FontAwesomeIcon icon={faUser} className="mr-1 md:mr-2" />
                <span className="hidden md:inline">Login</span>
              </button>
            )}
          </nav>
        </div>
      </div>

      {/* Window/Dialog for Login */}
      {isAuthOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-md shadow-lg p-6 w-11/12 max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-purple-600">Login</h2>
              <button onClick={handleCloseAuth} className="text-red-500">&times;</button>
            </div>
            <Auth isOpen={isAuthOpen} onClose={handleCloseAuth} setAuth={setAuth} />
          </div>
        </div>
      )}
    </header>
  );
}
