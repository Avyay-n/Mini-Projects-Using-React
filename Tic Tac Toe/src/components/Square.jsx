import React from 'react';

function Square({ value, onSquareClick }) {
  const textColor = value === 'X' ? 'text-pink-500' : 'text-purple-400';
  
  return (
    <button
      onClick={onSquareClick}
      className={`w-24 h-24 bg-gray-800 rounded-md flex items-center justify-center text-5xl font-bold transition duration-200 hover:bg-gray-700 ${textColor}`}
    >
      {value}
    </button>
  );
}

export default Square;