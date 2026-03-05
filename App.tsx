
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoSkills from './components/BentoSkills';
import TestReports from './components/TestReports';
import QAStats from './components/QAStats';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';
import AuditLogView from './components/AuditLogView';

const App: React.FC = () => {
  const [activeBug, setActiveBug] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'home' | 'audit'>('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Sync theme with document class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Random bug "glitch" simulation for immersive QA theme
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        setActiveBug(true);
        setTimeout(() => setActiveBug(false), 500);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const openAuditLog = (project: any) => {
    setSelectedProject(project);
    setCurrentView('audit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeView = () => {
    setCurrentView('home');
    setSelectedProject(null);
  };

  if (currentView === 'audit' && selectedProject) {
    return <AuditLogView project={selectedProject} onBack={closeView} />;
  }

  return (
    <div className={`relative min-h-screen transition-all duration-300 ${activeBug ? 'blur-[1px] brightness-110' : ''}`}>
      {/* Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        <Hero />
        <QAStats />
        <BentoSkills />
        <TestReports onOpenAudit={openAuditLog} />
        <ExperienceTimeline />
      </main>

      <Footer />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none -z-20 opacity-[0.03] dark:opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="fixed inset-0 pointer-events-none -z-20 opacity-0 dark:opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    </div>
  );
};

export default App;
