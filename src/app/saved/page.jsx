'use client';

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { LuChevronDown } from 'react-icons/lu';
import { WorkoutContext } from '@/context/WorkoutProvider';

const MySavedPage = () => {
  const { workouts } = useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState('saved');

  return (
    <main className="min-h-screen bg-[#0b0f17] text-white px-6 py-10 antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
     
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-1">
            MY Saved Workouts
          </h1>
          <p className="text-gray-400 text-sm font-medium">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="bg-[#121620] border border-gray-800/80 rounded-2xl p-6 md:p-8 grid grid-cols-3 gap-4 shadow-xl">
          <div>
            <span className="text-gray-400 text-xs font-semibold block mb-1">
              Exercises
            </span>
            <span className="text-4xl md:text-5xl font-black text-[#ccff00]">
              2
            </span>
          </div>

          <div>
            <span className="text-gray-400 text-xs font-semibold block mb-1">
              Minutes
            </span>
            <span className="text-4xl md:text-5xl font-black text-white">
              23
            </span>
          </div>

          <div>
            <span className="text-gray-400 text-xs font-semibold block mb-1">
              Calories
            </span>
            <span className="text-4xl md:text-5xl font-black text-white">
              190
            </span>
          </div>
        </div>

       
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="bg-[#121620] border border-gray-800/80 p-1 rounded-xl inline-flex self-start">
            <button
              onClick={() => setActiveTab('today')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'today'
                  ? 'bg-[#1b212d] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'saved'
                  ? 'bg-[#1b212d] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-semibold text-gray-400">
            <span>Sort By</span>
            <button className="bg-[#121620] border border-gray-800/80 hover:border-gray-700 text-white px-3 py-2 rounded-xl flex items-center gap-2 transition-colors">
              <span>Duration</span>
              <LuChevronDown className="text-sm text-gray-400" />
            </button>
          </div>
        </div>

        {/* Empty State Display */}
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

      </div>
    </main>
  );
};

export default MySavedPage;

