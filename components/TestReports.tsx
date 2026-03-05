
import React from 'react';
import { FileText, ExternalLink, Bug } from 'lucide-react';

export interface TestCase {
  id: string;
  title: string;
  steps?: string;
  testData?: string;
  priority: string;
  status: string;
  result: string;
}

export interface BugItem {
  id: string;
  type: string;
  severity: string;
  status: string;
  desc: string;
}

export interface ProjectData {
  title: string;
  type: string;
  date: string;
  status: string;
  summary: string;
  bugReport: BugItem[];
  testCases: TestCase[];
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
      { id: "TC_01", title: "Phone Empty Test", steps: "1. Leave Phone field empty\n2. Fill all other fields\n3. Click REGISTER", testData: "Phone: [EMPTY]", priority: "High", status: "Pass", result: 'Error message: "Phone is required"' },
      { id: "TC_02", title: "First Name Empty", steps: "1. Leave First Name field empty\n2. Fill all other fields\n3. Click REGISTER", testData: "First Name: [EMPTY]", priority: "High", status: "Pass", result: 'Error message: "First Name is required"' },
      { id: "TC_03", title: "Last Name Empty", steps: "1. Leave Last Name field empty\n2. Fill all other fields\n3. Click REGISTER", testData: "Last Name: [EMPTY]", priority: "High", status: "Pass", result: 'Error message: "Last Name is required"' },
      { id: "TC_04", title: "Password Empty", steps: "1. Leave Password field empty\n2. Fill all other fields\n3. Click REGISTER", testData: "Password: [EMPTY]", priority: "High", status: "Pass", result: 'Error message: "Password is required"' },
      { id: "TC_05", title: "Confirm Password Empty", steps: "1. Leave Confirm Password field empty\n2. Fill all other fields\n3. Click REGISTER", testData: "Confirm Password: [EMPTY]", priority: "High", status: "Pass", result: 'Error message: "Please confirm password"' },
      { id: "TC_06", title: "Email Optional Test", steps: "1. Leave Email field empty\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "Email: [EMPTY]", priority: "Medium", status: "Pass", result: "Registration successful" },
      { id: "TC_07", title: "Gender Not Selected", steps: "1. Don't select any gender\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "Gender: [NOT SELECTED]", priority: "Medium", status: "Pass", result: "Registration successful" },
      { id: "TC_08", title: "Date of Birth Empty", steps: "1. Don't select any date\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "Date of Birth: [EMPTY]", priority: "High", status: "Pass", result: 'Error message: "Date of birth is required"' },
      { id: "TC_09", title: "Newsletter Unchecked", steps: "1. Leave Newsletter unchecked\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "Newsletter: [UNCHECKED]", priority: "Low", status: "Pass", result: "Registration successful (no subscription)" },
      { id: "TC_10", title: "Newsletter Checked", steps: "1. Check Newsletter box\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "Newsletter: [CHECKED]", priority: "Low", status: "Pass", result: "Registration successful + subscribed" },
      { id: "TC_11", title: "Invalid Phone Format", steps: "1. Enter \"abc123\" in Phone field\n2. Fill all other fields\n3. Click REGISTER", testData: "Phone: abc123", priority: "High", status: "Fail", result: 'Expected: "Invalid phone number" — Actual: No format validation' },
      { id: "TC_12", title: "Short Phone Number", steps: "1. Enter \"12345\" in Phone field\n2. Fill all other fields\n3. Click REGISTER", testData: "Phone: 12345", priority: "High", status: "Fail", result: 'Expected: "Phone number too short" — Actual: No length validation' },
      { id: "TC_13", title: "Long Phone Number", steps: "1. Enter 16-digit number in Phone field\n2. Fill all other fields\n3. Click REGISTER", testData: "Phone: 1234567890123456", priority: "Medium", status: "Fail", result: 'Expected: "Phone number too long" — Actual: Accepted without error' },
      { id: "TC_14", title: "Invalid Email Format", steps: "1. Enter \"user.com\" in Email field\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "Email: user.com", priority: "High", status: "Fail", result: 'Expected: "Invalid email format" — Actual: No email validation' },
      { id: "TC_15", title: "Valid Email Format", steps: "1. Enter \"user@domain.com\" in Email\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "Email: user@domain.com", priority: "Medium", status: "Pass", result: "Registration successful" },
      { id: "TC_16", title: "Password Mismatch", steps: "1. Enter \"Test123\" in Password\n2. Enter \"Test124\" in Confirm Password\n3. Fill all other fields\n4. Click REGISTER", testData: "Password: Test123, Confirm: Test124", priority: "High", status: "Pass", result: 'Error: "Passwords do not match"' },
      { id: "TC_17", title: "Weak Password", steps: "1. Enter \"abc\" in Password\n2. Enter \"abc\" in Confirm Password\n3. Fill all other fields\n4. Click REGISTER", testData: "Password: abc", priority: "High", status: "Fail", result: 'Expected: "Password too weak" — Actual: No strength validation' },
      { id: "TC_18", title: "Strong Password", steps: "1. Enter \"Test@1234\" in Password\n2. Enter \"Test@1234\" in Confirm\n3. Fill all fields\n4. Click REGISTER", testData: "Password: Test@1234", priority: "Medium", status: "Pass", result: "Registration successful" },
      { id: "TC_19", title: "Duplicate Phone", steps: "1. Enter already registered phone\n2. Fill all other fields\n3. Click REGISTER", testData: "Phone: [REGISTERED NUMBER]", priority: "High", status: "Fail", result: 'Expected: "Phone already registered" — Actual: Not validated' },
      { id: "TC_20", title: "Duplicate Email", steps: "1. Enter already registered email\n2. Fill all other fields\n3. Click REGISTER", testData: "Email: [REGISTERED EMAIL]", priority: "High", status: "Fail", result: 'Expected: "Email already registered" — Actual: Not validated' },
      { id: "TC_21", title: "Male Gender Selected", steps: "1. Select Male gender\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "Gender: Male", priority: "Medium", status: "Pass", result: "Registration successful" },
      { id: "TC_22", title: "Female Gender Selected", steps: "1. Select Female gender\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "Gender: Female", priority: "Medium", status: "Pass", result: "Registration successful" },
      { id: "TC_23", title: "Valid Date of Birth", steps: "1. Select Day=15, Month=June, Year=1990\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "DOB: 15/06/1990", priority: "Medium", status: "Pass", result: "Registration successful" },
      { id: "TC_24", title: "Future Date of Birth", steps: "1. Select future date (2025)\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "DOB: 01/01/2025", priority: "High", status: "Pass", result: 'Error: "Invalid date of birth"' },
      { id: "TC_25", title: "Under 18 Years", steps: "1. Select date making age under 13\n2. Fill all mandatory fields\n3. Click REGISTER", testData: "DOB: 01/01/2015", priority: "High", status: "Pass", result: 'Error: "You have to be 13"' },
      { id: "TC_26", title: "Special Characters in Name", steps: "1. Enter \"John@123\" in First Name\n2. Fill all other fields\n3. Click REGISTER", testData: "First Name: John@123", priority: "Medium", status: "Fail", result: "No validation — special characters accepted" },
      { id: "TC_27", title: "Long First Name", steps: "1. Enter 50+ characters in First Name\n2. Fill all other fields\n3. Click REGISTER", testData: "First Name: [50+ CHARACTERS]", priority: "Low", status: "Fail", result: "No length limit enforced" },
      { id: "TC_28", title: "Show Password Toggle", steps: "1. Enter password\n2. Click show password icon\n3. Observe password field", testData: "Password: Test123", priority: "Medium", status: "Fail", result: "Icon disappears in error state — bug confirmed (BUG-009)" },
      { id: "TC_29", title: "Hide Password Toggle", steps: "1. Show password\n2. Click hide password icon\n3. Observe field", testData: "Password: Test123", priority: "Medium", status: "Fail", result: "Icon disappears in error state — bug confirmed (BUG-009)" },
      { id: "TC_30", title: "Tab Navigation", steps: "1. Press Tab key repeatedly\n2. Observe focus movement through all fields", testData: "Keyboard: Tab key", priority: "Low", status: "Fail", result: "Focus order incorrect: Phone → Email → Gender → Names → DOB → Newsletter → Password" },
      { id: "TC_31", title: "Valid Registration All Fields", steps: "1. Fill all fields with valid data\n2. Click REGISTER", testData: "Phone: 01404183386, Email: robiurhimel@email.com, Gender: Male, First Name: Robiur Bahar, Last Name: Himel, DOB: 30/11/2005, Newsletter: Checked, Password: Himel5784", priority: "High", status: "Pass", result: "Registration successful + redirect to dashboard" },
      { id: "TC_32", title: "Clear Form on Refresh", steps: "1. Fill some fields\n2. Refresh the page\n3. Check form fields", testData: "All fields filled", priority: "Low", status: "Pass", result: "All fields cleared after refresh" },
      { id: "TC_33", title: "Enter Key Submission", steps: "1. Fill all fields\n2. Press Enter key", testData: "Keyboard: Enter key", priority: "Medium", status: "Fail", result: "Form did not submit on Enter key press" },
      { id: "TC_34", title: "Cancel / Browser Back", steps: "1. Fill some fields\n2. Click browser back button\n3. Check if warning appears", testData: "Browser: Back button", priority: "Low", status: "Fail", result: "No warning shown — data lost without notification" },
      { id: "TC_35", title: "Mobile Responsive Check", steps: "1. Open page on mobile device\n2. Check all elements visibility", testData: "Device: Mobile", priority: "High", status: "Pass", result: "All elements visible and usable on mobile" },
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
