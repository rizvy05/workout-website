    import React from 'react';
    import Image from 'next/image';
    import GetData from '@/lib/GetData';
    import { LuCalendarPlus, LuBookmark } from 'react-icons/lu';

    const CardDetails = async ({ params }) => {
    const { id } = await params;
    const allDetails = await GetData();

    const cardDetails = allDetails.find((card) => String(card.id) === String(id));

    if (!cardDetails) {
    return (
    <main className="min-h-screen bg-[#0b0f17] text-white flex items-center justify-center p-6">
    <p className="text-gray-400">Workout not found.</p>
    </main>
    );
    }

    return (
    <main className="min-h-screen bg-[#0b0f17] text-white px-6 py-12 antialiased">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-gray-800/80">
    <Image
    src={cardDetails.image}
    alt={cardDetails.name || cardDetails.title || 'Workout detail'}
    fill
    className="object-cover"
    priority
    sizes="(max-width: 1024px) 100vw, 50vw"
    />
    </div>

    <div className="flex flex-col justify-between h-full">
    <div>
  
    <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-3">
        {cardDetails.name || cardDetails.title}
    </h1>

  
    <p className="text-gray-400 text-sm leading-relaxed mb-5">
        {cardDetails.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-8">
        {cardDetails.muscleGroups?.map((group, idx) => (
        <span
            key={idx}
            className="bg-[#ccff00] text-black font-extrabold text-[11px] tracking-wider uppercase px-3.5 py-1 rounded-full"
        >
            {group}
        </span>
        ))}
    </div>

    <div className="bg-[#12161f] border border-gray-800/80 rounded-2xl p-6 space-y-4 mb-8 shadow-xl">
        <div className="flex justify-between items-center text-xs font-semibold">
        <span className="text-gray-500 uppercase tracking-wider">Equipment</span>
        <span className="text-gray-200">{cardDetails.equipment || '—'}</span>
        </div>

        <div className="flex justify-between items-center text-xs font-semibold">
        <span className="text-gray-500 uppercase tracking-wider">Difficulty</span>
        <span className="text-gray-200">{cardDetails.difficulty || 'Intermediate'}</span>
        </div>

        <div className="flex justify-between items-center text-xs font-semibold">
        <span className="text-gray-500 uppercase tracking-wider">Sets</span>
        <span className="text-gray-200">{cardDetails.sets || '4'}</span>
        </div>

        <div className="flex justify-between items-center text-xs font-semibold">
        <span className="text-gray-500 uppercase tracking-wider">Reps</span>
        <span className="text-gray-200">{cardDetails.reps || '6-8'}</span>
        </div>

        <div className="flex justify-between items-center text-xs font-semibold">
        <span className="text-gray-500 uppercase tracking-wider">Duration</span>
        <span className="text-gray-200">{cardDetails.duration ? `${cardDetails.duration} min` : '—'}</span>
        </div>

        <div className="flex justify-between items-center text-xs font-semibold">
        <span className="text-gray-500 uppercase tracking-wider">Calories</span>
        <span className="text-gray-200">
            {cardDetails.caloriesBurned || cardDetails.calories ? `${cardDetails.caloriesBurned || cardDetails.calories} kcal` : '—'}
        </span>
        </div>

        <div className="flex justify-between items-center text-xs font-semibold">
        <span className="text-gray-500 uppercase tracking-wider">Rating</span>
        <span className="text-gray-200">{cardDetails.rating || '—'}</span>
        </div>
    </div>

    {cardDetails.instructions && cardDetails.instructions.length > 0 && (
        <div className="mb-8">
        <h3 className="text-xs font-extrabold text-white uppercase tracking-widest mb-4">
            Instructions
        </h3>
        <ol className="space-y-3 text-xs text-gray-400 font-medium leading-relaxed">
            {cardDetails.instructions.map((step, idx) => (
            <li key={idx} className="flex gap-2">
                <span className="text-gray-500">{idx + 1}.</span>
                <span>{step}</span>
            </li>
            ))}
        </ol>
        </div>
    )}
    </div>

   
    <div className="flex items-center gap-4 pt-2">
    <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-colors cursor-pointer">
        <LuCalendarPlus className="text-base" />
        <span>Add to todays plan</span>
    </button>

    <button className="border border-gray-800 hover:bg-gray-900 text-gray-300 font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-colors cursor-pointer">
        <LuBookmark className="text-base text-gray-400" />
        <span>Save for later</span>
    </button>
    </div>
    </div>

    </div>
    </main>
    );
    };

    export default CardDetails;








