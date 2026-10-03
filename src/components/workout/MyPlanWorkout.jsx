'use client';
import { LuCalendarPlus } from 'react-icons/lu';
import React, { useContext } from 'react';
import { WorkoutContext } from '@/context/WorkoutProvider';
import { toast } from 'react-toastify';

const MyPlanWorkout = ({ cardDetails }) => {
  const { addToMyPlan } = useContext(WorkoutContext);

  const handleAddToPlan = () => {
    if (!addToMyPlan) {
      console.error('addToMyPlan is missing from context');
      return;
    }

    addToMyPlan(cardDetails);
    
    toast.success(`${cardDetails?.name || cardDetails?.title || 'Workout'} added to today's plan!`, {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  return (
    <button 
      onClick={handleAddToPlan}
      className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
    >    
      <LuCalendarPlus className="text-base" />
      <span>Add to todays plan</span>
    </button>
  );
};

export default MyPlanWorkout;
