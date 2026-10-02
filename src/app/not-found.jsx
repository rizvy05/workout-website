import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-[#0b0f17] text-white flex flex-col items-center justify-center p-6 text-center antialiased overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 sm:w-125 h-87.5 sm:h-125 bg-lime-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-xl w-full flex flex-col items-center">
        <div className="mb-6 p-4 rounded-full bg-[#121824] border border-gray-800 shadow-xl">
          <svg className="w-8 h-8 text-[#ccff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 className="text-8xl sm:text-9xl font-black leading-none tracking-tighter mb-4 text-transparent bg-clip-text bg-linear-to-r from-lime-400 via-emerald-400 to-lime-500">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-widest text-white mb-3">
          Page Not Found
        </h2>

   <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-md leading-relaxed">
  The page you are looking for does not exist, has been removed, or is temporarily unavailable.
</p>

        <Link
          href="/"
          className="group inline-flex items-center gap-2 bg-[#ccff00] text-black font-bold uppercase tracking-wide text-xs sm:text-sm px-8 py-3.5 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-lime-900/20"
        >
          <span>Return Home</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}