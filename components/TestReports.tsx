
import React from 'react';
import { FileText, ExternalLink, Bug } from 'lucide-react';

export interface ProjectData {
  title: string;
  type: string;
  date: string;
  status: string;
  summary: string;
  bugReport: { id: string; type: string; severity: string; status: string; desc: string }[];
  testCases: { id: string; title: string; priority: string; status: string; result: string }[];
  tags: string[];
}

const projects: ProjectData[] = [
  {
    title: "E-Commerce System Audit",
    type: "Full Lifecycle Testing",
    date: "2026",
    status: "PASSED",
    summary: "Comprehensive manual testing of a real-world e-commerce platform including login, checkout, and search workflows.",
    bugReport: [
      { id: "BUG-101", type: "UI", severity: "Low", status: "Closed", desc: "Alignment issues on mobile checkout" },
      { id: "BUG-102", type: "Functional", severity: "High", status: "Open", desc: "Payment gateway timeout on slow networks" },
      { id: "BUG-103", type: "Validation", severity: "Medium", status: "Reopened", desc: "Negative value allowed in cart quantity" },
    ],
    testCases: [
      { id: "TC-01", title: "Valid Login Check", priority: "High", status: "Pass", result: "User redirected to dashboard" },
      { id: "TC-02", title: "Search Empty State", priority: "Medium", status: "Pass", result: "Correct empty message shown" },
      { id: "TC-03", title: "Add 100+ items", priority: "Low", status: "Fail", result: "App crashes on bulk add" }
    ],
    tags: ["Regression", "Functional", "Cross-Browser"]
  },
  {
    title: "User Registration System",
    type: "Validation Testing",
    date: "2026",
    status: "OPTIMIZED",
    summary: "End-to-end testing of complex registration flows with focus on data validation and edge-case security.",
    bugReport: [
      { id: "VAL-201", type: "Edge Case", severity: "Critical", status: "Open", desc: "Duplicate email bypass via casing" },
      { id: "VAL-202", type: "UI", severity: "Low", status: "Closed", desc: "Missing error icons on RTL screens" },
    ],
    testCases: [
      { id: "TC-10", title: "Email Format Validation", priority: "High", status: "Pass", result: "Rejects invalid regex" },
      { id: "TC-11", title: "Password Strength UI", priority: "Medium", status: "Pass", result: "Meter updates dynamically" }
    ],
    tags: ["Negative Testing", "UI/UX", "Compatibility"]
  },
  {
    title: "Social Media Auth Suite",
    type: "Auth Design",
    date: "2026",
    status: "READY",
    summary: "Detailed test design for social OAuth and manual login security protocols.",
    bugReport: [
      { id: "AUTH-301", type: "Security", severity: "High", status: "Open", desc: "Token persistency after logout" }
    ],
    testCases: [
      { id: "TC-20", title: "Google OAuth Flow", priority: "High", status: "Pass", result: "Tokens stored securely" },
      { id: "TC-21", title: "Forgot Password Link", priority: "High", status: "Pass", result: "Email sent within 10s" }
    ],
    tags: ["Auth", "Security", "Design"]
  },
  {
    title: "Bug Report of otoba.com",
    type: "Registration Page Audit",
    date: "2026",
    status: "OPEN",
    summary: "Detailed manual testing of the otoba.com user registration page, uncovering UI clarity issues, validation gaps, and UX inconsistencies across all major browsers and devices.",
    bugReport: [
      { id: "BUG-001", type: "UI", severity: "Medium", status: "Open", desc: "Date of birth selector UI is unclear — ☐ symbols not clearly interactive" },
      { id: "BUG-002", type: "UI", severity: "Medium", status: "Open", desc: "Newsletter checkbox placement confusing — 'Newsletter Password*' appears as one label" },
      { id: "BUG-003", type: "UX", severity: "Medium", status: "Open", desc: "Gender field lacks inclusive options — only Male and Female available" },
      { id: "BUG-004", type: "Validation", severity: "Medium", status: "Open", desc: "Phone validation missing format/length checks — accepts any non-empty input" },
      { id: "BUG-005", type: "UI", severity: "Low", status: "Open", desc: "Inconsistent capitalization in password labels and error messages" },
      { id: "BUG-006", type: "UI", severity: "Low", status: "Open", desc: "Date of birth field missing required '*' indicator unlike other required fields" },
      { id: "BUG-007", type: "Validation", severity: "Medium", status: "Open", desc: "Incorrect error message — First Name shows generic 'Name is required.' instead of 'First name is required.'" },
      { id: "BUG-008", type: "Validation", severity: "Low", status: "Open", desc: "Ambiguous error message — 'Phone is required.' should say 'Phone number is required.'" },
      { id: "BUG-009", type: "UI", severity: "Medium", status: "Open", desc: "Show password button disappears when validation errors appear on password fields" },
    ],
    testCases: [
      { id: "TC-01", title: "Date of Birth dropdown UI check", priority: "Medium", status: "Fail", result: "☐ symbols not clearly interactive — no dropdown arrows or 'Select...' text" },
      { id: "TC-02", title: "Newsletter checkbox label clarity", priority: "High", status: "Fail", result: "'Newsletter Password*' appears as a single confusing label" },
      { id: "TC-03", title: "Phone format validation", priority: "Medium", status: "Fail", result: "Accepts letters and short numbers — no format/length validation" },
      { id: "TC-04", title: "Show/Hide password icon in error state", priority: "High", status: "Fail", result: "Show/hide icon disappears when validation error is triggered" },
      { id: "TC-05", title: "First Name error message", priority: "Medium", status: "Fail", result: "Shows 'Name is required.' instead of 'First name is required.'" },
    ],
    tags: ["UI Testing", "Validation", "Registration", "Cross-Browser"]
  }
];

interface TestReportsProps {
  onOpenAudit: (project: ProjectData) => void;
}

const TestReports: React.FC<TestReportsProps> = ({ onOpenAudit }) => {
  return (
    <section id="projects" className="space-y-12 scroll-mt-24">
      <div className="space-y-4">
        <h2 className="text-4xl font-display font-bold text-center md:text-left text-neutral-900 dark:text-white">QA Audit Reports</h2>
        <p className="text-neutral-500 dark:text-white/40 text-center md:text-left">Detailed documentation of testing projects and identified defects.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-card border-neutral-200 dark:border-white/10 overflow-hidden flex flex-col group shadow-sm dark:shadow-none">
            <div className="p-8 border-b border-neutral-200 dark:border-white/10 bg-neutral-100/50 dark:bg-white/5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{project.title}</h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${project.status === 'PASSED' ? 'bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400' : 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400'}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 dark:text-white/40 uppercase tracking-widest">{project.type} • {project.date}</p>
              </div>
              <FileText className="text-neutral-300 dark:text-white/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
            </div>

            <div className="p-8 space-y-6 flex-1 bg-white/30 dark:bg-transparent">
              <p className="text-sm text-neutral-600 dark:text-white/60 leading-relaxed italic border-l-2 border-indigo-500/50 pl-4">
                "{project.summary}"
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono text-neutral-400 dark:text-white/30 uppercase">Identified Bugs</h4>
                {project.bugReport.slice(0, 2).map((v, i) => (
                  <div key={i} className="flex items-center justify-between bg-neutral-100 dark:bg-black/40 border border-neutral-200 dark:border-white/5 p-3 rounded-lg text-xs">
                    <div className="flex items-center gap-3">
                      <Bug size={14} className={v.severity === 'Critical' || v.severity === 'High' ? 'text-red-500' : 'text-orange-500'} />
                      <span className="font-mono text-neutral-400 dark:text-white/40">{v.id}</span>
                      <span className="text-neutral-700 dark:text-white/80">{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenAudit(project)}
              className="p-6 bg-indigo-600/5 dark:bg-indigo-600/10 hover:bg-indigo-600/10 dark:hover:bg-indigo-600/20 transition-colors flex items-center justify-center gap-2 cursor-pointer w-full group/btn"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Open Full Audit Log</span>
              <ExternalLink size={14} className="text-indigo-600 dark:text-indigo-400 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestReports;
