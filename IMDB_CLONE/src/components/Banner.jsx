import React from 'react'

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[90vh] bg-center bg-cover flex items-end"
      style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu59nOrmBWsSVSWby5Jmbkb-Q5_rLwW62FiQ&s)`,
      }}
    >
      <div className='text-white text-center text-2xl font-bold w-full bg-gray-900/60 p-3'>
        Fight Club
      </div>
    </div>
  );
}

export default Banner