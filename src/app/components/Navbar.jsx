'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
 return (
    <header className="w-full bg-[#0a0d12] border-b border-gray-800/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
       
        <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-xl tracking-wider">
          <Image 
            src="/logo.png" 
            alt="FITLOG Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 object-contain"
          />
          <span>FITLOG</span>
        </Link>

        <nav className="flex items-center bg-[#161a22] p-1 rounded-full border border-gray-800">
          <Link 
            href="/workouts" 
            className="bg-[#ccff00] text-black font-semibold px-5 py-1.5 rounded-full text-sm transition"
          >
            Workouts
          </Link>
          <Link 
            href="/my-plan" 
            className="text-gray-400 hover:text-white font-medium px-5 py-1.5 rounded-full text-sm transition"
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-300 text-sm font-medium hover:text-white transition cursor-pointer"
          >
            <span>Plan</span>
            <span className="bg-[#ccff00] text-black font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
            </span>
          </button>

          <button
            className="flex items-center gap-2 text-gray-300 text-sm font-medium hover:text-white transition cursor-pointer"
          >
            <span>Saved</span>
            <span className="border border-gray-700 text-gray-300 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
              
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}