import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Code2,
  Zap,
  Sparkles,
  CheckCircle,
  Star,
  Target,
  Users,
  Clock,
  Award,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Server,
  GitBranch,
  Cloud,
  Shield,
  Rocket,
  User,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  FileText,
  MessageSquare,
  ExternalLink,
  Layers,
  Circle,
  Briefcase,
  Terminal,
  Box,
  Moon,
  Sun,
} from 'lucide-react';
import bgImg from '../../../assets/image.png';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Theme sync with Navbar - SIMPLE AND EFFECTIVE
  useEffect(() => {
    // Function to check and update theme
    const checkAndUpdateTheme = () => {
      const currentTheme = localStorage.getItem('theme');
      if (currentTheme) {
        const isDark = currentTheme === 'dark' || currentTheme === 'night';
        if (darkMode !== isDark) {
          setDarkMode(isDark);
        }
      }
    };

    // Initial check
    checkAndUpdateTheme();

    // Set up interval to check for theme changes
    const interval = setInterval(checkAndUpdateTheme, 300);

    // Also check when window gets focus (user switches back to tab)
    const handleFocus = () => {
      checkAndUpdateTheme();
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, [darkMode]);

  const handleCVDownload = () => {
    const cvUrl =
      'https://drive.google.com/uc?export=download&id=1QLs3uI9L2WjO4u1Tc2Jm_yVItrMGC0Q4';

    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('target', '_blank');
    link.download = 'Badhon_Sarker_FullStack_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Theme toggle function
  const toggleDarkMode = () => {
    // Get current theme from localStorage
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const themes = ['light', 'dark', 'night'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];

    // Update localStorage
    localStorage.setItem('theme', newTheme);

    // Update document class
    document.documentElement.classList.remove('light', 'dark', 'night');
    document.documentElement.classList.add(newTheme);

    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('themechange', { detail: newTheme }));

    // Update state
    setDarkMode(newTheme === 'dark' || newTheme === 'night');
  };

  // Dynamic theme colors and backgrounds
  const theme = {
    bgPrimary: darkMode
      ? 'from-slate-950 via-slate-900 to-slate-950'
      : 'from-gray-50 via-white to-gray-50',
    bgSecondary: darkMode
      ? 'from-slate-800/50 to-slate-900/50'
      : 'from-white/80 to-gray-100/80 backdrop-blur-xl',
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-slate-300' : 'text-gray-600',
    borderColor: darkMode ? 'border-slate-700/50' : 'border-gray-200/50',
    cardBg: darkMode
      ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50'
      : 'bg-gradient-to-br from-white/80 to-gray-50/80',
    gradientOverlay: darkMode
      ? 'from-slate-900 to-transparent'
      : 'from-gray-900/20 to-transparent',
    statsText: darkMode ? 'text-white' : 'text-gray-900',
    statsLabel: darkMode ? 'text-slate-400' : 'text-gray-500',
  };

  const stats = [
    {
      icon: <Briefcase />,
      value: '50+',
      label: 'Projects',
      gradient: darkMode
        ? 'from-cyan-400 via-blue-500 to-purple-600'
        : 'from-cyan-500 via-blue-600 to-indigo-600',
    },
    {
      icon: <Users />,
      value: '30+',
      label: 'Clients',
      gradient: darkMode
        ? 'from-green-400 via-emerald-500 to-teal-600'
        : 'from-emerald-500 via-teal-600 to-green-600',
    },
    {
      icon: <Clock />,
      value: '3+',
      label: 'Years',
      gradient: darkMode
        ? 'from-purple-400 via-pink-500 to-rose-600'
        : 'from-purple-500 via-pink-600 to-rose-500',
    },
    {
      icon: <Award />,
      value: '15+',
      label: 'Skills',
      gradient: darkMode
        ? 'from-orange-400 via-amber-500 to-yellow-600'
        : 'from-orange-500 via-amber-600 to-yellow-500',
    },
  ];

  const techStack = [
    {
      name: 'React',
      icon: <Code2 />,
      color: darkMode
        ? 'from-cyan-400 to-blue-600'
        : 'from-cyan-500 to-blue-700',
      delay: 0,
    },
    {
      name: 'Node.js',
      icon: <Server />,
      color: darkMode
        ? 'from-green-400 to-emerald-600'
        : 'from-emerald-500 to-green-600',
      delay: 0.1,
    },
    {
      name: 'MongoDB',
      icon: <Database />,
      color: darkMode
        ? 'from-green-500 to-teal-600'
        : 'from-teal-500 to-emerald-600',
      delay: 0.2,
    },
    {
      name: 'TypeScript',
      icon: <Terminal />,
      color: darkMode
        ? 'from-blue-400 to-indigo-600'
        : 'from-indigo-500 to-blue-600',
      delay: 0.3,
    },
    {
      name: 'Tailwind',
      icon: <Sparkles />,
      color: darkMode
        ? 'from-teal-400 to-cyan-600'
        : 'from-cyan-500 to-teal-600',
      delay: 0.4,
    },
    {
      name: 'Docker',
      icon: <Box />,
      color: darkMode ? 'from-blue-500 to-sky-600' : 'from-sky-500 to-blue-600',
      delay: 0.5,
    },
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Crafting pixel-perfect, responsive web experiences',
      features: ['React/Next.js', 'Vue.js', 'Progressive Web Apps'],
      gradient: darkMode
        ? 'from-cyan-500 via-blue-500 to-purple-600'
        : 'from-cyan-500 via-blue-600 to-indigo-600',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Solutions',
      description: 'Robust APIs and scalable server architectures',
      features: ['Node.js/Express', 'REST/GraphQL', 'Microservices'],
      gradient: darkMode
        ? 'from-green-400 via-emerald-500 to-teal-600'
        : 'from-emerald-500 via-teal-600 to-green-600',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Design',
      description: 'Optimized data structures and queries',
      features: ['MongoDB', 'PostgreSQL', 'Redis'],
      gradient: darkMode
        ? 'from-purple-500 via-pink-500 to-rose-600'
        : 'from-purple-500 via-pink-600 to-rose-500',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'Seamless deployment and infrastructure',
      features: ['AWS/GCP', 'Docker/K8s', 'CI/CD'],
      gradient: darkMode
        ? 'from-orange-400 via-amber-500 to-yellow-600'
        : 'from-orange-500 via-amber-600 to-yellow-500',
    },
  ];
  const projects = [
    {
      title: 'Ticket Bari',
      description:
        'Online ticket booking platform with user authentication, seat selection, and secure payment system',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Firebase Auth',
        'Stripe',
      ],
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Authentication System',
      description:
        'Complete authentication solution with email/password login, Google sign-in, profile update, and password reset',
      technologies: ['React', 'Firebase Authentication', 'Context API', 'JWT'],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'Realtime messaging app with Socket.io, online status, and instant message delivery',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Admin Dashboard',
      description:
        'Role-based admin panel with user management, analytics, and protected routes',
      technologies: ['React', 'Firebase', 'Node.js', 'MongoDB', 'Chart.js'],
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      title: 'REST API Server',
      description:
        'Scalable REST API with MongoDB, Firebase Admin SDK, and JWT authentication',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Firebase Admin', 'JWT'],
      gradient: 'from-orange-500 to-amber-600',
    },
    {
      title: 'TypeScript Web Application',
      description:
        'Modern TypeScript-based frontend project deployed to Netlify',
      technologies: ['TypeScript', 'React', 'Vite', 'Netlify'],
      gradient: 'from-sky-500 to-blue-700',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Deep dive into your vision',
      icon: <Target />,
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Blueprint for success',
      icon: <FileText />,
    },
    {
      step: '03',
      title: 'Development',
      description: 'Bringing ideas to life',
      icon: <Code2 />,
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Deploy and scale',
      icon: <Rocket />,
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${theme.bgPrimary} ${theme.textPrimary} overflow-hidden transition-all duration-500`}
    >
      {/* Theme Toggle Button - Remove this since Navbar already has it */}
      {/* <motion.button
        className={`fixed top-6 right-6 z-500 p-3 rounded-xl backdrop-blur-xl border ${
          darkMode
            ? 'bg-slate-900/80 border-slate-700 hover:bg-slate-800/90'
            : 'bg-white/80 border-gray-200/50 hover:bg-gray-100/90'
        } shadow-2xl transition-all duration-300`}
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-slate-600" />
        )}
      </motion.button> */}

      {/* Animated Background - Dynamic based on theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 ${
            darkMode ? 'bg-cyan-500/20' : 'bg-cyan-400/10'
          } rounded-full blur-3xl animate-pulse`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-96 h-96 ${
            darkMode ? 'bg-purple-500/20' : 'bg-purple-400/10'
          } rounded-full blur-3xl animate-pulse delay-700`}
        />
        <div
          className={`absolute top-1/2 left-1/2 w-96 h-96 ${
            darkMode ? 'bg-pink-500/10' : 'bg-pink-400/5'
          } rounded-full blur-3xl animate-pulse delay-1000`}
        />
      </div>

      {/* Mouse Follow Effect */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 pointer-events-none z-50 mix-blend-screen border-cyan-400/50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-16 pt-20">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ opacity, scale }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 backdrop-blur-sm ${
                  darkMode
                    ? 'bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20'
                    : 'bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 border border-cyan-400/30'
                }`}
              >
                <Sparkles
                  className={`w-5 h-5 ${
                    darkMode ? 'text-cyan-400' : 'text-cyan-500'
                  } animate-pulse`}
                />
                <span
                  className={`text-sm font-semibold ${
                    darkMode
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'
                  }`}
                >
                  Full-Stack Developer & Creative Coder
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              >
                <span className="block">Building</span>
                <span
                  className={`block animate-gradient-x ${
                    darkMode
                      ? 'bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'
                      : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent'
                  }`}
                >
                  Digital Magic
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-xl md:text-2xl mb-10 leading-relaxed max-w-xl ${theme.textSecondary}`}
              >
                I transform complex ideas into elegant, scalable solutions using
                cutting-edge technologies and modern design principles.
              </motion.p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: darkMode
                      ? '0 0 30px rgba(34, 211, 238, 0.4)'
                      : '0 0 30px rgba(34, 211, 238, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCVDownload}
                  className={`group relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all ${
                    darkMode
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 shadow-lg'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Download className="group-hover:rotate-12 transition-transform" />
                    Download CV
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm ${
                    darkMode
                      ? 'border-2 border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-500/70 text-cyan-300 hover:text-cyan-200'
                      : 'border-2 border-cyan-400/50 hover:bg-cyan-500/10 hover:border-cyan-500/70 text-cyan-600 hover:text-cyan-700'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    Let's Talk <MessageSquare size={20} />
                  </span>
                </motion.button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-left">
                    <div
                      className={`text-3xl font-black ${theme.statsText} mb-1`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-sm uppercase tracking-wider ${theme.statsLabel}`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Refined 3D Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="relative w-[450px] h-[450px]">
                {/* Rotating Rings */}
                <div
                  className={`absolute inset-0 border-2 border-dashed rounded-full animate-spin-slow ${
                    darkMode ? 'border-cyan-500/20' : 'border-cyan-400/30'
                  }`}
                />
                <div
                  className={`absolute inset-10 border-2 border-dashed rounded-full animate-spin-reverse ${
                    darkMode ? 'border-purple-500/20' : 'border-purple-400/30'
                  }`}
                />

                {/* Image Container */}
                <div
                  className={`absolute inset-20 rounded-full overflow-hidden border-8 shadow-2xl bg-gradient-to-br ${
                    darkMode
                      ? 'border-slate-900 from-cyan-500/10 to-purple-600/10'
                      : 'border-gray-100 from-cyan-400/10 to-blue-500/10'
                  }`}
                >
                  <img
                    src={bgImg}
                    alt="Badhon Sarker"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-110"
                  />
                </div>

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`absolute top-10 -right-5 p-4 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md ${
                    darkMode
                      ? 'bg-slate-900/90 border border-slate-700'
                      : 'bg-white/90 border border-gray-200'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      darkMode
                        ? 'bg-blue-500/20 text-cyan-400'
                        : 'bg-blue-400/20 text-blue-500'
                    }`}
                  >
                    <Code2 size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Frontend</div>
                    <div className={`text-xs ${theme.textSecondary}`}>
                      React Expert
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  className={`absolute bottom-20 -left-10 p-4 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md ${
                    darkMode
                      ? 'bg-slate-900/90 border border-slate-700'
                      : 'bg-white/90 border border-gray-200'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      darkMode
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-green-400/20 text-green-500'
                    }`}
                  >
                    <Server size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Backend</div>
                    <div className={`text-xs ${theme.textSecondary}`}>
                      Node.js Master
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Update Style Block */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 10s linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>

      {/* Services Section */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 backdrop-blur-sm ${
                darkMode
                  ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20'
                  : 'bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/30'
              }`}
            >
              <Zap
                className={`w-5 h-5 ${
                  darkMode ? 'text-cyan-400' : 'text-cyan-500'
                }`}
              />
              <span className="text-sm font-semibold">What I Offer</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span
                className={`bg-gradient-to-r ${
                  darkMode
                    ? 'from-cyan-400 via-purple-400 to-pink-400'
                    : 'from-cyan-500 via-blue-600 to-indigo-500'
                } bg-clip-text text-transparent`}
              >
                Services & Expertise
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${theme.textSecondary}`}>
              End-to-end solutions tailored to transform your digital presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative rounded-3xl p-8 hover:border-cyan-500/50 transition-all overflow-hidden backdrop-blur-xl ${theme.cardBg} ${theme.borderColor}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>

                <h3 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>
                  {service.title}
                </h3>
                <p className={`mb-6 ${theme.textSecondary}`}>
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 ${
                          darkMode ? 'text-cyan-400' : 'text-cyan-500'
                        }`}
                      />
                      <span className={theme.textSecondary}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`absolute top-4 right-4 w-20 h-20 rounded-full blur-2xl group-hover:scale-150 transition-transform ${
                    darkMode
                      ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20'
                      : 'bg-gradient-to-br from-cyan-400/20 to-blue-400/20'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 backdrop-blur-sm ${
                  darkMode
                    ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20'
                    : 'bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/30'
                }`}
              >
                <Layers
                  className={`w-5 h-5 ${
                    darkMode ? 'text-purple-400' : 'text-purple-500'
                  }`}
                />
                <span className="text-sm font-semibold">Portfolio</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black">
                <span
                  className={`bg-gradient-to-r ${
                    darkMode
                      ? 'from-purple-400 via-pink-400 to-rose-400'
                      : 'from-purple-500 via-pink-600 to-rose-500'
                  } bg-clip-text text-transparent`}
                >
                  Featured Work
                </span>
              </h2>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ gap: 12 }}
              className={`hidden md:flex items-center gap-3 font-semibold transition-colors ${
                darkMode
                  ? 'text-cyan-400 hover:text-cyan-300'
                  : 'text-cyan-600 hover:text-cyan-700'
              }`}
            >
              View All Projects <ArrowRight />
            </motion.button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`group relative rounded-3xl overflow-hidden transition-all ${theme.cardBg} ${theme.borderColor} hover:border-purple-500/50`}
              >
                <div
                  className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${theme.gradientOverlay}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers
                      className={`w-32 h-32 text-white/20 group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                    />
                  </div>
                </div>

                <div className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-3 ${theme.textPrimary}`}
                  >
                    {project.title}
                  </h3>
                  <p className={`mb-6 ${theme.textSecondary}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          darkMode
                            ? 'bg-slate-800/50 border border-slate-700/50 text-slate-300'
                            : 'bg-gray-100 border border-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    className={`flex items-center gap-2 font-semibold group-hover:gap-4 transition-all ${
                      darkMode
                        ? 'text-purple-400 hover:text-purple-300'
                        : 'text-purple-600 hover:text-purple-700'
                    }`}
                  >
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 backdrop-blur-sm ${
                darkMode
                  ? 'bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20'
                  : 'bg-gradient-to-r from-orange-400/10 to-yellow-400/10 border border-orange-400/30'
              }`}
            >
              <Target
                className={`w-5 h-5 ${
                  darkMode ? 'text-orange-400' : 'text-orange-500'
                }`}
              />
              <span className="text-sm font-semibold">Workflow</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span
                className={`bg-gradient-to-r ${
                  darkMode
                    ? 'from-orange-400 via-amber-400 to-yellow-400'
                    : 'from-orange-500 via-amber-600 to-yellow-500'
                } bg-clip-text text-transparent`}
              >
                My Process
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${theme.textSecondary}`}>
              A proven methodology for delivering exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative mb-8">
                  <div
                    className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center shadow-2xl ${
                      darkMode
                        ? 'bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500'
                        : 'bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-500 border border-orange-200/50'
                    }`}
                  >
                    {React.cloneElement(item.icon, {
                      className: 'w-10 h-10 text-white',
                    })}
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${
                      darkMode
                        ? 'bg-slate-900 border-4 border-orange-500 text-orange-400'
                        : 'bg-white border-4 border-orange-400 text-orange-500 shadow-lg'
                    }`}
                  >
                    {item.step}
                  </div>
                </div>

                <h3 className={`text-2xl font-bold mb-3 ${theme.textPrimary}`}>
                  {item.title}
                </h3>
                <p className={theme.textSecondary}>{item.description}</p>

                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`relative rounded-[3rem] p-12 md:p-12 text-center overflow-hidden backdrop-blur-xl ${
              darkMode
                ? 'bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-600'
                : 'bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600'
            }`}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 mx-auto mb-8"
              >
                <Rocket className="w-full h-full text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                Let's turn your vision into reality with cutting-edge technology
                and innovative design
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(255, 255, 255, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCVDownload}
                  className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:bg-slate-100 transition-all"
                >
                  <span className="flex items-center gap-3">
                    <Download />
                    Download CV
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  <span className="flex items-center gap-3">
                    Start a Project
                    <ArrowRight />
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Connect Section */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span
                className={`bg-gradient-to-r ${
                  darkMode
                    ? 'from-cyan-400 via-blue-400 to-purple-400'
                    : 'from-cyan-500 via-blue-600 to-indigo-500'
                } bg-clip-text text-transparent`}
              >
                Let's Connect
              </span>
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${theme.textSecondary}`}>
              Follow my journey and stay updated with my latest work
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: <Github />,
                name: 'GitHub',
                link: 'https://github.com/badhon18478',
                color: darkMode
                  ? 'from-slate-600 to-slate-800'
                  : 'from-gray-700 to-gray-800',
              },
              {
                icon: <Linkedin />,
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/badhon-sarker1844/',
                color: darkMode
                  ? 'from-blue-600 to-blue-800'
                  : 'from-blue-600 to-blue-700',
              },
              {
                icon: <Twitter />,
                name: 'Twitter',
                link: '#',
                color: darkMode
                  ? 'from-sky-500 to-sky-700'
                  : 'from-sky-500 to-sky-600',
              },
              {
                icon: <Facebook />,
                name: 'Facebook',
                link: '#',
                color: darkMode
                  ? 'from-blue-500 to-blue-700'
                  : 'from-blue-500 to-blue-600',
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`group relative rounded-2xl p-6 min-w-[160px] text-center overflow-hidden transition-all ${social.color}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    {React.cloneElement(social.icon, {
                      className: 'w-8 h-8 text-white',
                    })}
                  </div>
                  <div className="font-bold text-lg text-white">
                    {social.name}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
