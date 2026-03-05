
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, CheckCircle2, User, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            RB Himel | SQA Diagnostic Active
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight text-neutral-900 dark:text-white">
            Perfecting <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              Software Quality.
            </span>
          </h1>

          <p className="text-xl text-neutral-600 dark:text-white/50 max-w-lg leading-relaxed mx-auto lg:mx-0">
            I'm <span className="text-neutral-900 dark:text-white font-semibold">Robiur Bahar Himel</span>, a Junior SQA Engineer dedicated to identifying edge-case bugs and ensuring 100% defect-free deployments through rigorous manual validation.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-[13px] text-neutral-500 dark:text-white/60 font-medium">
            <div className="flex items-center gap-2 bg-neutral-100 dark:bg-white/5 px-4 py-2 rounded-xl border border-neutral-200 dark:border-white/10 hover:border-indigo-500/30 transition-colors">
              <Mail size={16} className="text-indigo-500 dark:text-indigo-400" /> robiurhimel@gmail.com
            </div>
            <div className="flex items-center gap-2 bg-neutral-100 dark:bg-white/5 px-4 py-2 rounded-xl border border-neutral-200 dark:border-white/10 hover:border-purple-500/30 transition-colors">
              <Phone size={16} className="text-purple-500 dark:text-purple-400" /> +8801404183386
            </div>
            <div className="flex items-center gap-2 bg-neutral-100 dark:bg-white/5 px-4 py-2 rounded-xl border border-neutral-200 dark:border-white/10 hover:border-pink-500/30 transition-colors">
              <MapPin size={16} className="text-pink-500 dark:text-pink-400" /> Jashore, BD
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/robiur-bahar-himel" target="_blank" rel="noopener noreferrer" className="p-4 glass-card hover:bg-neutral-100 dark:hover:bg-indigo-500/20 transition-all border-neutral-200 dark:border-white/10 group flex items-center justify-center">
                <Linkedin className="group-hover:scale-110 transition-transform text-neutral-700 dark:text-white" />
              </a>
              <a href="https://github.com/rbhimel" target="_blank" rel="noopener noreferrer" className="p-4 glass-card hover:bg-neutral-100 dark:hover:bg-indigo-500/20 transition-all border-neutral-200 dark:border-white/10 group flex items-center justify-center">
                <Github className="group-hover:scale-110 transition-transform text-neutral-700 dark:text-white" />
              </a>
            </div>
            <a
              href="/robiur-bahar-himel-sqa-portfolio/Robiur_Bahar_Himel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-bold text-lg text-white hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] dark:hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <CheckCircle2 /> Download SQA Audit (CV)
            </a>
          </div>
        </div>

        <div className="relative group max-w-md mx-auto lg:max-w-none">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[40px] blur-2xl opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="relative glass-card border-neutral-200 dark:border-white/10 overflow-hidden aspect-square rounded-[32px] bg-white dark:bg-[#05001a] shadow-2xl flex items-center justify-center">
            {!imageError ? (
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQH5PVLi9Ltojg/profile-displayphoto-scale_200_200/B4DZwkcTX3G4AY-/0/1770137928860?e=1774483200&v=beta&t=Yo3IuoAUhtnbIZBOEjMSPFajtWvA6XWkVZ-xfgTnikk"
                alt="Robiur Bahar Himel"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover grayscale brightness-100 dark:brightness-90 group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-12 space-y-6">
                <div className="w-32 h-32 bg-indigo-500/10 rounded-full flex items-center justify-center border-4 border-indigo-500 animate-pulse">
                  <ShieldCheck className="text-indigo-500 w-16 h-16" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white">Profile Secured</h3>
                  <p className="text-sm text-neutral-400 font-mono uppercase tracking-widest">Diagnostic Fallback Active</p>
                </div>
              </div>
            )}
            {/* HUD Overlay */}
            <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-[32px] overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-indigo-500/30 m-4 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 m-4 rounded-br-xl" />
              <div className="absolute top-4 right-4 text-[10px] font-mono text-indigo-500/40 uppercase tracking-[0.2em] animate-pulse">Scanning Bio...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
