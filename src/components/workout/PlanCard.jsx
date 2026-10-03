'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PlanCard = ({ workout }) => {
  return (
    <div className="bg-[#121620] border border-gray-800/80 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-gray-700 transition-all">
      <div className="relative w-full h-48 bg-gray-900">
        {workout.image && (
          <Image
            src={workout.image}
            alt={workout.name || workout.title || 'Workout'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-black uppercase text-white tracking-tight mb-2">
            {workout.name || workout.title}
          </h3>
          <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
            {workout.description}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs font-semibold text-gray-400 pt-2 border-t border-gray-800/60">
          <span>{workout.duration ? `${workout.duration} min` : '—'}</span>
          <span>
            {workout.caloriesBurned || workout.calories
              ? `${workout.caloriesBurned || workout.calories} kcal`
              : '—'}
          </span>
          <span className="capitalize">{workout.difficulty || 'Intermediate'}</span>
        </div>

        <Link
          href={`/workouts/${workout.id}`}
          className="block text-center bg-[#1b212d] hover:bg-gray-800 text-white font-extrabold text-xs py-2.5 rounded-xl transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlanCard;