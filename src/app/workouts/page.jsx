import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GetData from '@/lib/GetData';
import { RiBlazeFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

export default async function Workouts() {
const data = await GetData();
return (
<main className="min-h-screen bg-[#0b0f17] text-white px-6 py-10 antialiased">
<div className="max-w-7xl mx-auto">
  <div className="mb-8">
    <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-1">
      THE LIBRARY
    </h1>
    <p className="text-gray-400 text-sm font-medium">
      Twelve lifts covering every major muscle group.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {data?.map((item) => (
      <Link key={item.id} href={`/workouts/${item.id}`} className="block">
        <div className="bg-[#12161f] border border-gray-800/80 rounded-2xl overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:scale-[1.02] cursor-pointer shadow-xl h-full">
          
          <div className="relative w-full h-52 bg-gray-900 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name || item.title || "Workout"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

<div className="p-5 flex flex-col justify-between flex-1">
  <div>
    <div className="flex flex-wrap gap-2 mb-3">
      {item.muscleGroups?.map((group, idx) => (
        <span
          key={idx}
          className="bg-[#ccff00] text-black font-extrabold text-[11px] tracking-wider uppercase px-3 py-1 rounded-full"
        >
          {group}
        </span>
      ))}
    </div>

    <h2 className="text-white font-extrabold text-lg uppercase tracking-wider">
      {item.name || item.title}
    </h2>

    <p className="text-gray-400 text-xs mt-1 font-medium">
      {item.equipment}
    </p>
  </div>

  <div className="flex items-center gap-5 text-gray-400 text-xs font-semibold mt-6 pt-4 border-t border-gray-800/80">
    <div className="flex items-center gap-1.5">
      <MdAccessTimeFilled className="text-[#ccff00] text-lg hover:scale-125 transition-transform" />
      <span>{item.duration} min</span>
    </div>

    <div className="flex items-center gap-1.5">
      <RiBlazeFill className="text-[#ccff00] text-lg hover:scale-125 transition-transform" />
      <span>{item.caloriesBurned || item.calories} kcal</span>
    </div>

    <div className="flex items-center gap-1.5">
      <FaRegStar className="text-[#ccff00] text-lg hover:scale-125 transition-transform" />
      <span>{item.rating}</span>
    </div>
  </div>
</div>

      </div>
    </Link>
  ))}
</div>
</div>
</main>
);
}
