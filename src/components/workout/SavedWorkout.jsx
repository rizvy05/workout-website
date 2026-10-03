'use client';
import React from 'react';
import { LuBookmark } from 'react-icons/lu';

const SavedWorkout = ({ cardDetails }) => {
  const handleSaveForLater = () => {
    console.log('Save for later button clicked', cardDetails);
    // Add your save logic here
  };

  return (
    <button 
      onClick={handleSaveForLater}
      className="border border-gray-800 bg-gray-900/50 hover:bg-gray-800 text-white font-extrabold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
    >
      <LuBookmark className="text-base" />
      <span>Save for later</span>
    </button>
  );
};

export default SavedWorkout;
// 'use client';
// import React from 'react';
//  import {LuBookmark } from 'react-icons/lu';
// const SavedWorkout = () => {
//     return 
//         <button className="border border-gray-800 hover:bg-gray-900 text-gray-300 font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-colors cursor-pointer">
//             <LuBookmark className="text-base text-gray-400" />
//             <span>Save for later</span>
//         </button>
// };

// export default SavedWorkout;