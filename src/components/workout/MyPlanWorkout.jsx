'use client';
import { LuCalendarPlus } from 'react-icons/lu';
import React, { useContext } from 'react';
import { WorkoutContext } from '@/context/WorkoutProvider';
import { toast } from 'react-toastify'; // Ensure toast is imported

const MyPlanWorkout = ({ cardDetails }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  const handleAddToPlan = () => {
    console.log('Add to todays plan button clicked', cardDetails);

    setWorkouts((prevWorkouts) => [...prevWorkouts, cardDetails]);

    toast.success(`${cardDetails?.title || 'Workout'} added to todays plan!`, {
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

// 'use client';
// import { LuCalendarPlus } from 'react-icons/lu';
// import React from 'react';
// import { useContext } from 'react';
// import { WorkoutContext } from '@/context/WorkoutProvider';
 
// const MyPlanWorkout = ({ cardDetails }) => {
//   const {workouts,setWorkouts}=useContext(WorkoutContext);
//   console.log('WorkoutContext data:', workouts, setWorkouts);
//     const MyPlanButton=()=>{
//         console.log('Add to todays plan button clicked', cardDetails);
//     }   
// setWorkouts((prevWorkouts) => [...prevWorkouts, cardDetails]);

// toast.success(`${cardDetails.title} added to todays plan!`, {
//   position: "top-right",
//   autoClose: 3000})



//   return (
//     <button 
//       onClick={() => MyPlanButton(cardDetails)}
//       className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
//     >    
//       <LuCalendarPlus className="text-base" />
//       <span>Add to todays plan</span>
//     </button>
//   );
// };

// export default MyPlanWorkout;