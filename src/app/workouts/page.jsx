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
         
        </div>
      </div>
    </main>
 </div>








    );
};

export default Workouts;