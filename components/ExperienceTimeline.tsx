
import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Award, Cpu, Keyboard, ShieldCheck, ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight, Eye, Rocket, CheckCircle, ShieldAlert, Fingerprint } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  code?: string;
  details: string;
  imageUrl?: string;
  validationUrl?: string;
  icon: React.ReactNode;
  color: string;
  verificationStatus: 'VERIFIED' | 'SECURED' | 'AUDITED';
}

const DigitalCertificate: React.FC<{ cert: Certification }> = ({ cert }) => {
  return (
    <div className="relative w-full aspect-[1.414/1] bg-white dark:bg-[#0a0a1a] rounded-xl overflow-hidden border-8 border-neutral-100 dark:border-white/5 shadow-2xl flex flex-col font-sans text-neutral-900 dark:text-white">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[40px] border-current rounded-full blur-[100px]" />
      </div>

      {/* Certificate Content Header */}
      <div className="relative z-10 p-12 flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-50">Certificate ID</p>
          <p className="text-xl font-bold font-mono">{cert.code}</p>
        </div>
        <div className="w-24 h-24 bg-neutral-900 dark:bg-white rounded-2xl flex items-center justify-center rotate-3 shadow-xl">
           <Fingerprint className="text-white dark:text-neutral-900 w-12 h-12" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-12 text-center space-y-8">
        <div className="space-y-2">
          <h4 className="text-4xl font-display font-black uppercase tracking-tighter italic">Certificate</h4>
          <p className="text-lg font-medium opacity-60 tracking-[0.2em] uppercase">of Completion</p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-white/20 to-transparent" />

        <div className="space-y-4">
          <p className="text-sm italic opacity-50">This is to certify that</p>
          <h3 className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Robiur Bahar Himel
          </h3>
          <p className="text-sm opacity-60 max-w-md mx-auto">has successfully completed the professional audit and training for</p>
          <h2 className="text-2xl font-bold uppercase tracking-tight">{cert.title}</h2>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-white/20 to-transparent" />
      </div>

      {/* Footer / Signatures */}
      <div className="relative z-10 p-12 flex justify-between items-end">
        <div className="space-y-4">
          <div className="w-40 h-px bg-neutral-900 dark:bg-white/40" />
          <div className="text-[10px] uppercase tracking-widest font-bold">
            <p>Authorized Audit</p>
            <p className="opacity-40">{cert.issuer} QA Board</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full border-4 border-indigo-500/20 flex items-center justify-center p-2 relative">
             <div className="absolute inset-0 animate-spin-slow border-t-4 border-indigo-500 rounded-full" />
             <CheckCircle className="text-indigo-500 w-8 h-8" />
          </div>
          <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-indigo-500">Verified System Log</span>
        </div>

        <div className="space-y-4 text-right">
          <div className="w-40 h-px bg-neutral-900 dark:bg-white/40 ml-auto" />
          <div className="text-[10px] uppercase tracking-widest font-bold">
            <p>System Hash</p>
            <p className="opacity-40 font-mono">0x77...2026</p>
          </div>
        </div>
      </div>
      
      {/* "Original" Badge Overlay */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left ml-6 text-[8px] font-mono font-bold uppercase tracking-[0.5em] opacity-20 whitespace-nowrap">
        Official Digital Asset • Secure Repository • 2026 Audit
      </div>
    </div>
  );
};

const ExperienceTimeline: React.FC = () => {
  const [showCert, setShowCert] = useState<Certification | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const certifications: Certification[] = [
    {
      id: "CERT-OSTAD-01",
      title: "SQA Kickstart: Learn Software Testing",
      issuer: "Ostad",
      date: "COMPLETED 2026",
      code: "C38995",
      details: "Comprehensive manual testing course focusing on software quality life cycles, test design, and defect management. Verified and audited through the Ostad SQA program.",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQHMT0uixX6xPQ/profile-treasury-image-shrink_800_800/B4EZw8hNhTGwAY-/0/1770541866015?e=1773302400&v=beta&t=NLQAne6yLdBYb1qvDhT-qC7Kew4sbsFi05bKT3884FY", 
      icon: <Rocket className="w-10 h-10" />,
      color: "amber",
      verificationStatus: 'AUDITED'
    },
    {
      id: "CERT-SIMPLI-02",
      title: "Introduction to Software Testing",
      issuer: "Simplilearn SkillUP",
      date: "FEB 2026",
      code: "9807260",
      details: "Professional validation of QA principles, defect lifecycle management, and UI validation techniques.",
      imageUrl: "https://certificates.simplicdn.net/share/9807260_10093090_1770298615257.png",
      validationUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0NDcwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTgwNzI2MF8xMDA5MzA5MF8xNzcwMjk4NjE1MjU3LnBuZyIsInVzZXJuYW1lIjoiUm9iaXVyIEJhaGFyIEhpbWVsIn0%3D",
      icon: <ShieldCheck className="w-10 h-10" />,
      color: "indigo",
      verificationStatus: 'SECURED'
    },
    {
      id: "CERT-GOVT-03",
      title: "Basic Computer Course",
      issuer: "Benapole Post Office",
      date: "APR 25 - NOV 25",
      details: "Office productivity mastery, operating system fundamentals, and digital workflow optimization.",
      icon: <Cpu className="w-10 h-10" />,
      color: "green",
      verificationStatus: 'VERIFIED'
    },
    {
      id: "CERT-TYPING-04",
      title: "Professional Typing Mastery",
      issuer: "Skill Verification System",
      date: "VERIFIED 2026",
      details: "Validated typing performance ensuring high-speed data entry and technical documentation.",
      icon: <Keyboard className="w-10 h-10" />,
      color: "purple",
      verificationStatus: 'VERIFIED'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  useEffect(() => {
    if (isHovered || showCert) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isHovered, showCert]);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-32">
      {/* Experience & Education */}
      <section className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h2 className="text-4xl font-display font-bold flex items-center gap-4 text-neutral-900 dark:text-white">
            <Briefcase className="text-indigo-600 dark:text-indigo-400" /> Career Audit
          </h2>
          <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-neutral-200 dark:before:bg-white/10">
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 bg-indigo-500 rounded-full border-4 border-neutral-50 dark:border-[#030014] z-10 shadow-lg" />
              <div className="glass-card p-6 border-neutral-200 dark:border-white/5 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all">
                <span className="text-indigo-600 dark:text-indigo-400 text-xs font-mono mb-2 block tracking-widest uppercase font-bold">FEB 2026 – PRESENT</span>
                <h3 className="text-xl font-bold mb-1 text-neutral-900 dark:text-white">Junior Software Quality Assurance Engineer (Internship)</h3>
                <p className="text-neutral-500 dark:text-white/40 text-sm mb-1 font-semibold">Koy Jabo • Remote</p>
                <p className="text-neutral-500 dark:text-white/40 text-xs mb-4">Dhaka, Bangladesh</p>
                <ul className="text-xs text-neutral-600 dark:text-white/60 space-y-2">
                  <li className="flex gap-2"><span>•</span> Executing manual test cases and reporting defects.</li>
                  <li className="flex gap-2"><span>•</span> Collaborating with remote teams for quality assurance.</li>
                </ul>
              </div>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 bg-neutral-400 rounded-full border-4 border-neutral-50 dark:border-[#030014] z-10 shadow-lg" />
              <div className="glass-card p-6 border-neutral-200 dark:border-white/5 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all">
                <span className="text-indigo-600 dark:text-indigo-400 text-xs font-mono mb-2 block tracking-widest uppercase font-bold">2026 – PRESENT</span>
                <h3 className="text-xl font-bold mb-1 text-neutral-900 dark:text-white">Manual Tester (QA Projects)</h3>
                <p className="text-neutral-500 dark:text-white/40 text-sm mb-4">Focusing on high-impact functional validation and UI sanity.</p>
                <ul className="text-xs text-neutral-600 dark:text-white/60 space-y-2">
                  <li className="flex gap-2"><span>•</span> Defect documentation via structured logs.</li>
                  <li className="flex gap-2"><span>•</span> End-to-end regression across multi-tier apps.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="text-4xl font-display font-bold flex items-center gap-4 text-neutral-900 dark:text-white">
            <GraduationCap className="text-purple-600 dark:text-purple-400" /> Academic Logs
          </h2>
          <div className="space-y-8">
            <div className="glass-card p-8 border-neutral-200 dark:border-white/5 flex gap-6 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all bg-white/50 dark:bg-transparent group">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Cpu className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <span className="text-indigo-600 dark:text-indigo-400 text-xs font-mono mb-1 block uppercase tracking-widest font-bold">BATCH 36 – IN PROGRESS</span>
                <h3 className="text-xl font-bold mb-1 text-neutral-900 dark:text-white">Full Stack SQA Course</h3>
                <p className="text-neutral-500 dark:text-white/60 text-sm italic">IT Training BD</p>
              </div>
            </div>
            <div className="glass-card p-8 border-neutral-200 dark:border-white/5 flex gap-6 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all bg-white/50 dark:bg-transparent group">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Award className="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <span className="text-purple-600 dark:text-purple-400 text-xs font-mono mb-1 block uppercase tracking-widest font-bold">2024 – PRESENT</span>
                <h3 className="text-xl font-bold mb-1 text-neutral-900 dark:text-white">B.A. (Honours) – Geography</h3>
                <p className="text-neutral-500 dark:text-white/60 text-sm italic">Jashore Govt. City College</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credential Repository Slider */}
      <section className="space-y-20 py-10 overflow-hidden relative">
        <div className="text-center space-y-4 relative z-10">
          <div className="inline-block px-4 py-1 bg-neutral-200 dark:bg-white/5 border border-neutral-300 dark:border-white/10 rounded-full text-[10px] font-mono text-indigo-600 dark:text-indigo-400 tracking-[0.3em] uppercase mb-4">
            Security Clearance Level 02
          </div>
          <h2 className="text-5xl font-display font-bold text-neutral-900 dark:text-white uppercase tracking-tighter">Credential Repository</h2>
          <p className="text-neutral-500 dark:text-white/40 max-w-xl mx-auto font-medium">Verified technical competence through professional-grade certification.</p>
        </div>

        <div className="relative max-w-6xl mx-auto px-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {/* 3D Slider */}
          <div className="relative h-[550px] flex items-center justify-center perspective-[2000px]">
            {certifications.map((cert, index) => {
              const isActive = index === activeSlide;
              const isPrev = index === (activeSlide - 1 + certifications.length) % certifications.length;
              const isNext = index === (activeSlide + 1) % certifications.length;
              
              let transform = `scale(0) opacity(0)`;
              let zIndex = 0;
              let filter = 'blur(10px)';

              if (isActive) {
                transform = `translateX(0) translateZ(200px) scale(1.1)`;
                zIndex = 30;
                filter = 'blur(0px)';
              } else if (isPrev) {
                transform = `translateX(-55%) translateZ(-300px) rotateY(45deg) scale(0.85)`;
                zIndex = 20;
                filter = 'blur(4px)';
              } else if (isNext) {
                transform = `translateX(55%) translateZ(-300px) rotateY(-45deg) scale(0.85)`;
                zIndex = 20;
                filter = 'blur(4px)';
              }

              return (
                <div
                  key={cert.id}
                  onClick={() => isActive && setShowCert(cert)}
                  className="absolute w-full max-w-2xl transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) cursor-pointer"
                  style={{ transform, zIndex, filter, opacity: isActive || isPrev || isNext ? 1 : 0 }}
                >
                  <div className="glass-card p-2 border-neutral-200 dark:border-white/10 bg-white shadow-2xl dark:bg-white/5 overflow-hidden h-[450px]">
                    <div className="relative w-full h-full bg-neutral-50 dark:bg-[#05001a] rounded-[20px] overflow-hidden flex flex-col">
                      <div className="relative h-2/3 w-full overflow-hidden bg-neutral-200 dark:bg-white/5">
                        {!imageErrors[cert.id] && cert.imageUrl ? (
                          <img 
                            src={cert.imageUrl} 
                            alt={cert.title}
                            onError={() => handleImageError(cert.id)}
                            className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-neutral-400 dark:text-white/20">
                            <ShieldAlert size={48} className="animate-pulse" />
                            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">Encrypted Payload</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 dark:from-[#05001a] to-transparent" />
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2">
                           <Eye size={12} className="text-indigo-600" />
                           <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-600 dark:text-white/60">Audit Preview</span>
                        </div>
                      </div>

                      <div className="p-8 space-y-4 flex flex-col flex-1">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <span className="text-[9px] font-mono uppercase tracking-[0.2em] font-black text-indigo-600 dark:text-indigo-400">{cert.date}</span>
                            <h3 className="text-xl font-display font-bold leading-tight text-neutral-900 dark:text-white">{cert.title}</h3>
                          </div>
                          <div className="text-right">
                             <span className="block text-[8px] font-mono text-neutral-400 dark:text-white/30 uppercase tracking-widest">Doc Ref</span>
                             <span className="text-[10px] font-mono font-bold text-neutral-600 dark:text-white/60">{cert.code || 'SYS-000'}</span>
                          </div>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                           <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-400">
                                {cert.icon}
                             </div>
                             <span className="text-xs font-bold text-neutral-500 dark:text-white/40">{cert.issuer}</span>
                           </div>
                           <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                              <ZoomIn size={14} />
                              <span className="text-[9px] font-bold uppercase">Open Vault</span>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-40 pointer-events-none">
            <button onClick={prevSlide} className="w-14 h-14 rounded-2xl bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-400 hover:text-indigo-600 transition-all pointer-events-auto backdrop-blur-md shadow-xl"><ChevronLeft size={28} /></button>
            <button onClick={nextSlide} className="w-14 h-14 rounded-2xl bg-white/90 dark:bg-black/60 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-400 hover:text-indigo-600 transition-all pointer-events-auto backdrop-blur-md shadow-xl"><ChevronRight size={28} /></button>
          </div>
        </div>
      </section>

      {/* Audit Modal */}
      {showCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div className="absolute inset-0 bg-neutral-900/90 dark:bg-[#010008]/98 backdrop-blur-2xl" onClick={() => setShowCert(null)} />
          <div className="relative glass-card border-neutral-200 dark:border-white/10 max-w-6xl w-full bg-white dark:bg-[#030014] overflow-hidden flex flex-col max-h-[95vh] shadow-2xl">
            
            <div className="p-6 border-b border-neutral-200 dark:border-white/10 flex items-center justify-between bg-neutral-50 dark:bg-black/40">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center shadow-lg text-indigo-500">{showCert.icon}</div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-900 dark:text-white uppercase tracking-tight">{showCert.title}</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] text-neutral-400 font-mono tracking-widest">{showCert.issuer}</p>
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">{showCert.verificationStatus}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setShowCert(null)} className="p-2 hover:bg-red-500/10 text-neutral-400 hover:text-red-500 rounded-lg transition-all"><X size={24} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 sm:p-12 flex flex-col items-center gap-10">
              <div className="w-full max-w-4xl relative group">
                <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Certificate Display Logic */}
                <div className="relative z-10 p-4 sm:p-6 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-3xl">
                  {!imageErrors[showCert.id] && showCert.imageUrl ? (
                    <img src={showCert.imageUrl} alt={showCert.title} onError={() => handleImageError(showCert.id)} className="w-full h-auto rounded-lg shadow-2xl" />
                  ) : (
                    <DigitalCertificate cert={showCert} />
                  )}

                  <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-neutral-200 dark:border-white/10">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-white/20 uppercase tracking-[0.2em]">Hash ID</span>
                      <p className="text-sm font-bold font-mono truncate">{showCert.code}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-white/20 uppercase tracking-[0.2em]">Audit Year</span>
                      <p className="text-sm font-bold">2026</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-white/20 uppercase tracking-[0.2em]">Security</span>
                      <p className="text-sm font-bold text-green-500">LEVEL-02 PASS</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-white/20 uppercase tracking-[0.2em]">Integrity</span>
                      <p className="text-sm font-bold">100% SECURE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pb-12">
                {showCert.validationUrl && (
                  <a href={showCert.validationUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:bg-indigo-500 transition-all transform hover:-translate-y-1">
                    Live Audit Link <ExternalLink size={20} />
                  </a>
                )}
                <button onClick={() => setShowCert(null)} className="w-full sm:w-auto px-10 py-5 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl font-bold text-neutral-700 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors">
                  Close Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceTimeline;
