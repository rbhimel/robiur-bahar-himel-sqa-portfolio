
import React from 'react';
import { ArrowLeft, Table as TableIcon, Bug, FileSpreadsheet, CheckCircle, AlertTriangle } from 'lucide-react';
import { ProjectData } from './TestReports';

interface AuditLogViewProps {
  project: ProjectData;
  onBack: () => void;
}

const AuditLogView: React.FC<AuditLogViewProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#030014] p-4 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto space-y-12 pb-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors group mb-8"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </button>

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-neutral-900 dark:text-white">{project.title}</h1>
            <span className="px-4 py-1 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 text-xs font-mono uppercase">
              {project.status}
            </span>
          </div>
          <p className="text-xl text-neutral-500 dark:text-white/40 max-w-3xl">{project.summary}</p>
          <div className="flex gap-2">
            {project.tags.map(t => (
              <span key={t} className="px-3 py-1 bg-neutral-200 dark:bg-white/5 border border-neutral-300 dark:border-white/10 rounded-full text-xs text-neutral-500 dark:text-white/40">#{t}</span>
            ))}
          </div>
        </header>

        {/* Test Case Spreadsheet */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <FileSpreadsheet className="text-green-600 dark:text-green-400" />
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Test Case Spreadsheet</h2>
          </div>
          <div className="glass-card border-neutral-200 dark:border-white/10 overflow-hidden shadow-sm dark:shadow-none bg-white dark:bg-transparent">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-sans">
                <thead className="bg-neutral-100 dark:bg-white/5 border-b border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-white/60 uppercase text-[10px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4 font-mono">ID</th>
                    <th className="px-6 py-4">Title / Description</th>
                    <th className="px-6 py-4">Priority</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Expected Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-white/5">
                  {project.testCases.map((tc, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 font-mono text-indigo-600 dark:text-indigo-400">{tc.id}</td>
                      <td className="px-6 py-4 font-medium text-neutral-900 dark:text-white/90">{tc.title}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] ${tc.priority === 'High' ? 'bg-red-500/10 text-red-600 dark:text-red-400' : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'}`}>
                          {tc.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {tc.status === 'Pass' ? <CheckCircle size={14} className="text-green-600 dark:text-green-500" /> : <AlertTriangle size={14} className="text-red-600 dark:text-red-500" />}
                          <span className={tc.status === 'Pass' ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}>{tc.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-neutral-400 dark:text-white/40 text-xs italic">{tc.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bug Report Registry */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Bug className="text-red-600 dark:text-red-400" />
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Bug Report Registry</h2>
          </div>
          <div className="glass-card border-neutral-200 dark:border-white/10 overflow-hidden shadow-sm dark:shadow-none bg-white dark:bg-transparent">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-sans">
                <thead className="bg-neutral-100 dark:bg-white/5 border-b border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-white/60 uppercase text-[10px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4 font-mono">Bug ID</th>
                    <th className="px-6 py-4">Defect Description</th>
                    <th className="px-6 py-4">Severity</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-white/5">
                  {project.bugReport.map((bug, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 font-mono text-red-600 dark:text-red-400">{bug.id}</td>
                      <td className="px-6 py-4 text-neutral-900 dark:text-white/90">{bug.desc}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          bug.severity === 'Critical' ? 'bg-red-600 text-white shadow-sm' : 
                          bug.severity === 'High' ? 'bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400' : 
                          'bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400'
                        }`}>
                          {bug.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-mono text-xs uppercase text-neutral-400 dark:text-white/40">{bug.status}</td>
                      <td className="px-6 py-4 text-neutral-300 dark:text-white/30 text-[10px] tracking-widest">{bug.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-20">
          <button 
            onClick={onBack}
            className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all"
          >
            Finalize Review & Close Log
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditLogView;
