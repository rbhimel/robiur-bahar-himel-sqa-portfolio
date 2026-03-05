
import React, { useState } from 'react';
import { ArrowLeft, Bug, FileSpreadsheet, CheckCircle, AlertTriangle, Activity, ClipboardList } from 'lucide-react';
import { ProjectData } from './TestReports';

interface AuditLogViewProps {
  project: ProjectData;
  onBack: () => void;
}

const severityColor = (severity: string) => {
  switch (severity) {
    case 'Critical': return 'bg-red-600 text-white';
    case 'High': return 'bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30';
    case 'Medium': return 'bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30';
    default: return 'bg-neutral-200 text-neutral-600 dark:bg-white/10 dark:text-white/60 border border-neutral-300 dark:border-white/10';
  }
};

const priorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'bg-red-500/10 text-red-600 dark:text-red-400';
    case 'Medium': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
    default: return 'bg-neutral-100 text-neutral-500 dark:bg-white/5 dark:text-white/40';
  }
};

const AuditLogView: React.FC<AuditLogViewProps> = ({ project, onBack }) => {
  const [activeTab, setActiveTab] = useState<'bugs' | 'testcases'>('bugs');

  const passCount = project.testCases.filter(tc => tc.status === 'Pass').length;
  const failCount = project.testCases.filter(tc => tc.status === 'Fail').length;
  const openBugs = project.bugReport.filter(b => b.status === 'Open').length;
  const highBugs = project.bugReport.filter(b => b.severity === 'High' || b.severity === 'Critical').length;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#030014]">
      {/* Top Nav Bar */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b border-neutral-200 dark:border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">Back to Dashboard</span>
          </button>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400 dark:text-white/30 uppercase tracking-widest hidden md:block">{project.type}</span>
            <span className={`text-[10px] font-mono px-3 py-1 rounded-full ${project.status === 'PASSED' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30' : project.status === 'OPEN' ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/30' : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'}`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 pb-24">

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-neutral-500 dark:text-white/40 max-w-3xl leading-relaxed">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                #{t}
              </span>
            ))}
          </div>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Test Cases', value: project.testCases.length, icon: <ClipboardList size={18} />, color: 'text-indigo-500' },
            { label: 'Passed', value: passCount, icon: <CheckCircle size={18} />, color: 'text-green-500' },
            { label: 'Failed', value: failCount, icon: <AlertTriangle size={18} />, color: 'text-red-500' },
            { label: 'Open Bugs', value: openBugs, icon: <Bug size={18} />, color: 'text-orange-500' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-5 border-neutral-200 dark:border-white/5 bg-white/60 dark:bg-black/20 shadow-sm dark:shadow-none">
              <div className={`${stat.color} mb-2`}>{stat.icon}</div>
              <div className="text-3xl font-bold font-display text-neutral-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-neutral-400 dark:text-white/40 font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-neutral-200 dark:border-white/10">
          <button
            onClick={() => setActiveTab('bugs')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all border-b-2 -mb-[2px] ${activeTab === 'bugs' ? 'border-red-500 text-red-600 dark:text-red-400' : 'border-transparent text-neutral-400 dark:text-white/40 hover:text-neutral-700 dark:hover:text-white'}`}
          >
            <Bug size={16} />
            Bug Report
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-red-500/10 text-red-600 dark:text-red-400">
              {project.bugReport.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('testcases')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all border-b-2 -mb-[2px] ${activeTab === 'testcases' ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-neutral-400 dark:text-white/40 hover:text-neutral-700 dark:hover:text-white'}`}
          >
            <FileSpreadsheet size={16} />
            Test Cases
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              {project.testCases.length}
            </span>
          </button>
        </div>

        {/* Bug Report Tab */}
        {activeTab === 'bugs' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center gap-3 mb-2">
              <Bug className="text-red-500" size={20} />
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Bug Report Registry</h2>
              {highBugs > 0 && (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white">{highBugs} HIGH/CRITICAL</span>
              )}
            </div>
            <div className="glass-card border-neutral-200 dark:border-white/10 overflow-hidden bg-white dark:bg-transparent shadow-sm dark:shadow-none">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-neutral-100 dark:bg-white/5 border-b border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-white/50 text-[10px] uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-4 font-mono">Bug ID</th>
                      <th className="px-6 py-4">Defect Description</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4">Severity</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 dark:divide-white/5">
                    {project.bugReport.map((bug, idx) => (
                      <tr key={idx} className="hover:bg-red-500/[0.03] dark:hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4 font-mono text-red-500 dark:text-red-400 font-bold text-xs">{bug.id}</td>
                        <td className="px-6 py-4 text-neutral-800 dark:text-white/80 max-w-xs">{bug.desc}</td>
                        <td className="px-6 py-4 text-neutral-400 dark:text-white/30 text-xs tracking-widest uppercase">{bug.type}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${severityColor(bug.severity)}`}>
                            {bug.severity}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${bug.status === 'Open' ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400' : bug.status === 'Closed' ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'}`}>
                            {bug.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Test Cases Tab */}
        {activeTab === 'testcases' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Pass/Fail progress bar */}
            <div className="flex items-center gap-3 mb-2">
              <Activity className="text-indigo-500" size={20} />
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Test Case Results</h2>
            </div>
            <div className="flex items-center gap-3 glass-card p-4 border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-black/20">
              <span className="text-xs text-green-600 dark:text-green-400 font-bold">{passCount} Pass</span>
              <div className="flex-1 h-2 bg-neutral-100 dark:bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-700"
                  style={{ width: `${(passCount / project.testCases.length) * 100}%` }}
                />
              </div>
              <span className="text-xs text-red-500 dark:text-red-400 font-bold">{failCount} Fail</span>
              <span className="text-xs text-neutral-400 font-mono">{Math.round((passCount / project.testCases.length) * 100)}%</span>
            </div>

            <div className="glass-card border-neutral-200 dark:border-white/10 overflow-hidden bg-white dark:bg-transparent shadow-sm dark:shadow-none">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-neutral-100 dark:bg-white/5 border-b border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-white/50 text-[10px] uppercase tracking-widest">
                    <tr>
                      <th className="px-4 py-4 font-mono">ID</th>
                      <th className="px-4 py-4">Test Scenario</th>
                      <th className="px-4 py-4">Test Data</th>
                      <th className="px-4 py-4">Priority</th>
                      <th className="px-4 py-4">Result</th>
                      <th className="px-4 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 dark:divide-white/5">
                    {project.testCases.map((tc, idx) => (
                      <tr key={idx} className={`transition-colors ${tc.status === 'Pass' ? 'hover:bg-green-500/[0.03] dark:hover:bg-green-500/[0.03]' : 'hover:bg-red-500/[0.03] dark:hover:bg-red-500/[0.03]'}`}>
                        <td className="px-4 py-4 font-mono text-indigo-600 dark:text-indigo-400 font-bold text-xs">{tc.id}</td>
                        <td className="px-4 py-4 font-medium text-neutral-900 dark:text-white/90">{tc.title}</td>
                        <td className="px-4 py-4 text-neutral-400 dark:text-white/40 text-xs font-mono max-w-[180px] truncate" title={tc.testData}>{tc.testData || '—'}</td>
                        <td className="px-4 py-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${priorityColor(tc.priority)}`}>
                            {tc.priority}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-neutral-400 dark:text-white/40 text-xs italic max-w-[200px]">{tc.result}</td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1.5">
                            {tc.status === 'Pass'
                              ? <CheckCircle size={14} className="text-green-500 shrink-0" />
                              : <AlertTriangle size={14} className="text-red-500 shrink-0" />
                            }
                            <span className={`text-xs font-bold ${tc.status === 'Pass' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                              {tc.status}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="flex justify-center pt-12">
          <button
            onClick={onBack}
            className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Finalize Review & Close Log
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditLogView;
