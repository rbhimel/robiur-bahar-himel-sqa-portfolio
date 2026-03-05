
import React from 'react';
import { Layout, Search, Command, Terminal, Shield, CheckCircle2 } from 'lucide-react';

const BentoSkills: React.FC = () => {
  return (
    <section id="skills" className="space-y-16 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white">Toolkit & Inspector</h2>
          <p className="text-neutral-500 dark:text-white/40">The weapons I use to ensure high-quality software delivery.</p>
        </div>
        <div className="text-xs font-mono text-neutral-400 dark:text-white/20 bg-neutral-200/50 dark:bg-white/5 px-4 py-2 rounded-full border border-neutral-300 dark:border-white/10 uppercase tracking-widest">
          Scanning environment... Ready
        </div>
      </div>

      <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {/* Manual Testing */}
        <div className="md:col-span-2 md:row-span-1 glass-card p-8 bg-gradient-to-br from-indigo-500/5 to-transparent dark:from-indigo-500/10 border-neutral-200 dark:border-indigo-500/20 flex flex-col justify-between group hover:scale-[1.02] transition-all shadow-sm dark:shadow-none">
          <div className="flex justify-between items-start">
            <Shield className="text-indigo-600 dark:text-indigo-400 w-10 h-10" />
            <span className="text-indigo-600/20 dark:text-indigo-400/40 font-mono">01</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">Manual Testing Mastery</h3>
            <p className="text-sm text-neutral-500 dark:text-white/40">Functional, UI, and Regression testing with deep focus on edge-case discovery.</p>
          </div>
        </div>

        {/* Postman */}
        <div className="md:col-span-1 md:row-span-1 glass-card p-8 bg-gradient-to-br from-orange-500/5 to-transparent dark:from-orange-500/10 border-neutral-200 dark:border-orange-500/20 flex flex-col justify-between group hover:scale-[1.02] transition-all shadow-sm dark:shadow-none">
          <Terminal className="text-orange-600 dark:text-orange-400 w-10 h-10" />
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Postman</h3>
          <p className="text-xs text-neutral-500 dark:text-white/40">Basics of API Testing & Validation</p>
        </div>

        {/* Jira */}
        <div className="md:col-span-1 md:row-span-2 glass-card p-8 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-500/10 border-neutral-200 dark:border-blue-500/20 flex flex-col justify-between group hover:scale-[1.02] transition-all shadow-sm dark:shadow-none">
          <div className="space-y-6">
            <Command className="text-blue-600 dark:text-blue-400 w-10 h-10" />
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Jira & Trello</h3>
            <p className="text-sm text-neutral-500 dark:text-white/40 leading-relaxed">Expertly managing defect lifecycle, task tracking, and agile workflows.</p>
          </div>
          <div className="bg-blue-500/5 dark:bg-blue-500/10 p-4 rounded-xl text-xs font-mono text-blue-600 dark:text-blue-300">
             Agile Sprint Management Active
          </div>
        </div>

        {/* Google Sheets */}
        <div className="md:col-span-1 md:row-span-1 glass-card p-8 bg-gradient-to-br from-green-500/5 to-transparent dark:from-green-500/10 border-neutral-200 dark:border-green-500/20 flex flex-col justify-between group hover:scale-[1.02] transition-all shadow-sm dark:shadow-none">
          <Layout className="text-green-600 dark:text-green-400 w-10 h-10" />
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Test Documentation</h3>
          <p className="text-xs text-neutral-500 dark:text-white/40">Detailed Test Case Design in Sheets</p>
        </div>

        {/* SDLC/STLC */}
        <div className="md:col-span-2 md:row-span-1 glass-card p-8 bg-gradient-to-br from-purple-500/5 to-transparent dark:from-purple-500/10 border-neutral-200 dark:border-purple-500/20 flex items-center justify-between group hover:scale-[1.02] transition-all shadow-sm dark:shadow-none">
          <div className="max-w-[60%]">
            <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">SDLC & STLC</h3>
            <p className="text-sm text-neutral-500 dark:text-white/40">Solid understanding of software development life-cycles.</p>
          </div>
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-500/10 dark:border-purple-500/30 rounded-full animate-spin [animation-duration:10s]" />
            <Search className="absolute inset-0 m-auto text-purple-600 dark:text-purple-400" size={32} />
          </div>
        </div>
      </div>

      {/* Explicit Skills List Section */}
      <div className="glass-card p-10 bg-black/[0.02] dark:bg-white/[0.01] border-neutral-200 dark:border-white/5 shadow-sm dark:shadow-none">
        <h3 className="text-2xl font-bold mb-8 text-center text-neutral-800 dark:text-white/80">Core QA Competencies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {[
            "Functional Testing", "UI/UX Testing", "Regression Testing", "Smoke Testing",
            "Sanity Testing", "Positive/Negative Testing", "Edge Case Testing", "API Testing (Basic)",
            "Boundary Value Analysis", "Equivalence Partitioning", "Test Plan Design", "Defect Life Cycle"
          ].map((skill, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span className="text-sm text-neutral-600 dark:text-white/60 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoSkills;
