'use client';
import { LuBookmark } from 'react-icons/lu';
import React, { useContext } from 'react';
import { WorkoutContext } from '@/context/WorkoutProvider';
import { toast } from 'react-toastify';

const SavedWorkout = ({ cardDetails }) => {
  const { addToSaved } = useContext(WorkoutContext);

  const handleSaveForLater = () => {
    addToSaved(cardDetails);
    toast.info(`${cardDetails?.name || cardDetails?.title || 'Workout'} saved for later!`, {
      position: 'top-right',
      autoClose: 3000,
    });
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
