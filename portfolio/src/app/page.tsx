'use client';

import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ArrowRight, 
  Code, 
  Palette, 
  Smartphone,
  Globe,
  Database,
  Zap,
  Phone
} from 'lucide-react';
import GitHubProjects from '@/components/GitHubProjects';
import { githubConfig } from '@/config/github';
import InteractiveBackground from '@/components/InteractiveBackground';
import CVDownload from '@/components/CVDownload';
import CVViewerEnhanced from '@/components/CVViewerEnhanced';

export default function Home() {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, Next.js, TypeScript' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Tailwind CSS, Responsive Design' },
    { name: 'Mobile Development', icon: Smartphone, description: 'React Native, Flutter' },
    { name: 'Backend Development', icon: Database, description: 'Node.js, Python, APIs' },
    { name: 'DevOps', icon: Zap, description: 'Docker, AWS, CI/CD' },
    { name: 'Web Technologies', icon: Globe, description: 'HTML, CSS, JavaScript, more' },
  ];

  // GitHub configuration
  const { username: githubUsername, maxRepos, excludeForks } = githubConfig;

  return (
    <div className="min-h-screen bg-white relative">
      <InteractiveBackground />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-black"
            >
              HILBERT
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#about" className="text-gray-700 hover:text-yellow-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-yellow-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-yellow-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-600 transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-black mb-6">
                I'm <span className="luxury-accent">Hilbert TUYISHIMIRE</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Full-stack developer passionate about creating elegant, user-centric digital experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CVViewerEnhanced 
                  cvUrl="/cv.pdf"
                  fileName="Hilbert-TUYISHIMIRE-CV.pdf"
                />
                <CVDownload 
                  cvUrl="/cv.pdf"
                  fileName="Hilbert-TUYISHIMIRE-CV.pdf"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50/90 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <h3 className="text-2xl font-bold text-black mb-4">Passionate Developer</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I'm a dedicated full-stack developer with a passion for creating beautiful, 
                  functional, and user-friendly applications. With expertise in modern web 
                  technologies, I bring ideas to life through clean code and innovative design.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 p-6 text-center hover:-translate-y-2">
                <div className="text-3xl font-bold luxury-accent mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 p-6 text-center hover:-translate-y-2">
                <div className="text-3xl font-bold luxury-accent mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 p-6 text-center hover:-translate-y-2">
                <div className="text-3xl font-bold luxury-accent mb-2">20+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 p-6 text-center hover:-translate-y-2">
                <div className="text-3xl font-bold luxury-accent mb-2">15+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/90 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 p-8 text-center group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{skill.name}</h3>
                <p className="text-gray-700 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50/90 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </motion.div>
          
          <GitHubProjects 
            username={githubUsername}
            maxRepos={maxRepos}
            excludeForks={excludeForks}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/95 backdrop-blur-sm text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 luxury-accent" />
                  <span>tuyishimirehilbert2@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 luxury-accent" />
                  <span>+250790100971</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex space-x-6 justify-center md:justify-start"
            >
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/95 backdrop-blur-sm text-white py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Hilbert TUYISHIMIRE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
