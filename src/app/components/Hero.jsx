import Image from 'next/image';

export default function Hero() {
  return (
    <section className="max-w-7.5xl mx-auto px-6 pt-8 pb-12">
      <div className="bg-[#12161f] border border-gray-800/80 rounded-2xl p-8 md:p-14 relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        <div className="md:col-span-7 z-10 flex flex-col items-start gap-4">
          <span className="text-[#ccff00] font-bold text-xs tracking-widest uppercase">
            WORKOUT LIBRARY
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight uppercase">
            Train with intent. <br />
            Log every set.
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-lg mt-2">
           FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
into today's plan, and watch the week's work add up.</p>
<a 
            href="#library" 
            className="mt-4 bg-[#ccff00] text-black font-bold px-6 py-3.5 rounded-lg text-sm tracking-wide uppercase hover:bg-[#b8e600] transition"
          >
            Browse Workouts
          </a>
        </div>

        <div className="md:col-span-5 relative flex justify-center items-center h-full min-h-[300]">
          <Image
            src="/banner.png" 
            alt="Gym Machine Illustration"
            width={400}
            height={400}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}