import React, { useState, useEffect } from 'react';
import { Terminal, Server, Cloud, Container, Shield, Mail, Github, Linkedin, ExternalLink, ArrowRight, Code, GitBranch, Sun, Moon } from 'lucide-react';

function App() {
  // Typewriter effect state
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Theme toggle state with localStorage persistence
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // Default to dark mode
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const typingWords = ['infrastructure.', 'CI/CD pipelines.', 'clusters.', 'systems.', 'platforms.'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % typingWords.length;
      const fullText = typingWords[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause when word is fully typed
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before typing the next word
      }
    };

    const ticker = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const skillCategories = [
    { title: 'OS', icon: <Terminal className="text-blue-500 dark:text-blue-400" size={24} />, items: ['Debian', 'Ubuntu Server', 'Windows', 'MacOS'] },
    { title: 'Programming Languages', icon: <Code className="text-violet-500 dark:text-violet-400" size={24} />, items: ['Bash', 'Python (Learning)', 'Go (Learning)'] },
    { title: 'Hypervisor', icon: <Cloud className="text-cyan-500 dark:text-cyan-400" size={24} />, items: ['Proxmox', 'Hyper-V'] },
    { title: 'CI / CD', icon: <GitBranch className="text-pink-500 dark:text-pink-400" size={24} />, items: ['Azure DevOps', 'GitLab CI', 'ArgoCD'] },
    { title: 'Containerization', icon: <Container className="text-teal-500 dark:text-emerald-400" size={24} />, items: ['Docker', 'Kubernetes', 'Helm'] },
    { title: 'Infra as Code', icon: <Server className="text-indigo-500 dark:text-purple-400" size={24} />, items: ['Terraform (Learning)', 'Ansible (Learning)'] },
    { title: 'Observability', icon: <Shield className="text-amber-500 dark:text-yellow-400" size={24} />, items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'] },
  ];

  const projects = [
    {
      title: 'GitOps Kubernetes Lab',
      desc: 'Declarative local Kubernetes environment using ArgoCD and GitOps workflows.',
      tags: ['Kubernetes', 'ArgoCD', 'GitOps']
    },
    {
      title: 'Observability Stack',
      desc: 'Centralized monitoring & logging to track metrics across distributed systems.',
      tags: ['Prometheus', 'Grafana', 'ELK']
    },
    {
      title: 'Production Docker Stack',
      desc: 'Optimized multi-stage Docker setups designed for high availability and security.',
      tags: ['Docker', 'Nginx', 'CI/CD']
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 dark:bg-[#09090b] dark:text-slate-300 font-sans selection:bg-indigo-200 selection:text-indigo-900 dark:selection:bg-emerald-500/30 dark:selection:text-emerald-200 overflow-hidden transition-colors duration-300">
      
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[size:24px_24px] opacity-50 dark:opacity-100 transition-colors duration-300"></div>
        <div className="absolute left-[-10%] top-[-5%] h-[600px] w-[600px] rounded-full bg-indigo-300/30 dark:bg-emerald-500/20 blur-[120px] dark:blur-[150px] transition-colors duration-500"></div>
        <div className="absolute right-[-5%] bottom-[-5%] h-[500px] w-[500px] rounded-full bg-blue-300/30 dark:bg-cyan-500/10 blur-[120px] dark:blur-[150px] transition-colors duration-500"></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* Sticky Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
            <Terminal className="text-indigo-600 dark:text-emerald-400 transition-colors" size={20} /> 
            ing<span className="text-indigo-600 dark:text-emerald-400 animate-pulse">_</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-emerald-400 transition-colors">Projects</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-200 dark:text-black px-4 py-2 rounded-md text-sm font-bold transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 dark:shadow-none">
              Hire Me
            </a>
          </div>
        </div>
      </nav>
        
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Hero Section */}
        <section id="about" className="py-20 animate-fade-in flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400 font-mono text-sm mb-8 font-semibold transition-colors duration-300">
              <Code size={14} /> ./hello_world.sh
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight transition-colors duration-300">
              Building scalable <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-emerald-400 dark:to-cyan-500 transition-all duration-300">
                {text}
              </span>
              <span className="text-indigo-600 dark:text-emerald-400 animate-pulse ml-1 transition-colors">|</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 mb-6 transition-colors duration-300">
              Hi, I'm <strong className="text-slate-900 dark:text-white">Ing</strong>. A DevOps & Infrastructure Engineer focused on automating deployments, building highly-available CI/CD pipelines, and designing secure on-premise environments.
            </p>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 mb-10 transition-colors duration-300">
              I am highly passionate about modernizing bare-metal and on-premise infrastructure. Currently, I'm actively expanding my automation toolkit by learning <strong className="text-indigo-600 dark:text-emerald-400">Terraform</strong>, <strong className="text-indigo-600 dark:text-emerald-400">Ansible</strong>, <strong className="text-indigo-600 dark:text-emerald-400">Python</strong>, and <strong className="text-indigo-600 dark:text-emerald-400">Go</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 px-7 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 dark:shadow-none">
                <Mail size={18} /> Let's Connect
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-white dark:border-slate-800 px-7 py-3.5 rounded-xl font-bold transition-all shadow-sm hover:shadow-md dark:shadow-none">
                <Github size={18} /> GitHub Profile
              </a>
            </div>
          </div>
          <div className="w-56 h-56 md:w-80 md:h-80 shrink-0 relative group">
            {/* Ambient glow behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-blue-200 dark:from-emerald-500 dark:to-cyan-500 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-all duration-500 dark:opacity-20 dark:group-hover:opacity-40"></div>
            <img 
              src="https://github.com/identicons/ing.png" 
              alt="Ing - DevOps Engineer" 
              className="relative w-full h-full object-cover rounded-[2rem] border-4 border-white dark:border-slate-800 dark:bg-slate-900 shadow-2xl shadow-indigo-200/50 dark:shadow-none transition-colors duration-300"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-slate-100 dark:border-slate-800/50 animate-fade-in transition-colors duration-300" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors">Technical Arsenal</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors">Tools and technologies I use to build reliable systems.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 p-8 rounded-2xl hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/40 dark:bg-slate-900/40 dark:border-slate-800/80 dark:hover:border-emerald-500/30 dark:hover:bg-slate-900/80 dark:hover:shadow-none transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 dark:bg-slate-800/50 dark:border-slate-700/50 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span key={i} className="bg-slate-50 hover:bg-white text-slate-700 border border-slate-200/60 hover:border-slate-300 dark:bg-slate-950 dark:text-slate-300 dark:border-slate-800 text-sm px-4 py-1.5 rounded-full font-medium transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-100 dark:border-slate-800/50 animate-fade-in transition-colors duration-300" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors">Featured Work</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors">Architectures and environments I've designed.</p>
            </div>
            <a href="https://github.com" className="hidden md:flex items-center gap-2 text-indigo-600 hover:text-indigo-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-bold transition-colors">
              View all on GitHub <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-8 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/60 dark:bg-slate-900/40 dark:border-slate-800/80 dark:hover:border-emerald-500/30 dark:hover:shadow-none transition-all duration-300 group flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-indigo-50 text-indigo-600 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-xl transition-colors">
                    <Terminal size={24} />
                  </div>
                  <ExternalLink size={20} className="text-slate-400 group-hover:text-indigo-600 dark:text-slate-500 dark:group-hover:text-white transition-colors cursor-pointer" />
                </div>
                
                <h3 className="text-xl text-slate-900 dark:text-white font-extrabold mb-3 group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed transition-colors">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto font-mono">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold text-indigo-600 bg-indigo-50/50 border border-indigo-100 dark:text-slate-300 dark:bg-slate-800/80 dark:border-transparent px-2.5 py-1 rounded-md transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

        {/* Minimal Footer */}
        <footer id="contact" className="bg-white dark:bg-[#09090b]/50 border-t border-slate-100 dark:border-slate-800/80 py-12 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 dark:text-slate-400 text-sm font-mono font-medium transition-colors">
              © {new Date().getFullYear()} Ing. Built with React.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;