import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { 
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  AchievementsSection,
  CodingProfilesSection,
  ContactSection
} from './components';

// Simple Button component to avoid TypeScript errors
const Button = ({ 
  children, 
  className = '', 
  size = 'md',
  ...props 
}: any) => (
  <button 
    className={`px-4 py-2 rounded-md font-medium transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Coding', href: '#coding' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
            >
              Aman Saroj
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button 
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6"
              >
                Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection title="About Me" />
        </section>
        
        <section id="skills">
          <SkillsSection title="My Skills" />
        </section>
        
        <section id="experience">
          <ExperienceSection title="Experience" />
        </section>
        
        <section id="projects">
          <ProjectsSection title="Projects" />
        </section>
        
        <section id="achievements">
          <AchievementsSection title="Achievements" />
        </section>
        
        <section id="coding">
          <CodingProfilesSection title="Coding Profiles" />
        </section>
        
        <section id="contact">
          <ContactSection title="Contact Me" />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Aman Saroj
              </div>
              <p className="text-slate-400">
                Software Developer | AI/ML Enthusiast | Problem Solver
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-400 mb-2">
                Built with React, Tailwind CSS & Motion
              </p>
              <p className="text-slate-500 text-sm">
                © 2025 Aman Saroj. All rights reserved.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              🚀 Always ready for new challenges and opportunities
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        style={{ display: showScrollTop ? 'block' : 'none' }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}