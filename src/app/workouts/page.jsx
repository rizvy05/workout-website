import React from 'react';


const Workouts = async () => {
    const res = await fetch('http://localhost:3000/data.json'); 
const data = await res.json();
      console.log(data,'data');
    return (
        <div>
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
          {data.map((item) => (
            <div key={item.id} className="bg-[#12161f] border border-gray-800/80 rounded-2xl p-6 flex flex-col items-center gap-4 transition-transform duration-200 hover:scale-105">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </main>







    
 </div>







    );
};

export default Workouts;