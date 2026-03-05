
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Target, Bug, Layers, ClipboardCheck } from 'lucide-react';

const data = [
  { name: 'Manual', val: 95, color: '#6366f1' },
  { name: 'UI/UX', val: 85, color: '#a855f7' },
  { name: 'Regression', val: 80, color: '#ec4899' },
  { name: 'API', val: 60, color: '#06b6d4' },
];

const QAStats: React.FC = () => {
  return (
    <section id="stats" className="space-y-12 scroll-mt-24">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white">QA Diagnostic Engine</h2>
        <p className="text-neutral-500 dark:text-white/40 max-w-xl mx-auto">Real-time visualization of my core testing proficiency and technical focus areas.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: 'Bugs Identified', value: '150+', icon: <Bug />, color: 'text-red-500' },
          { label: 'Test Cases Designed', value: '450+', icon: <ClipboardCheck />, color: 'text-green-500' },
          { label: 'SDLC Cycles', value: '25+', icon: <Layers />, color: 'text-indigo-500' },
          { label: 'System Accuracy', value: '99.9%', icon: <Target />, color: 'text-purple-500' },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-8 border-neutral-200 dark:border-white/5 hover:border-indigo-500/20 dark:hover:border-white/20 transition-all group shadow-sm dark:shadow-none bg-white/50 dark:bg-black/20">
            <div className={`${stat.color} mb-4 group-hover:scale-110 transition-transform`}>{stat.icon}</div>
            <div className="text-3xl font-bold font-display mb-1 text-neutral-900 dark:text-white">{stat.value}</div>
            <div className="text-sm text-neutral-500 dark:text-white/40 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="glass-card p-10 h-[400px] border-neutral-200 dark:border-white/5 bg-white/40 dark:bg-black/20 shadow-sm dark:shadow-none">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="currentColor" className="text-neutral-400 dark:text-white/40" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: 'rgba(0,0,0,0.02)', className: 'dark:fill-white/5' }}
              contentStyle={{ background: 'var(--tw-bg-opacity)', backgroundColor: 'white', color: '#000', border: '1px solid #e5e7eb', borderRadius: '12px' }}
              itemStyle={{ color: '#000' }}
              wrapperClassName="dark:!bg-black dark:!border-white/20"
            />
            <Bar dataKey="val" radius={[10, 10, 0, 0]} barSize={60}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default QAStats;
