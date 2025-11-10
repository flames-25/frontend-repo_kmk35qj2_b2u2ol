import { Leaf, Bot, Globe, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30">
            <Leaf className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">AgroMind</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#solutions" className="hover:text-white">Solutions</a>
          <a href="#community" className="hover:text-white">Community</a>
          <a href="#about" className="hover:text-white">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-200 hover:border-white/20 hover:bg-white/5">
            <Globe className="h-4 w-4" /> EN
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-emerald-950 hover:bg-emerald-400">
            <Bot className="h-4 w-4" /> Try AI
          </button>
          <button className="ml-2 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-200 hover:border-white/20 hover:bg-white/5">
            <User className="h-4 w-4" /> Login
          </button>
        </div>
      </div>
    </header>
  );
}
