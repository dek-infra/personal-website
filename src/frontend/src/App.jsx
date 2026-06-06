import React, { useState, useEffect } from 'react';
import { Terminal, Server, Cloud, Container, GitBranch, Shield, Mail, Github, Linkedin, ExternalLink, Command, Cpu, ArrowRight, Download } from 'lucide-react';

function App() {
  const [typedCommand, setTypedCommand] = useState('');
  const [isBooted, setIsBooted] = useState(false);
  const commandToType = "./deploy_portfolio.sh --env=production";

  // Faster dynamic typing effect so HR doesn't wait too long
  useEffect(() => {
    if (typedCommand.length < commandToType.length) {
      const timeout = setTimeout(() => {
        setTypedCommand(commandToType.slice(0, typedCommand.length + 1));
      }, 40); // Faster typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setIsBooted(true), 200);
      return () => clearTimeout(timeout);
    }
  }, [typedCommand]);

  const skillCategories = [
    { title: 'Core Infrastructure', icon: <Server className="text-blue-400" size={22} />, items: ['Linux (RHEL/Debian)', 'Bash Scripting', 'Networking', 'Git'] },
    { title: 'Containerization', icon: <Container className="text-emerald-400" size={22} />, items: ['Kubernetes', 'Docker', 'Helm', 'ArgoCD'] },
    { title: 'Infra as Code', icon: <Cloud className="text-purple-400" size={22} />, items: ['Terraform', 'Ansible', 'Packer', 'AWS'] },
    { title: 'Observability', icon: <Shield className="text-yellow-400" size={22} />, items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'] },
  ];

  const projects = [
    {
      cmd: 'kubectl apply -k ./gitops-k8s-lab',
      title: 'GitOps Kubernetes Lab',
      desc: 'Declarative local Kubernetes environment using ArgoCD and GitOps workflows.',
      tags: ['Kubernetes', 'ArgoCD', 'GitOps']
    },
    {
      cmd: 'helm install kube-prometheus-stack',
      title: 'Observability Stack',
      desc: 'Centralized monitoring & logging to track metrics across distributed systems.',
      tags: ['Prometheus', 'Grafana', 'ELK']
    },
    {
      cmd: 'docker-compose up -d prod-stack',
      title: 'Production Docker Stack',
      desc: 'Optimized multi-stage Docker setups designed for high availability and security.',
      tags: ['Docker', 'Nginx', 'CI/CD']
    },
  ];

  const Prompt = ({ path = "~" }) => (
    <div className="flex items-center gap-2 text-sm md:text-base font-bold mb-2 font-mono">
      <span className="text-emerald-400">ing@devops-node</span>
      <span className="text-slate-400">:</span>
      <span className="text-blue-400">{path}</span>
      <span className="text-slate-400">$</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans p-4 md:p-8 selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Main App Window (Dark IDE Aesthetic) */}
      <div className="max-w-5xl mx-auto bg-[#0f111a] rounded-xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col min-h-[85vh]">
        
        {/* Terminal Header */}
        <div className="bg-[#1a1a1a] flex items-center px-4 py-3 border-b border-slate-800 select-none">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors cursor-pointer"></div>
          </div>
          <div className="mx-auto text-xs text-slate-500 font-mono font-bold flex items-center gap-2">
            <Terminal size={14} /> ing@devops-node: ~
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 flex-grow flex flex-col overflow-y-auto custom-scrollbar">
          
          {/* Boot Sequence / Hero */}
          <div className="mb-10">
            <Prompt />
            <div className="text-emerald-400 mb-6 flex items-center font-mono">
              <span>{typedCommand}</span>
              {!isBooted && <span className="w-2.5 h-5 bg-emerald-400 ml-1 animate-pulse"></span>}
            </div>

            {isBooted && (
              <div className="animate-fade-in space-y-4 text-slate-300">
                <div className="bg-slate-900/50 border border-slate-800 p-8 md:p-10 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 to-cyan-500"></div>
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white tracking-tight">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Ing</span>
                  </h1>
                  <h2 className="text-xl md:text-2xl text-slate-400 mb-6 font-medium">
                    DevOps & Infrastructure Engineer
                  </h2>
                  <p className="max-w-2xl text-lg leading-relaxed text-slate-400 mb-8">
                    I bridge the gap between development and operations. Passionate about automating infrastructure, building highly-available CI/CD pipelines, and designing scalable cloud-native environments.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#contact" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-lg font-bold transition-all transform hover:-translate-y-0.5">
                      <Mail size={18} /> Contact Me
                    </a>
                    <a href="#projects" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-3 rounded-lg font-bold transition-all">
                      View Projects <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Skills Section (HR Friendly Grid) */}
          {isBooted && (
            <div className="mb-10 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              <Prompt path="~/skills" />
              <div className="text-emerald-400 mb-6 font-mono">./show_skills.sh</div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-slate-600 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      {category.icon}
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <span key={i} className="bg-slate-800 text-slate-300 border border-slate-700 text-sm px-3 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section (Modern Cards) */}
          {isBooted && (
            <div id="projects" className="mb-10 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
              <Prompt path="~/projects" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                {projects.map((project, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl hover:border-emerald-500/50 transition-all group overflow-hidden flex flex-col">
                    <div className="bg-[#1a1a1a] px-4 py-2.5 border-b border-slate-800 text-xs text-slate-400 flex justify-between items-center font-mono">
                      <span className="text-emerald-500/80">{project.cmd}</span>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl text-white font-bold mb-3 flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                        {project.title} <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                      </h3>
                      <p className="text-slate-400 mb-6 flex-grow">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blinking Cursor at the end */}
          {isBooted && (
            <div className="mt-auto pt-4 flex items-center">
              <Prompt path="~" />
              <span className="w-2.5 h-5 bg-emerald-400 ml-2 animate-pulse mb-1"></span>
            </div>
          )}
        </div>

        {/* IDE-style Status Bar / Footer */}
        <div className="bg-emerald-500 text-slate-950 text-xs md:text-sm font-bold flex flex-col sm:flex-row justify-between items-center px-4 py-2 shrink-0 font-mono">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Command size={14} /> NORMAL</span>
            <span>|</span>
            <span className="flex items-center gap-1"><Cpu size={14} /> STATUS: ONLINE</span>
          </div>
          <div id="contact" className="flex gap-6 mt-2 sm:mt-0 items-center">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1"><Github size={16} /> GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1"><Linkedin size={16} /> LinkedIn</a>
            <a href="mailto:contact@example.com" className="hover:text-white transition-colors flex items-center gap-1"><Mail size={16} /> Email</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;