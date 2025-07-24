import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header onClick={() => navigate('/')} className="cursor-pointer mb-8">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Tic Tac Toe
      </h1>
    </header>
  );
}

export default Header;