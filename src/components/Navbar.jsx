'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { WorkoutContext } from '@/context/WorkoutProvider';

export default function Navbar() {
const pathname = usePathname();
const { myPlanWorkouts = [], savedWorkouts = [] } = useContext(WorkoutContext);

const planCount = myPlanWorkouts.length;
const savedCount = savedWorkouts.length;

return (
<header className="w-full bg-[#0a0d12] border-b border-gray-800/50 px-6 py-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    
    {/* Logo */}
    <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-xl tracking-wider">
      <Image 
        src="/logo.png" 
        alt="Fit log Logo" 
        width={32} 
        height={32} 
        className="w-8 h-8 object-contain"
      />
      <span>FITLOG</span>
    </Link>

    <nav className="flex items-center bg-[#161a22] p-1 rounded-full border border-gray-800">
      <Link 
        href="/workouts" 
        className={`px-5 py-1.5 rounded-full text-sm font-semibold transition ${
          pathname === '/workouts'
            ? 'bg-[#ccff00] text-black'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Workouts
      </Link>

      <Link 
        href="/my-plan" 
        className={`px-5 py-1.5 rounded-full text-sm font-semibold transition ${
          pathname === '/my-plan'
            ? 'bg-[#ccff00] text-black'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        My Plan
      </Link>
    </nav>

            <div className="flex items-center gap-6">
            <Link 
              href="/my-plan"
              className={`flex items-center gap-2 text-sm font-medium transition cursor-pointer ${
                pathname === '/my-plan' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>Plan</span>
              <span className="bg-[#ccff00] text-black font-bold text-xs min-w-7 h-7 px-2 rounded-full flex items-center justify-center">
                {planCount}
              </span>
            </Link>

              <Link
                href="/saved"
                className={`flex items-center gap-2 text-sm font-medium transition cursor-pointer ${
                  pathname === '/saved' ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>Saved</span>
                <span className="border border-gray-700 text-gray-300 font-bold text-xs min-w-7 h-7 px-2 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              </Link>
            </div>

  </div>
</header>
);
}
