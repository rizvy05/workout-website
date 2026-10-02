export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f17] flex flex-col items-center justify-center p-6 text-white antialiased">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-gray-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-[#ccff00] border-t-transparent animate-spin"></div>
        </div>

        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold animate-pulse mt-2">
          Loading...
        </p>
      </div>
    </div>
  );
}