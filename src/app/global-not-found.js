
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
        
        {/* Decorative Radial Lighting & Grid Overlay */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-size:4rem_4rem" />
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        </div>

        {/* Main Content Container */}
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:py-32 lg:px-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </span>
            Error 404
          </div>

          {/* Gradient 404 Headline */}
          <div className="relative my-6 select-none">
            <h1 className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-slate-100 via-slate-300 to-slate-600 sm:text-9xl">
              404
            </h1>
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-indigo-500 to-purple-500 opacity-20 blur-2xl" />
          </div>

          {/* Heading & Subtext */}
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Lost in cyberspace?
          </h2>
          <p className="mt-4 max-w-md text-base text-slate-400 sm:text-lg">
            Sorry, we couldn’t find the page you’re looking for. It might have been removed, renamed, or doesn’t exist.
          </p>

        
        </main>

        {/* Footer */}
        <footer className="py-6 text-center text-xs text-slate-600">
          Need help? <Link href="/contact" className="text-slate-400 underline hover:text-indigo-400">Contact Support</Link>
        </footer>

      </body>
    </html>
  )
}