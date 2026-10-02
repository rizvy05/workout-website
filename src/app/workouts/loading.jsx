export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b0f17] text-white px-6 py-10 antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-8 w-48 bg-gray-800 rounded mb-2"></div>
          <div className="h-4 w-72 bg-gray-800/60 rounded"></div>
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-[#12161f] border border-gray-800/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="w-full h-52 bg-gray-800"></div>

              {/* Card Body Skeleton */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  {/* Badge Skeleton */}
                  <div className="flex gap-2 mb-3">
                    <div className="h-5 w-16 bg-gray-800 rounded-full"></div>
                    <div className="h-5 w-12 bg-gray-800 rounded-full"></div>
                  </div>

                  {/* Title Skeleton */}
                  <div className="h-6 w-3/4 bg-gray-800 rounded mb-2"></div>

                  {/* Subtitle Skeleton */}
                  <div className="h-4 w-1/2 bg-gray-800/60 rounded"></div>
                </div>

                {/* Footer Stats Skeleton */}
                <div className="flex items-center gap-5 pt-4 mt-6 border-t border-gray-800/80">
                  <div className="h-4 w-14 bg-gray-800 rounded"></div>
                  <div className="h-4 w-16 bg-gray-800 rounded"></div>
                  <div className="h-4 w-10 bg-gray-800 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}