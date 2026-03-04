import React, { useState, useEffect, useRef } from 'react';
import { Camera, Code, Briefcase, Mail, Github, Linkedin, Youtube, Terminal, Sparkles, Zap, Cpu, Globe } from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [particles, setParticles] = useState([]);
  const [ripples, setRipples] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const cursorRef = useRef(null);



  
useEffect(() => {
  // Simulate loading progress
  const progressInterval = setInterval(() => {
    setLoadingProgress(prev => {
      if (prev >= 100) {
        clearInterval(progressInterval);
        return 100;
      }
      return prev + 2;
    });
  }, 30);

  // Hide loading screen after animation completes
  const loadingTimer = setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return () => {
    clearInterval(progressInterval);
    clearTimeout(loadingTimer);
  };
}, []);

  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create particle trail with drift
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
          opacity: 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2
        };
        setParticles(prev => [...prev.slice(-30), newParticle]);
      }
    };

    const handleClick = (e) => {
      // Create ripple effect on click
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fade out and animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev
        .filter(p => p.opacity > 0)
        .map(p => ({
          ...p,
          opacity: p.opacity - 0.05,
          x: p.x + p.speedX,
          y: p.y + p.speedY
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: 'React.js', icon: '⚛️', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', icon: '🟨', level: 90, color: '#F7DF1E' },
    { name: 'Python', icon: '🐍', level: 85, color: '#3776AB' },
    { name: 'C++', icon: '⚙️', level: 82, color: '#00599C' },
    { name: 'Node.js', icon: '🟢', level: 85, color: '#339933' },
    { name: 'MongoDB', icon: '🍃', level: 82, color: '#47A248' },
    { name: 'FastAPI', icon: '⚡', level: 85, color: '#009688' },
    { name: 'Flask', icon: '🧪', level: 80, color: '#000000' },
  ];

  const projects = [
    {
      title: 'DocAssist - AI Medical Triage & Booking System',
      description: 'Location-aware healthcare platform using Generative AI (LLMs) to parse patient symptoms into structured urgency classifications. Features "Just-in-Time" Provider Database with real-time geospatial searches and RBAC for secure workflows.',
      tech: ['FastAPI', 'LLM', 'Serper.dev', 'Google Maps API'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Industry Operator Allocation & Hardness Detection',
      description: 'Flask-based web application for operator management and automated task allocation. Integrated ML model for hardness detection ensuring product quality. Features balanced resource allocation and real-time analytics.',
      tech: ['Flask', 'Python', 'Machine Learning', 'CSV Processing'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'MERN Real-Time Chat Application',
      description: 'Private chat platform with Socket.IO for instant bidirectional communication. Implemented JWT authentication, bcrypt encryption, and responsive dashboard with live user status and message notifications.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Smart Triage System',
      description: 'Algorithmic system where high-urgency cases trigger auto-confirmation logic, while routine cases route through provider approval queue, optimizing medical resource allocation with structured MongoDB data model.',
      tech: ['React', 'FastAPI', 'MongoDB', 'REST API'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const experience = [
     {
      role: 'Frontend Intern (Internship)',
      company: 'NIT Surathkal',
      period: 'April 2025 - June 2025',
      description: 'Learn Mern stack and build different industry ready projects .also contributed for some open source projects in NIT surathkal.'
    },
    {
      role: 'React Developer (Internship)',
      company: 'Vinayak IT Solution',
      period: 'Jan 2025 - Mar 2025',
      description: 'Developed and maintained responsive web pages using React.js, JavaScript, HTML, and CSS. Enhanced user experience through interactive interfaces and gained practical experience across all phases of the software development lifecycle.'
    },
    {
      role: 'Design Team Leader',
      company: 'ACSES - Association of Computer Science & Engineering Students',
      period: '2023 - 2024',
      description: 'Led a team of 5+ designers to create event promotions. Organized 10+ events annually, ensuring on-time delivery and high-quality execution.'
    },
    {
      role: 'B.Tech Computer Science and Engineering',
      company: 'Kolhapur Institute of Technology',
      period: '2021 - 2025',
      description: 'Current GPA: 8.58/10. Coursework: Algorithms, Data Structures, Operating Systems, OOP, Database Systems, AR/VR, and Computer Networks. Active contributor in tech community events.'
    }
  ];

  return (
    <>
    {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center animate-fadeOut"
             style={{ animation: loadingProgress === 100 ? 'fadeOut 0.5s ease-out forwards' : 'none' }}>
          <div className="text-center space-y-8">
            {/* Animated Logo */}
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="w-32 h-32 mx-auto relative">
                <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-4 border-transparent border-t-blue-500 rounded-full animate-spin-reverse"></div>
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Terminal className="w-12 h-12 text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Loading Text */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Loading Portfolio
                </span>
              </h1>
              
              {/* Loading Bar */}
              <div className="w-64 mx-auto">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-300 ease-out relative"
                    style={{ width: `${loadingProgress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
                <p className="text-cyan-400 font-mono text-sm mt-2">{loadingProgress}%</p>
              </div>

              {/* Status Text */}
              <p className="text-gray-400 font-mono text-sm animate-pulse">
                {loadingProgress < 30 && "Initializing systems..."}
                {loadingProgress >= 30 && loadingProgress < 60 && "Loading components..."}
                {loadingProgress >= 60 && loadingProgress < 90 && "Preparing experience..."}
                {loadingProgress >= 90 && "Almost ready..."}
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      )}
    <div className="relative min-h-screen bg-black text-white overflow-hidden" style={{ cursor: 'none' }}>
      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s'
        }}
      >
        {/* Main Cursor Dot */}
        <div className={`rounded-full bg-cyan-400 ${cursorVariant === 'hover' ? 'w-12 h-12' : 'w-4 h-4'}`}
             style={{
               boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)',
               transition: 'all 0.2s ease-out'
             }} />
        
        {/* Pulsing Outer Ring */}
        <div 
          className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-cyan-400/30 rounded-full animate-ping-slow"
          style={{
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Particle Trail */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.8), rgba(147, 51, 234, 0.4))',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Click Ripple Effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-40 animate-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '100px',
            height: '100px',
            border: '2px solid rgba(34, 211, 238, 0.6)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"
             style={{ animationDuration: '4s', transform: `translateY(${scrollY * 0.3}px)` }} />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"
             style={{ animationDuration: '6s', animationDelay: '1s', transform: `translateY(${-scrollY * 0.2}px)` }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"
             style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
          <div className="max-w-7xl w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 text-cyan-400 mb-8">
                  <Terminal size={24} />
                  <span className="text-sm font-mono tracking-wider">PORTFOLIO.v2024</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                  <span className="inline-block animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Creative
                    </span>
                  </span>
                  <br />
                  <span className="inline-block animate-slideInLeft" style={{ animationDelay: '0.3s' }}>
                    Developer
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl animate-slideInLeft" style={{ animationDelay: '0.5s' }}>
                  Building exceptional digital experiences with cutting-edge technologies and innovative solutions
                </p>

                <div className="flex gap-6 pt-8 animate-slideInLeft" style={{ animationDelay: '0.7s' }}>
                  <button 
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    View Projects
                    <Sparkles className="inline ml-2 group-hover:rotate-12 transition-transform" size={20} />
                  </button>
                  <button 
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>

              {/* Right Side - Profile Photo */}
              <div className="flex justify-center md:justify-end animate-slideInRight">
                <div className="relative group">
                  {/* Animated Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  
                  {/* Profile Container */}
                  <div className="relative">
                    {/* Outer Ring */}
             
                    
                    {/* Main Photo Container */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border-2 border-cyan-500/50">
                      {/* Photo Placeholder - Replace with your actual photo */}
                      <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden border-2 border-cyan-500/30 relative group-hover:border-cyan-500/60 transition-all duration-300">
                     <img src="/ResumeProfile.png" alt="Aryan Sanjay Mangrule" className="w-full h-full object-cover" />
                        <div className="text-center">
               
                    
                        </div>
                        
                        {/* Scanning Line Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan"></div>
                      </div>
                      
                      {/* Name and Credentials */}
                      <div className="mt-6 text-center space-y-2">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          Aryan Sanjay Mangrule
                        </h2>
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500"></div>
                          <p className="text-cyan-400 font-mono text-sm tracking-wider">B.TECH CSE</p>
                          <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500"></div>
                        </div>
                        
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mt-4">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                          <span className="text-cyan-400 text-xs font-mono">AVAILABLE FOR OPPORTUNITIES</span>
                        </div>
                        
                        {/* Download Resume Button */}
                        <a
                          href="/Aryan_Mangrule_Resume.pdf"
                          download="/Aryan_Mangrule_Resume.pdf"
                          onMouseEnter={() => setCursorVariant('hover')}
                          onMouseLeave={() => setCursorVariant('default')}
                          className="group inline-flex items-center gap-3 px-6 py-3 mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                        >
                          <svg 
                            className="w-5 h-5 group-hover:animate-bounce" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                          </svg>
                          <span>Download Resume</span>
                        </a>
                      </div>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50"></div>
                      <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50"></div>
                      <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50"></div>
                      <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-6xl w-full">
            <div className="flex items-center gap-3 text-cyan-400 mb-12">
              <Code size={24} />
              <h2 className="text-sm font-mono tracking-wider">ABOUT ME</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-5xl font-bold">
                  Passionate about
                  <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                    Technology & Innovation
                  </span>
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  I'm Aryan Sanjay Mangrule, a B.Tech Computer Science and Engineering student at Kolhapur Institute 
                  of Technology (GPA: 8.58/10). I specialize in full-stack development with MERN stack, FastAPI, Flask, 
                  and building AI-powered applications including medical triage systems and real-time chat platforms.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Recently completed a React Developer internship at Vinayak IT Solution and led design teams at ACSES. 
                  My projects span from Generative AI healthcare platforms to ML-based operator allocation systems. 
                  Proficient in C++, Python, JavaScript, and modern web technologies.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Zap />, label: 'GPA', value: '8.58' },
                  { icon: <Cpu />, label: 'Major Projects', value: '5+' },
                  { icon: <Globe />, label: 'Events Led', value: '10+' },
                  { icon: <Sparkles />, label: 'Team Members', value: '5+' }
                ].map((stat, i) => (
                  <div 
                    key={i}
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-6xl w-full">
            <div className="flex items-center gap-3 text-cyan-400 mb-12">
              <Cpu size={24} />
              <h2 className="text-sm font-mono tracking-wider">TECHNICAL SKILLS</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="group relative p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    opacity: 0
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                    
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="absolute h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          boxShadow: `0 0 10px ${skill.color}44`
                        }}
                      />
                    </div>
                    <div className="text-right text-sm text-cyan-400 mt-2 font-mono">{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-6xl w-full">
            <div className="flex items-center gap-3 text-cyan-400 mb-12">
              <Briefcase size={24} />
              <h2 className="text-sm font-mono tracking-wider">FEATURED PROJECTS</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="group relative p-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-102 overflow-hidden"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    animation: 'fadeInUp 0.8s ease-out forwards',
                    opacity: 0
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full text-sm font-semibold mb-4`}>
                      Featured
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, j) => (
                        <span 
                          key={j}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/btn">
                      View Project 
                      <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-4xl w-full">
            <div className="flex items-center gap-3 text-cyan-400 mb-12">
              <Briefcase size={24} />
              <h2 className="text-sm font-mono tracking-wider">EXPERIENCE</h2>
            </div>

            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="group relative pl-8 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    animation: 'fadeInLeft 0.8s ease-out forwards',
                    opacity: 0
                  }}
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-500 rounded-full transform -translate-x-[9px] group-hover:scale-150 transition-transform duration-300"
                       style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }} />
                  
                  <div className="pb-8">
                    <div className="text-cyan-400 font-mono text-sm mb-2">{exp.period}</div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <div className="text-gray-400 font-semibold mb-3">{exp.company}</div>
                    <p className="text-gray-500">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-4xl w-full text-center">
            <div className="flex items-center justify-center gap-3 text-cyan-400 mb-12">
              <Mail size={24} />
              <h2 className="text-sm font-mono tracking-wider">GET IN TOUCH</h2>
            </div>

            <h3 className="text-6xl font-bold mb-6">
              Let's Create Something
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                Amazing Together
              </span>
            </h3>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              {[
                { 
                  icon: <Github size={28} />, 
                  label: 'GitHub',
                  url: 'https://github.com/aryanmangrule',
                  color: 'hover:bg-gray-700'
                },
                { 
                  icon: <Linkedin size={28} />, 
                  label: 'LinkedIn',
                  url: 'https://www.linkedin.com/in/aryan-mangrule',
                  color: 'hover:bg-blue-600'
                },
                { 
                  icon: <Youtube size={28} />, 
                  label: 'YouTube',
                  url: 'https://youtube.com/@aryanmangrule',
                  color: 'hover:bg-red-600'
                },
                { 
                  icon: <Mail size={28} />, 
                  label: 'Email',
                  url: 'mailto:aryanmangrule@gmail.com',
                  color: 'hover:bg-cyan-600'
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className={`group p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    opacity: 0
                  }}
                >
                  <div className="text-cyan-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            <a
              href="mailto:aryanmangrule@gmail.com"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className="inline-block px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Send Me an Email
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-cyan-500/20 text-center text-gray-500">
          <div className="max-w-6xl mx-auto px-8">
            <p className="mb-4">© 2026 | Aryan Sanjay Mangrule. Crafted with passion and code.</p>
            <p className="text-sm font-mono text-cyan-400">
              Built with React + Tailwind CSS + Love ❤️
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`



@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-spin-reverse {
  animation: spin-reverse 1.5s linear infinite;
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');

        * {
          font-family: 'Space Grotesk', sans-serif;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out backwards;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out backwards;
        }

        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-ripple {
          animation: ripple 0.6s ease-out forwards;
        }

        .animate-ping-slow {
          animation: ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  </>
  );
}