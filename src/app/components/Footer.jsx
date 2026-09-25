import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0d12] border-t border-gray-800/60 py-6 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-xl tracking-wider">
          <Image 
            src="/logo.png" 
            alt="Fit log Logo" 
            width={28} 
            height={28} 
            className="w-7 h-7 object-contain"
          />
          FITLOG
        </Link>

        
        <p className="text-gray-400 text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}