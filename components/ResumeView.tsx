
import React from 'react';
import { ArrowLeft, Printer, Mail, Phone, Linkedin, MapPin } from 'lucide-react';

interface ResumeViewProps {
  onBack: () => void;
}

const ResumeView: React.FC<ResumeViewProps> = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-200 text-neutral-900 font-sans selection:bg-indigo-100 print:bg-white">
      {/* Control Panel - Hidden on Print */}
      <div className="print:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-300 px-6 py-4 flex items-center justify-between shadow-md">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors font-bold"
        >
          <ArrowLeft size={20} /> Back to Portfolio
        </button>
        <div className="flex gap-3">
          <button 
            onClick={handlePrint}
            className="px-8 py-2.5 bg-neutral-900 text-white rounded-lg font-bold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-lg"
          >
            <Printer size={18} /> Print or Save as PDF
          </button>
        </div>
      </div>

      {/* A4 Resume Sheet - Pixel Perfect Recreation of the Uploaded Image */}
      <div className="max-w-[850px] mx-auto my-12 bg-white shadow-2xl print:shadow-none print:my-0 min-h-[1100px] p-[60px] space-y-8 text-[#1a1a1a]">
        
        {/* Header Section */}
        <header className="flex justify-between items-start mb-10">
          <div className="space-y-3">
            <h1 className="text-[38px] font-bold leading-none tracking-tight">Robiur Bahar Himel</h1>
            <p className="text-[20px] text-[#444] font-medium">Junior Software Quality Assurance Engineer</p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-4 text-[14px]">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-neutral-700" />
                <span>robiurhimel@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-neutral-700" />
                <span>+8801404183386</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-neutral-700" />
                <span>Bangladeshi</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} className="text-neutral-700" />
                <span>www.linkedin.com/in/robiur-bahar-himel</span>
              </div>
            </div>
          </div>

          <div className="w-[130px] h-[160px] bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D03AQH5PVLi9Ltojg/profile-displayphoto-scale_200_200/B4DZwkcTX3G4AY-/0/1770137928860?e=1774483200&v=beta&t=Yo3IuoAUhtnbIZBOEjMSPFajtWvA6XWkVZ-xfgTnikk" 
              alt="Robiur Bahar Himel" 
              className="w-full h-full object-cover grayscale contrast-110"
            />
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="space-y-3">
          <h2 className="text-[18px] font-bold border-b-2 border-black pb-1 uppercase tracking-tight">Professional summary</h2>
          <p className="text-[14.5px] leading-[1.6] text-justify">
            Detail-oriented QA tester with hands-on experience in manual testing, test case design, and defect tracking. 
            Skilled in functional, UI, and regression testing with a strong understanding of SDLC and STLC. 
            Passionate about finding edge-case bugs and continuously improving testing skills through practical learning and real project analysis.
          </p>
        </section>

        {/* Section: Work History */}
        <section className="space-y-4">
          <h2 className="text-[18px] font-bold border-b-2 border-black pb-1 uppercase tracking-tight">Work history</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between font-bold text-[15px]">
                <span>Junior Software Quality Assurance Engineer (Internship)</span>
                <span>Feb 2026 – Present</span>
              </div>
              <div className="text-[14px]">
                <p><span className="font-bold">Company:</span> Koy Jabo (Remote)</p>
                <p><span className="font-bold">Location:</span> Dhaka, Bangladesh</p>
              </div>
              <ul className="text-[14px] space-y-1 list-disc pl-5 leading-relaxed">
                <li>Executing manual test cases for web and mobile applications</li>
                <li>Identifying, documenting, and tracking bugs using structured reporting</li>
                <li>Collaborating with cross-functional teams to ensure product quality</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between font-bold text-[15px]">
                <span>Software Testing Practice (Self-Learning & Projects)</span>
                <span>2026 – Present</span>
              </div>
              <div className="text-[14px]">
                <p><span className="font-bold">Role:</span> Manual Tester (Practice Projects)</p>
              </div>
              <ul className="text-[14px] space-y-1 list-disc pl-5 leading-relaxed">
                <li>Tested real-world websites (e-commerce, registration & login systems)</li>
                <li>Identified UI, validation, and functional bugs</li>
                <li>Wrote detailed <span className="font-bold">test cases</span> using Google Sheets</li>
                <li>Reported bugs with <span className="font-bold">steps to reproduce, expected vs actual results</span></li>
                <li>Practiced <span className="font-bold">positive, negative, and edge-case testing</span></li>
                <li>Gained understanding of <span className="font-bold">SDLC & STLC</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="space-y-4">
          <h2 className="text-[18px] font-bold border-b-2 border-black pb-1 uppercase tracking-tight">Education</h2>
          <div className="space-y-6">
            <div className="relative">
              <div className="flex justify-between items-baseline font-bold text-[15px]">
                <span>Bachelor of Arts (Honours) – Geography, <span className="font-normal italic">Jashore Govt. City collage</span></span>
                <span>2024</span>
              </div>
              <p className="text-[14px]">2nd Year (Ongoing)</p>
            </div>
            <div className="relative">
              <div className="flex justify-between items-baseline font-bold text-[15px]">
                <span>Higher Secondary Certificate (HSC), <span className="font-normal italic">cantonment collage, Jashore</span></span>
                <span>2021 – 2023</span>
              </div>
              <p className="text-[14px]">Jashore</p>
            </div>
          </div>
        </section>

        {/* Section: Skills */}
        <section className="space-y-4">
          <h2 className="text-[18px] font-bold border-b-2 border-black pb-1 uppercase tracking-tight">Skills</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-2">
              <h3 className="font-bold text-[15px]">Tools</h3>
              <ul className="text-[14px] space-y-1 list-disc pl-5">
                <li>Google Sheets (Test Cases)</li>
                <li>Jira / Trello (Basic)</li>
                <li>Postman (API Testing – Basics)</li>
                <li>Git / GitHub (Basic)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[15px]">Testing & QA</h3>
              <ul className="text-[14px] space-y-1 list-disc pl-5">
                <li>Manual Testing (Functional, UI, Regression)</li>
                <li>Test Case Design & Execution</li>
                <li>Bug Reporting & Defect Tracking</li>
                <li>SDLC & STLC Understanding</li>
                <li>Positive, Negative & Edge Case Testing</li>
                <li>Cross-Browser & Mobile Testing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Projects */}
        <section className="space-y-4">
          <h2 className="text-[18px] font-bold border-b-2 border-black pb-1 uppercase tracking-tight">Projects</h2>
          <div className="space-y-2">
            <div className="flex justify-between font-bold text-[15px]">
              <span>Role: Manual Tester</span>
              <span>2026</span>
            </div>
            <ul className="text-[14px] space-y-1 list-disc pl-5 leading-relaxed">
              <li>Tested real-world web applications including registration, login, and checkout flows</li>
              <li>Designed and executed manual test cases (positive, negative & edge cases)</li>
              <li>Documented bugs with clear reproduction steps and expected vs actual results</li>
              <li>Used Google Sheets to organize test cases and defects</li>
            </ul>
          </div>
        </section>

        {/* Section: Certifications */}
        <section className="space-y-4">
          <h2 className="text-[18px] font-bold border-b-2 border-black pb-1 uppercase tracking-tight">Certifications & Training</h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-[15px]">Full Stack SQA Course – Batch 36 | <span className="font-normal">IT Training BD (In Progress)</span></p>
              <p className="text-[14px] pl-5">Comprehensive training in automated and manual software quality assurance.</p>
            </div>
            <div>
              <p className="font-bold text-[15px]">Basic Computer Course | <span className="font-normal">Benapole Post office Apr 25 - Nov 25</span></p>
              <ul className="text-[14px] space-y-1 list-disc pl-5">
                <li>Microsoft Office</li>
                <li>Typing: 25 WPM</li>
              </ul>
            </div>
            {/* Added the Simplilearn certificate here as well to match the latest portfolio data */}
            <div className="pt-2">
              <p className="font-bold text-[15px]">Introduction to Software Testing | <span className="font-normal">Simplilearn SkillUP Feb 26</span></p>
              <p className="text-[12px] text-neutral-500 italic pl-5">Certificate Code: 9807260</p>
            </div>
          </div>
        </section>

        {/* Section: References */}
        <section className="space-y-4">
          <h2 className="text-[18px] font-bold border-b-2 border-black pb-1 uppercase tracking-tight">References</h2>
          <div className="text-[14px]">
            <p className="font-bold">Mejbaur Bahar Fagun <span className="font-normal">, Senior Software Engineer QA, Markopolo.ai</span></p>
            <p className="text-neutral-700 italic">mejbaur@markopolo.ai, +8801316314566</p>
          </div>
        </section>

      </div>

      {/* Footer message - Hidden on print */}
      <div className="print:hidden text-center pb-12 text-neutral-500 text-sm">
        <p>This document is optimized for A4 PDF export. Click "Print" and select "Save as PDF".</p>
      </div>
    </div>
  );
};

export default ResumeView;
