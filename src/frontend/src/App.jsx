import React, { useState, useEffect } from 'react';
import { Terminal, Server, Cloud, Container, Shield, Mail, Github, Linkedin, ExternalLink, ArrowRight, Code, GitBranch } from 'lucide-react';

function App() {
  // Typewriter effect state
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const typingWords = ['infrastructure.', 'CI/CD pipelines.', 'on-premise architectures.', 'automation workflows.', 'Kubernetes clusters.'];

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
    { title: 'OS & Languages', icon: <Code className="text-blue-400" size={24} />, items: ['Linux (Ubuntu)', 'Bash', 'Python (Learning)', 'Go (Learning)'] },
    { title: 'CI / CD', icon: <GitBranch className="text-pink-400" size={24} />, items: ['Azure DevOps', 'GitLab CI', 'ArgoCD'] },
    { title: 'Containerization', icon: <Container className="text-emerald-400" size={24} />, items: ['Docker', 'Kubernetes'] },
    { title: 'Infra as Code', icon: <Server className="text-purple-400" size={24} />, items: ['Terraform (Learning)', 'Ansible (Learning)'] },
    { title: 'Observability', icon: <Shield className="text-yellow-400" size={24} />, items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'] },
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
    <div className="min-h-screen bg-[#09090b] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-xl text-white flex items-center gap-2">
            <Terminal className="text-emerald-400" size={20} /> 
            ing<span className="text-emerald-400 animate-pulse">_</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          </div>
          <a href="#contact" className="bg-white hover:bg-slate-200 text-black px-4 py-2 rounded-md text-sm font-bold transition-colors">
            Hire Me
          </a>
        </div>
      </nav>
        
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Hero Section */}
        <section id="about" className="py-20 animate-fade-in flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-sm mb-8">
              <Code size={14} /> ./hello_world.sh
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Building scalable <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                {text}
              </span>
              <span className="text-emerald-400 animate-pulse ml-1">|</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-slate-400 mb-6">
              Hi, I'm <strong className="text-white">Ing</strong>. A DevOps & Infrastructure Engineer focused on automating deployments, building highly-available CI/CD pipelines, and designing secure on-premise environments.
            </p>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-slate-400 mb-10">
              I am highly passionate about modernizing bare-metal and on-premise infrastructure. Currently, I'm actively expanding my automation toolkit by learning <strong className="text-emerald-400">Terraform</strong>, <strong className="text-emerald-400">Ansible</strong>, <strong className="text-emerald-400">Python</strong>, and <strong className="text-emerald-400">Go</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-7 py-3.5 rounded-lg font-bold transition-all">
                <Mail size={18} /> Let's Connect
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 px-7 py-3.5 rounded-lg font-bold transition-all">
                <Github size={18} /> GitHub Profile
              </a>
            </div>
          </div>
          <div className="w-56 h-56 md:w-80 md:h-80 shrink-0 relative group">
            {/* Ambient glow behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src="https://github.com/identicons/ing.png" 
              alt="Ing - DevOps Engineer" 
              className="relative w-full h-full object-cover rounded-full border-2 border-slate-800 bg-slate-900 shadow-2xl"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-slate-800/50 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-slate-400 text-lg">Tools and technologies I use to build reliable systems.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl hover:bg-slate-900/80 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span key={i} className="bg-slate-950 text-slate-300 border border-slate-800 text-sm px-4 py-1.5 rounded-full font-medium shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-800/50 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
              <p className="text-slate-400 text-lg">Architectures and environments I've designed.</p>
            </div>
            <a href="https://github.com" className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
              View all on GitHub <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 hover:-translate-y-1 hover:border-emerald-500/30 transition-all duration-300 group flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                    <Terminal size={24} />
                  </div>
                  <ExternalLink size={20} className="text-slate-500 group-hover:text-white transition-colors cursor-pointer" />
                </div>
                
                <h3 className="text-xl text-white font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto font-mono">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded">
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
      <footer id="contact" className="border-t border-slate-800/80 bg-[#09090b] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm font-mono">
            © {new Date().getFullYear()} Ing. Built with React.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;