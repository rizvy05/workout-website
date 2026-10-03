'use client';

import React, { useState, useContext, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LuChevronDown, 
  LuClock, 
  LuFlame, 
  LuStar, 
  LuCheck, 
  LuX 
} from 'react-icons/lu';
import toast, { Toaster } from 'react-hot-toast';
import { WorkoutContext } from '@/context/WorkoutProvider';

const MySavedPage = () => {
  const [activeTab, setActiveTab] = useState('saved');
  const [sortBy, setSortBy] = useState('duration');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  const { 
    myPlanWorkouts = [], 
    savedWorkouts = [], 
    removeFromSaved, 
    removeFromPlan,
    markAsDone 
  } = useContext(WorkoutContext);

  // Pick active workout list based on tab
  const baseWorkouts = activeTab === 'today' ? myPlanWorkouts : savedWorkouts;

  // Calculate dynamic summary stats based on current tab list
  const totalExercises = baseWorkouts.length;
  const totalMinutes = baseWorkouts.reduce((acc, curr) => {
    const mins = parseInt(curr.duration || curr.time || 0, 10);
    return acc + (isNaN(mins) ? 0 : mins);
  }, 0);
  const totalCalories = baseWorkouts.reduce((acc, curr) => {
    const cals = parseInt(curr.caloriesBurned || curr.calories || 0, 10);
    return acc + (isNaN(cals) ? 0 : cals);
  }, 0);

  // Sort workouts according to selected metric
  const currentWorkouts = useMemo(() => {
    return [...baseWorkouts].sort((a, b) => {
      if (sortBy === 'duration') {
        const durA = parseInt(a.duration || a.time || 0, 10);
        const durB = parseInt(b.duration || b.time || 0, 10);
        return durB - durA;
      }
      if (sortBy === 'calories') {
        const calA = parseInt(a.caloriesBurned || a.calories || 0, 10);
        const calB = parseInt(b.caloriesBurned || b.calories || 0, 10);
        return calB - calA;
      }
      if (sortBy === 'rating') {
        const rateA = parseFloat(a.rating || 0);
        const rateB = parseFloat(b.rating || 0);
        return rateB - rateA;
      }
      return 0;
    });
  }, [baseWorkouts, sortBy]);

  const handleSortSelect = (option) => {
    setSortBy(option);
    setIsSortOpen(false);
  };

  // Remove handler with Toast notification
  const handleRemove = (workout) => {
    if (activeTab === 'today') {
      if (removeFromPlan) removeFromPlan(workout.id);
    } else {
      if (removeFromSaved) removeFromSaved(workout.id);
    }
    
    // Toast notification
    if (typeof toast !== 'undefined') {
      toast.success(`${workout.name || workout.title || 'Workout'} removed from ${activeTab === 'today' ? 'plan' : 'saved'}`);
    }
  };

  // Mark as Done toggle handler
  const handleMarkAsDone = (workout) => {
    if (!completedWorkouts.includes(workout.id)) {
      setCompletedWorkouts((prev) => [...prev, workout.id]);
      if (markAsDone) markAsDone(workout.id);

      if (typeof toast !== 'undefined') {
        toast.success(`Marked "${workout.name || workout.title || 'Workout'}" as completed!`);
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0f17] text-white px-4 md:px-12 py-10 antialiased">
      {/* Toast Notification Container */}
      <Toaster position="bottom-right" toastOptions={{ style: { background: '#121620', color: '#fff' } }} />

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-1">
            MY SAVED WORKOUTS
          </h1>
          <p className="text-gray-400 text-sm font-medium">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Dynamic Stats Summary */}
        <div className="bg-[#121620] border border-gray-800/80 rounded-2xl p-6 md:p-8 grid grid-cols-3 gap-4 shadow-xl">
          <div>
            <span className="text-gray-400 text-xs font-semibold block mb-1">
              Exercises
            </span>
            <span className="text-4xl md:text-5xl font-black text-[#ccff00]">
              {totalExercises}
            </span>
          </div>

          <div>
            <span className="text-gray-400 text-xs font-semibold block mb-1">
              Minutes
            </span>
            <span className="text-4xl md:text-5xl font-black text-white">
              {totalMinutes}
            </span>
          </div>

          <div>
            <span className="text-gray-400 text-xs font-semibold block mb-1">
              Calories
            </span>
            <span className="text-4xl md:text-5xl font-black text-white">
              {totalCalories}
            </span>
          </div>
        </div>

        {/* Navigation Tabs & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="bg-[#121620] border border-gray-800/80 p-1 rounded-xl inline-flex">
            <button
              onClick={() => setActiveTab('today')}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'today'
                  ? 'bg-[#1e2533] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Today&apos;s Plan ({myPlanWorkouts.length})
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'saved'
                  ? 'bg-[#1e2533] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Saved ({savedWorkouts.length})
            </button>
          </div>

          {/* Sort Filter */}
          <div className="relative self-end sm:self-auto flex items-center gap-3">
            <span className="text-xs font-medium text-gray-400">Sort By</span>
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="bg-[#121620] border border-gray-800/80 hover:border-gray-700 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors min-w-32 justify-between"
              >
                <span className="capitalize">{sortBy}</span>
                <LuChevronDown className={`text-sm text-gray-400 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#121620] border border-gray-800/90 rounded-xl shadow-2xl py-1 z-30">
                  <button
                    onClick={() => handleSortSelect('duration')}
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-[#1e2533] transition-colors ${sortBy === 'duration' ? 'text-[#ccff00] font-bold' : 'text-gray-300'}`}
                  >
                    Duration
                  </button>
                  <button
                    onClick={() => handleSortSelect('calories')}
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-[#1e2533] transition-colors ${sortBy === 'calories' ? 'text-[#ccff00] font-bold' : 'text-gray-300'}`}
                  >
                    Calories
                  </button>
                  <button
                    onClick={() => handleSortSelect('rating')}
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-[#1e2533] transition-colors ${sortBy === 'rating' ? 'text-[#ccff00] font-bold' : 'text-gray-300'}`}
                  >
                    Rating
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Workout Cards or Empty State */}
        {currentWorkouts.length > 0 ? (
          <div className="space-y-4">
            {currentWorkouts.map((workout) => {
              const isDone = completedWorkouts.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className="bg-[#121620] border border-gray-800/80 hover:border-gray-700 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all shadow-lg"
                >
                  {/* Left Side: Thumbnail & Meta */}
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative w-28 h-20 md:w-36 md:h-24 rounded-xl overflow-hidden bg-gray-900 shrink-0">
                      <Image
                        src={workout.image || '/logo.png'}
                        alt={workout.name || workout.title || 'Workout'}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base md:text-lg font-black uppercase text-white tracking-wide">
                        {workout.name || workout.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-medium">
                        {workout.equipment || workout.category || 'General'}
                      </p>

                      <div className="flex items-center gap-4 pt-1 text-xs text-gray-300 font-medium">
                        <span className="flex items-center gap-1">
                          <LuClock className="text-[#ccff00] text-sm" />
                          {workout.duration ? `${workout.duration} min` : '8 min'}
                        </span>
                        <span className="flex items-center gap-1">
                          <LuFlame className="text-[#ccff00] text-sm" />
                          {workout.caloriesBurned || workout.calories ? `${workout.caloriesBurned || workout.calories} kcal` : '70 kcal'}
                        </span>
                        <span className="flex items-center gap-1">
                          <LuStar className="text-[#ccff00] text-sm fill-[#ccff00]" />
                          {workout.rating || '4.5'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Action Buttons */}
                  <div className="flex items-center gap-3 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-gray-800/60">
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="border border-gray-700/80 hover:border-gray-500 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
                    >
                      View Details
                    </Link>

                    {/* Mark as Done / Done Button */}
                    <button
                      onClick={() => handleMarkAsDone(workout)}
                      disabled={isDone}
                      className={`font-extrabold text-xs px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-all whitespace-nowrap ${
                        isDone
                          ? 'bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-700'
                          : 'bg-[#ccff00] hover:bg-[#b8e600] text-black shadow-[0_0_15px_rgba(204,255,0,0.15)]'
                      }`}
                    >
                      <LuCheck className="text-sm stroke-[3]" />
                      {isDone ? 'Done' : 'Mark as Done'}
                    </button>

                    {/* Cross / Remove Button */}
                    <button
                      onClick={() => handleRemove(workout)}
                      className="text-gray-500 hover:text-red-400 p-2 transition-colors ml-1"
                      title="Remove"
                    >
                      <LuX className="text-lg" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="border border-dashed border-gray-800/80 rounded-2xl py-24 px-6 flex flex-col items-center justify-center text-center bg-[#121620]/30 min-h-95">
            <h2 className="text-xl font-black tracking-wider uppercase text-white mb-2">
              {activeTab === 'today' ? 'NO LIFTS FOR TODAY' : 'NOTHING SAVED YET'}
            </h2>
            <p className="text-gray-400 text-xs font-medium mb-6 max-w-sm">
              {activeTab === 'today'
                ? 'Add up to five lifts to your schedule to get today moving.'
                : 'Browse the library and save lifts to build your workout bank.'}
            </p>
            <Link
              href="/workouts"
              className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs px-6 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_25px_rgba(204,255,0,0.4)]"
            >
              Go to workouts
            </Link>
          </div>
        )}

      </div>
    </main>
  );
};

export default MySavedPage;








// 'use client';

// import React, { useState, useContext } from 'react';
// import Link from 'next/link';
// import { LuChevronDown } from 'react-icons/lu';
// import { WorkoutContext } from '@/context/WorkoutProvider';

// const MySavedPage = () => {
//   const { workouts } = useContext(WorkoutContext);
//   const [activeTab, setActiveTab] = useState('saved');

//   return (
//     <main className="min-h-screen bg-[#0b0f17] text-white px-6 py-10 antialiased">
//       <div className="max-w-6xl mx-auto space-y-8">
     
//         <div>
//           <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-1">
//             MY Saved Workouts
//           </h1>
//           <p className="text-gray-400 text-sm font-medium">
//             Cap of five lifts for today. Finish them, then load more.
//           </p>
//         </div>

//         <div className="bg-[#121620] border border-gray-800/80 rounded-2xl p-6 md:p-8 grid grid-cols-3 gap-4 shadow-xl">
//           <div>
//             <span className="text-gray-400 text-xs font-semibold block mb-1">
//               Exercises
//             </span>
//             <span className="text-4xl md:text-5xl font-black text-[#ccff00]">
//               2
//             </span>
//           </div>

//           <div>
//             <span className="text-gray-400 text-xs font-semibold block mb-1">
//               Minutes
//             </span>
//             <span className="text-4xl md:text-5xl font-black text-white">
//               23
//             </span>
//           </div>

//           <div>
//             <span className="text-gray-400 text-xs font-semibold block mb-1">
//               Calories
//             </span>
//             <span className="text-4xl md:text-5xl font-black text-white">
//               190
//             </span>
//           </div>
//         </div>

       
//         <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
//           <div className="bg-[#121620] border border-gray-800/80 p-1 rounded-xl inline-flex self-start">
//             <button
//               onClick={() => setActiveTab('today')}
//               className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
//                 activeTab === 'today'
//                   ? 'bg-[#1b212d] text-white shadow-md'
//                   : 'text-gray-400 hover:text-white'
//               }`}
//             >
//               Today&apos;s Plan
//             </button>
//             <button
//               onClick={() => setActiveTab('saved')}
//               className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
//                 activeTab === 'saved'
//                   ? 'bg-[#1b212d] text-white shadow-md'
//                   : 'text-gray-400 hover:text-white'
//               }`}
//             >
//               Saved
//             </button>
//           </div>

//           <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-semibold text-gray-400">
//             <span>Sort By</span>
//             <button className="bg-[#121620] border border-gray-800/80 hover:border-gray-700 text-white px-3 py-2 rounded-xl flex items-center gap-2 transition-colors">
//               <span>Duration</span>
//               <LuChevronDown className="text-sm text-gray-400" />
//             </button>
//           </div>
//         </div>

//         {/* Empty State Display */}
//         <div className="border border-dashed border-gray-800/80 rounded-2xl py-24 px-6 flex flex-col items-center justify-center text-center bg-[#121620]/30 min-h-95">
//           <h2 className="text-xl font-black tracking-wider uppercase text-white mb-2">
//             {activeTab === 'today' ? 'NO LIFTS FOR TODAY' : 'NOTHING SAVED YET'}
//           </h2>
//           <p className="text-gray-400 text-xs font-medium mb-6 max-w-sm">
//             {activeTab === 'today'
//               ? 'Add up to five lifts to your schedule to get today moving.'
//               : 'Browse the library and save lifts to build your workout bank.'}
//           </p>
//           <Link
//             href="/workouts"
//             className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs px-6 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_25px_rgba(204,255,0,0.4)]"
//           >
//             Go to workouts
//           </Link>
//         </div>

//       </div>
//     </main>
//   );
// };

// export default MySavedPage;

