import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook, 
  Globe, 
  Camera, 
  Zap, 
  Play,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';
import { PROJECTS, EXHIBITIONS, Project, ProjectCategory } from './constants';

// --- Components ---

const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-5">
      <div className="h-full flex flex-col justify-around">
        {[...Array(3)].map((_, idx) => (
          <motion.div
            key={idx}
            animate={{ x: idx % 2 === 0 ? [0, "-50%"] : ["-50%", 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-[25vw] font-black tracking-tighter mx-12">
                {text}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About.me', href: '#about' },
    { name: 'Created Gems', href: '#portfolio' },
    { name: 'Why Choose Me?', href: '#exhibitions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="font-black text-xl tracking-tighter uppercase">ST.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer font-black text-xs uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase">
              samarth <br />
              <span className="text-accent">thakkar</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-gray-600 text-lg leading-relaxed uppercase font-bold tracking-tight"
          >
            WELCOME TO A PORTFOLIO OF A GRAPHIC DESIGNER. HERE THE PROJECTS MEETS PRECISION AND AESTHETICS.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="overflow-hidden whitespace-nowrap py-8 border-y border-gray-100"
          >
            <motion.div
              animate={{ x: [0, "-50%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              {[...Array(20)].map((_, i) => (
                <span key={i} className="text-4xl font-black tracking-tighter mx-8 text-accent">2026.</span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {/* Social buttons removed */}
          </motion.div>

          <div className="flex gap-12 pt-8">
            {/* Stats removed as per request */}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-accent rounded-[3rem] overflow-hidden relative group">
            <img 
              src="https://i.ibb.co/sdGtYPdv/763646c0-14af-4998-aff0-a512a53daf59.png" 
              alt="Hero" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-12 -left-12">
              {/* Circular text removed */}
            </div>

            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
               <div className="text-white font-black text-6xl opacity-20 rotate-90 tracking-widest uppercase">CREATIVE</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-32 overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="flex items-center gap-4 overflow-hidden w-full whitespace-nowrap">
            {[1, 2, 3, 4].map((i) => (
              <h2 key={i} className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter opacity-20">
                about.me . about.me . about.me .
              </h2>
            ))}
          </div>

          <div className="relative max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-20"
            >
              <div className="aspect-square rounded-full overflow-hidden border-4 border-white/20 p-4">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                  <img 
                    src="https://i.ibb.co/SDGTCM2N/Chat-GPT-Image-Mar-28-2026-01-57-58-PM.png" 
                    alt="Samarth Thakkar" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              {/* Radial Shapes */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[120%] h-[120%] border border-white/10 rounded-full animate-spin-slow"></div>
                <div className="w-[140%] h-[140%] border border-white/5 rounded-full animate-reverse-spin-slow"></div>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
               <div className="absolute top-10 -left-20 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
                 <div className="w-2 h-2 bg-accent rounded-full"></div>
               </div>
               <div className="absolute bottom-10 -right-20 w-20 h-20 border border-white/20 rounded-full flex items-center justify-center">
                 <div className="w-4 h-4 bg-white/20 rounded-full"></div>
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-6"
          >
            <p className="text-gray-400 text-sm md:text-base leading-relaxed uppercase font-bold tracking-tight max-w-xl mx-auto">
              I am a creative graphic designer and web developer focused on building visually striking and functional digital experiences. I blend design and technology to bring ideas to life with precision and creativity. Beyond this, I enjoy video editing and gaming, which fuel my inspiration.
            </p>
            <div className="flex justify-center gap-8 pt-6">
              {/* Detailed stats removed */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories: ProjectCategory[] = ['All', 'food and drinks', 'beauty and fragnance', 'accesories', 'invitations', 'tech'];

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            Created <span className="text-accent">Gems</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-md uppercase text-xs font-bold tracking-widest">Selected Works & Projects</p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setFilter(cat)}
              className={`cursor-pointer px-6 py-2 rounded-full text-xs font-bold transition-all ${filter === cat ? 'bg-accent text-black' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`${project.aspectRatio || 'aspect-[148/210]'} rounded-[2rem] overflow-hidden relative bg-white`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                  <div className="mt-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center self-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ArrowUpRight size={20} className="text-black" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[3rem] max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 h-64 md:h-auto bg-gray-200">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-accent text-sm font-bold uppercase tracking-widest">{selectedProject.category}</span>
                      <h2 className="text-4xl font-black mt-2">{selectedProject.title}</h2>
                    </div>
                    <div onClick={() => setSelectedProject(null)} className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <X size={24} />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Description</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <span key={tool} className="px-4 py-1 bg-gray-100 rounded-full text-xs font-bold">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Full Project button removed */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Exhibitions = () => {
  return (
    <section id="exhibitions" className="py-32 bg-neutral-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            <span className="text-accent">WHY</span> TO CHOOSE <span className="text-accent">ME?</span>
          </h2>
        </div>

        <div className="space-y-0">
          {EXHIBITIONS.map((ex, idx) => (
            <motion.div 
              key={ex.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-b border-gray-200 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:px-8 transition-all duration-500 hover:bg-white hover:shadow-xl"
            >
              <div className="flex-1">
                <div className="flex items-center gap-8 mb-2">
                  <span className="text-xs font-black text-accent">0{idx + 1}</span>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black group-hover:text-accent transition-colors">{ex.title}</h3>
                </div>
                <p className="text-gray-400 max-w-2xl ml-12">
                  {ex.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
            let's <br />
            <span className="text-accent">talk</span>
          </h2>
          <p className="text-gray-500 text-xl max-w-md uppercase font-bold tracking-tight">
            READY TO START A PROJECT? LET'S TALK.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-black uppercase text-gray-300">Email</div>
                <div className="font-bold">thakkarsamarth131@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs font-black uppercase text-gray-300">Contact</div>
                <div className="font-bold">+91 99786 29658</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none text-center"
            >
              <span className="text-black block">STILL</span>
              <span className="text-accent block">THINKING??</span>
            </motion.div>
            
            {/* Zig-zag surrounding lines */}
            <div className="absolute -inset-12 pointer-events-none">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Top Zig-zag */}
                <motion.path
                  d="M -10,10 L 0,0 L 10,10 L 20,0 L 30,10 L 40,0 L 50,10 L 60,0 L 70,10 L 80,0 L 90,10 L 100,0 L 110,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                {/* Bottom Zig-zag */}
                <motion.path
                  d="M -10,90 L 0,100 L 10,90 L 20,100 L 30,90 L 40,100 L 50,90 L 60,100 L 70,90 L 80,100 L 90,90 L 100,100 L 110,90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">
          @2026 SAMARTH THAKKAR STUDIO. ALL RIGHTS RESERVED.
        </div>
      </div>
      
      <div className="mt-20 overflow-hidden w-full whitespace-nowrap opacity-5">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter leading-none">
          samarth . thakkar .
        </h2>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Marquee text="2026." />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Exhibitions />
      <Contact />
      <Footer />
      
      {/* Custom Cursor or other global elements could go here */}
    </div>
  );
}
