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
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-6"
          >
            <ChevronLeft size={20} />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Showcasing my work with modern technologies and best practices
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Filter className="text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`px-4 py-2 rounded-lg transition ${
                      filter === category.id
                        ? 'bg-gradient-to-r from-primary to-purple-600 text-white'
                        : 'bg-card border border-border hover:border-primary/50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative w-full md:w-64">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-primary/20 to-purple-600/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers size={64} className="text-primary/30" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <div className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-card border border-border rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <Layers />,
              value: projects.length,
              label: 'Total Projects',
            },
            { icon: <Code2 />, value: '15+', label: 'Technologies' },
            { icon: <Calendar />, value: '3+', label: 'Years' },
            { icon: <Users />, value: '30+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="inline-flex p-3 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
