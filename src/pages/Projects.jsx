import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Search,
  Filter,
  ExternalLink,
  Github,
  Code2,
  Calendar,
  Users,
  ChevronLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Complete online shopping platform with payment processing, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Stripe'],
      category: 'fullstack',
      year: '2024',
      github: 'https://github.com',
      live: 'https://demo.com',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Collaborative task management with real-time updates, drag & drop, and team features.',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'MongoDB'],
      category: 'fullstack',
      year: '2023',
      github: 'https://github.com',
      live: 'https://demo.com',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format',
    },
    {
      id: 3,
      title: 'Real-time Dashboard',
      description:
        'Interactive analytics dashboard with live charts and data visualization.',
      technologies: ['React', 'Chart.js', 'Firebase', 'Tailwind'],
      category: 'frontend',
      year: '2023',
      github: 'https://github.com',
      live: 'https://demo.com',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    },
    {
      id: 4,
      title: 'REST API Backend',
      description:
        'Secure REST API with JWT authentication, rate limiting, and documentation.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      category: 'backend',
      year: '2023',
      github: 'https://github.com',
      live: 'https://demo.com',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description:
        'Responsive portfolio website with React Router and animations.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
      category: 'frontend',
      year: '2024',
      github: 'https://github.com',
      live: 'https://demo.com',
      image:
        'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&auto=format',
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description:
        'Responsive weather application with location detection and forecast.',
      technologies: ['React', 'API Integration', 'CSS', 'JavaScript'],
      category: 'frontend',
      year: '2023',
      github: 'https://github.com',
      live: 'https://demo.com',
      image:
        'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format',
    },
  ];
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.technologies.some(tech =>
        tech.toLowerCase().includes(search.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <Link
            to="/home"
            className="inline-flex items-center gap-3 text-slate-300 hover:text-cyan-400 hover:gap-4 transition-all duration-300 mb-8 bg-slate-950/50 backdrop-blur-xl px-6 py-3 rounded-3xl border border-slate-800/50 hover:border-cyan-500/50"
          >
            <ChevronLeft size={20} />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl shadow-2xl shadow-cyan-500/30">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl lg:text-5xl font-black"
            >
              <span className="text-white">&lt;</span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent ml-2">
                Projects
              </span>
              <span className="text-white"> /&gt;</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-slate-400 max-w-2xl"
          >
            Showcasing my work with modern technologies and best practices
          </motion.p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="flex items-center gap-4 flex-1">
              <div className="p-3 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-3xl shadow-2xl shadow-purple-500/30">
                <Filter className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilter(category.id)}
                    className={`px-6 py-4 rounded-3xl font-bold text-sm tracking-wide transition-all duration-300 backdrop-blur-sm shadow-xl ${
                      filter === category.id
                        ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-cyan-500/30 hover:shadow-cyan-500/50 border border-cyan-400/30'
                        : 'bg-slate-950/50 text-slate-300 hover:bg-slate-900/50 hover:text-white hover:shadow-cyan-500/20 border border-slate-800/50 hover:border-cyan-500/30'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="relative w-full lg:w-80">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500"
                size={20}
              />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-12 pr-6 py-4 bg-slate-950/50 backdrop-blur-xl rounded-3xl text-white border border-slate-800/50 focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/20 outline-none shadow-xl shadow-slate-900/20 transition-all duration-300 placeholder-slate-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                y: -15,
                scale: 1.02,
                boxShadow: '0 35px 70px rgba(34, 211, 238, 0.2)',
              }}
              className="group bg-slate-950/70 backdrop-blur-2xl rounded-4xl overflow-hidden border border-slate-800/50 shadow-2xl shadow-slate-900/30 hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 relative"
            >
              {/* Project Image */}
              <div className="h-56 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-600/10 relative overflow-hidden group-hover:from-cyan-500/20 group-hover:via-blue-500/15 group-hover:to-purple-600/20 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers className="w-20 h-20 text-cyan-400/50 group-hover:text-cyan-400/80 transition-all duration-500" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm p-3 rounded-2xl border border-slate-800/50">
                    <Calendar size={18} className="text-slate-500" />
                    <span className="text-lg font-bold text-slate-300">
                      {project.year}
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl text-xs font-bold text-purple-400 border border-purple-500/30">
                    {project.category.replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl text-sm font-medium text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-slate-900/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-slate-200 hover:gap-4 transition-all duration-300 group/link"
                  >
                    <div className="p-2 bg-slate-900/50 rounded-2xl border border-slate-800/50 group-hover/link:bg-slate-800/50 group-hover/link:border-slate-700/50">
                      <Github size={20} />
                    </div>
                    <span className="font-semibold">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 hover:gap-4 transition-all duration-300 group/link ml-auto"
                  >
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 group-hover/link:bg-cyan-500/30">
                      <ExternalLink size={20} />
                    </div>
                    <span className="font-bold">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            {
              icon: <Layers className="w-8 h-8" />,
              value: projects.length,
              label: 'Total Projects',
            },
            {
              icon: <Code2 className="w-8 h-8" />,
              value: '15+',
              label: 'Technologies',
            },
            {
              icon: <Calendar className="w-8 h-8" />,
              value: '3+',
              label: 'Years',
            },
            {
              icon: <Users className="w-8 h-8" />,
              value: '30+',
              label: 'Happy Clients',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-slate-950/70 backdrop-blur-2xl rounded-4xl p-10 text-center border border-slate-800/50 shadow-2xl shadow-slate-900/30 hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/3 to-purple-600/5 group-hover:from-cyan-500/15 group-hover:via-blue-500/10 group-hover:to-purple-600/15 transition-all duration-500" />
              <div className="relative z-10 inline-flex p-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl shadow-2xl shadow-cyan-500/30 mb-6 group-hover:scale-110 transition-all duration-300 mx-auto">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-slate-400 font-semibold text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
