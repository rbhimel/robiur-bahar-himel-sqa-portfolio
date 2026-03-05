
import React from 'react';
import { ShieldCheck, Bug, Terminal, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-card border-black/5 dark:border-white/5 bg-white/70 dark:bg-black/40 backdrop-blur-xl px-8 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-white/60">
            RB Himel
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollTo('stats')} className="text-neutral-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center gap-2 outline-none">
            <Terminal size={16} /> Dashboard
          </button>
          <button onClick={() => scrollTo('skills')} className="text-neutral-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center gap-2 outline-none">
            <Bug size={16} /> Debugger
          </button>
          <button onClick={() => scrollTo('projects')} className="text-neutral-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center gap-2 outline-none">
            <ShieldCheck size={16} /> Audit Reports
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={onToggleTheme}
              className="p-2 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 transition-all text-neutral-600 dark:text-white/80"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-5 py-2 bg-neutral-900 text-white dark:bg-white dark:text-black rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all duration-300 font-bold"
            >
              Deploy Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
