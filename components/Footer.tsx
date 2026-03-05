
import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/robiur-bahar-himel', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contact" className="border-t border-neutral-200 dark:border-white/5 pt-20 pb-10 mt-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <div className="space-y-8">
            <h2 className="text-5xl font-display font-bold text-neutral-900 dark:text-white">Ready for a <br />System Audit?</h2>
            <p className="text-neutral-500 dark:text-white/40 max-w-md">I am currently available for Junior SQA roles or freelance manual testing projects. Let's ensure your code is bug-free.</p>
            <div className="flex gap-4">
              <a href="mailto:robiurhimel@gmail.com" className="w-12 h-12 glass-card flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-white/10 transition-all border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-white">
                <Mail />
              </a>
              <button onClick={openLinkedIn} className="w-12 h-12 glass-card flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-white/10 transition-all border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-white">
                <Linkedin />
              </button>
              <a href="https://github.com/rbhimel" target="_blank" rel="noreferrer" className="w-12 h-12 glass-card flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-white/10 transition-all border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-white">
                <Github />
              </a>
            </div>
          </div>

          <div className="glass-card p-10 space-y-6 border-neutral-200 dark:border-white/10 shadow-sm dark:shadow-none bg-white/50 dark:bg-transparent">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase text-neutral-400 dark:text-white/40 font-mono tracking-widest">Email Node</label>
                <div className="text-sm font-bold truncate text-neutral-900 dark:text-white">robiurhimel@gmail.com</div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase text-neutral-400 dark:text-white/40 font-mono tracking-widest">Phone Link</label>
                <div className="text-sm font-bold text-neutral-900 dark:text-white">+8801404183386</div>
              </div>
            </div>
            <button 
              onClick={openLinkedIn}
              className="w-full py-4 bg-neutral-900 text-white dark:bg-white dark:text-black font-bold rounded-2xl hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all flex items-center justify-center gap-2"
            >
              Initiate Direct Message <Linkedin size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-neutral-200 dark:border-white/5 gap-6">
          <div className="flex items-center gap-2">
            <span className="text-neutral-400 dark:text-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">
              © 2026 RB Himel • ALL LOGS SECURED
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
