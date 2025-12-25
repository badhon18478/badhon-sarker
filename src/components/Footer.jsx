import {
  Briefcase,
  Code2,
  Github,
  Home,
  Layers,
  Linkedin,
  Mail,
  MessageSquare,
  Twitter,
  User,
} from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

const routes = [
  { id: 'home', name: 'Home', icon: Home },
  { id: 'about', name: 'About', icon: User },
  { id: 'skills', name: 'Skills', icon: Code2 },
  { id: 'projects', name: 'Projects', icon: Layers },
  { id: 'experience', name: 'Experience', icon: Briefcase },
  { id: 'contact', name: 'Contact', icon: MessageSquare },
];
export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 md:px-8 lg:px-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Badhon Sarker
            </div>
            <p className="text-slate-400">
              Full-Stack Developer & Creative Coder
            </p>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.div>
            <span>and React</span>
          </div>

          <div className="text-slate-400 text-sm">
            © 2024 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
