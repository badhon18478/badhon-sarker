import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle,
  MapPin,
  Trophy,
  Rocket,
  TrendingUp,
  Star,
  Code,
  Award,
  Building2,
  Users,
  BarChart3,
  Flame,
  Target,
  Crown,
} from 'lucide-react';
import { Link } from 'react-router';

const ExperienceSection = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 'dark';
      const isDark = theme === 'dark' || theme === 'night';
      setDarkMode(isDark);
    };

    checkTheme();
    const interval = setInterval(checkTheme, 300);
    window.addEventListener('focus', checkTheme);
    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', checkTheme);
    };
  }, []);

  const experiences = [
    {
      company: 'ZapShift Technologies',
      role: 'Full Stack Developer',
      duration: 'Jan 2024 - Present',
      location: 'Remote',
      type: 'Current',
      description:
        'Leading full-stack development and architecting enterprise solutions',
      achievements: [
        {
          text: 'Built delivery platform serving 50K+ daily users',
          icon: Users,
          color: 'cyan',
        },
        {
          text: 'Reduced load time by 67% with Next.js optimization',
          icon: Zap,
          color: 'yellow',
        },
        {
          text: 'Integrated Firebase + Stripe (99.9% uptime)',
          icon: Award,
          color: 'green',
        },
        {
          text: 'Led 5-dev team on mobile-first redesign',
          icon: BarChart3,
          color: 'purple',
        },
      ],
      technologies: [
        'Next.js',
        'React',
        'Node.js',
        'Firebase',
        'Stripe',
        'TypeScript',
        'MongoDB',
      ],
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
      lightGradient: 'from-cyan-500 via-blue-600 to-indigo-600',
      icon: Rocket,
      bgPattern: 'dots',
      stats: [
        { label: 'Users', value: '50K+', icon: Users },
        { label: 'Speed', value: '+67%', icon: Zap },
        { label: 'Uptime', value: '99.9%', icon: Target },
      ],
    },
    {
      company: 'PixelCraft Studio',
      role: 'Frontend Engineer',
      duration: 'Jun 2023 - Dec 2024',
      location: 'Dhaka, BD',
      type: 'Past',
      description: 'Specialized in creating high-performance UI/UX solutions',
      achievements: [
        {
          text: 'Designed 20+ responsive dashboards (mobile-first)',
          icon: Code,
          color: 'purple',
        },
        {
          text: 'Optimized animations to 60fps performance',
          icon: TrendingUp,
          color: 'pink',
        },
        {
          text: 'Migrated React to TypeScript (zero bugs)',
          icon: CheckCircle,
          color: 'green',
        },
        {
          text: 'Created design system for 5 products',
          icon: Award,
          color: 'orange',
        },
      ],
      technologies: [
        'React',
        'TypeScript',
        'Framer Motion',
        'Tailwind',
        'Figma',
        'Next.js',
      ],
      gradient: 'from-purple-400 via-violet-500 to-fuchsia-600',
      lightGradient: 'from-purple-500 via-violet-600 to-fuchsia-500',
      icon: TrendingUp,
      bgPattern: 'grid',
      stats: [
        { label: 'Projects', value: '20+', icon: Briefcase },
        { label: 'FPS', value: '60', icon: TrendingUp },
        { label: 'Products', value: '5', icon: Award },
      ],
    },
    {
      company: 'CodeFusion Labs',
      role: 'Junior Developer',
      duration: 'Mar 2023 - May 2024',
      location: 'Dhaka, BD',
      type: 'Past',
      description:
        'Built scalable web applications and mentored junior developers',
      achievements: [
        {
          text: 'Developed 15+ client websites (WordPress → React)',
          icon: Code,
          color: 'emerald',
        },
        {
          text: 'Implemented REST APIs with Node.js + MongoDB',
          icon: Star,
          color: 'teal',
        },
        {
          text: 'Reduced bounce rate by 40% with UX improvements',
          icon: Target,
          color: 'cyan',
        },
        {
          text: 'Mentored 3 interns on React best practices',
          icon: Users,
          color: 'blue',
        },
      ],
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Tailwind',
        'Express',
        'REST API',
      ],
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      lightGradient: 'from-emerald-500 via-teal-600 to-cyan-500',
      icon: Trophy,
      bgPattern: 'lines',
      stats: [
        { label: 'Sites', value: '15+', icon: Building2 },
        { label: 'Bounce', value: '-40%', icon: TrendingUp },
        { label: 'Mentored', value: '3', icon: Users },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="experience"
      className={`relative py-24 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-slate-950' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      {/* Ultra Premium Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main Gradient Orbs */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl ${
            darkMode
              ? 'bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/10'
              : 'bg-gradient-to-br from-cyan-300/40 via-blue-300/30 to-purple-300/20'
          }`}
        />
        <motion.div
          animate={{
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className={`absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-3xl ${
            darkMode
              ? 'bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-orange-500/10'
              : 'bg-gradient-to-br from-purple-300/40 via-pink-300/30 to-orange-300/20'
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
            darkMode
              ? 'bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10'
              : 'bg-gradient-to-br from-indigo-300/30 via-purple-300/25 to-pink-300/20'
          }`}
        />

        {/* Animated Grid Pattern */}
        <div
          className={`absolute inset-0 ${
            darkMode ? 'opacity-[0.02]' : 'opacity-[0.03]'
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${
              darkMode ? 'rgb(148 163 184)' : 'rgb(100 116 139)'
            } 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-20 md:mb-28"
        >
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full mb-8 md:mb-12 backdrop-blur-2xl shadow-2xl border-2 transition-all duration-300 ${
              darkMode
                ? 'bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 border-cyan-500/30 hover:border-cyan-400/50'
                : 'bg-white/90 border-blue-200 hover:border-blue-300 shadow-blue-100/50'
            }`}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles
                className={`w-5 md:w-6 h-5 md:h-6 ${
                  darkMode ? 'text-cyan-400' : 'text-cyan-600'
                }`}
              />
            </motion.div>
            <span
              className={`text-base md:text-lg font-black bg-gradient-to-r ${
                darkMode
                  ? 'from-cyan-400 via-blue-500 to-purple-600'
                  : 'from-cyan-600 via-blue-700 to-indigo-700'
              } bg-clip-text text-transparent`}
            >
              Professional Journey
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap
                className={`w-5 md:w-6 h-5 md:h-6 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}
              />
            </motion.div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6 md:mb-8"
          >
            <motion.span
              className={`block bg-gradient-to-r ${
                darkMode
                  ? 'from-cyan-400 via-blue-500 to-purple-500'
                  : 'from-cyan-600 via-blue-700 to-purple-700'
              } bg-clip-text text-transparent`}
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Battle Tested
            </motion.span>
            <motion.span
              className={`block bg-gradient-to-r ${
                darkMode
                  ? 'from-emerald-400 via-teal-500 to-cyan-500'
                  : 'from-emerald-600 via-teal-700 to-cyan-700'
              } bg-clip-text text-transparent`}
              animate={{ backgroundPosition: ['100%', '0%', '100%'] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              Experience
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4 ${
              darkMode ? 'text-slate-300' : 'text-gray-600'
            }`}
          >
            Transforming complex ideas into{' '}
            <span
              className={`font-bold ${
                darkMode ? 'text-cyan-400' : 'text-cyan-600'
              }`}
            >
              scalable
            </span>
            {', '}
            <span
              className={`font-bold ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`}
            >
              production-ready
            </span>{' '}
            applications through hands-on experience and cutting-edge
            technologies.
          </motion.p>
        </motion.div>

        {/* Premium Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-1/2 -translate-x-1/2 w-1 top-0 bottom-0 hidden lg:block overflow-hidden"
          >
            <div
              className={`w-full h-full ${
                darkMode
                  ? 'bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500'
                  : 'bg-gradient-to-b from-cyan-500 via-purple-600 to-pink-600'
              } opacity-30 relative`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent"
                animate={{ y: ['0%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isEven = index % 2 === 0;
              const gradient = darkMode ? exp.gradient : exp.lightGradient;
              const isHovered = hoveredCard === index;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-8 lg:gap-20`}
                >
                  {/* Premium Timeline Node */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 180,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                    }}
                    className={`relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-3xl bg-gradient-to-br ${gradient} shadow-2xl flex items-center justify-center z-30 lg:absolute lg:left-1/2 lg:-translate-x-1/2 border-4 ${
                      darkMode ? 'border-slate-900' : 'border-white'
                    } group cursor-pointer`}
                  >
                    <IconComponent className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white drop-shadow-2xl group-hover:scale-110 transition-transform" />

                    {exp.type === 'Current' && (
                      <>
                        <motion.div
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.8, 0, 0.8],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-3xl bg-green-500 opacity-50"
                        />
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center"
                        >
                          <Flame className="w-4 h-4 text-white" />
                        </motion.div>
                      </>
                    )}

                    {/* Floating Sparkles */}
                    <motion.div
                      animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 180, 360],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-4 -left-4"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          darkMode ? 'text-yellow-400' : 'text-yellow-500'
                        }`}
                        fill="currentColor"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Premium Experience Card */}
                  <motion.div
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{
                      y: -15,
                      scale: 1.02,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`relative ${
                      darkMode
                        ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90'
                        : 'bg-gradient-to-br from-white to-gray-50/80'
                    } backdrop-blur-2xl border-2 ${
                      darkMode ? 'border-slate-700/60' : 'border-gray-200'
                    } flex-1 w-full max-w-2xl rounded-3xl md:rounded-[2rem] p-6 md:p-10 lg:p-12 shadow-2xl overflow-hidden group`}
                  >
                    {/* Animated Mesh Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-3xl transition-opacity duration-700`}
                      animate={{
                        opacity: isHovered ? 0.08 : 0,
                        scale: isHovered ? 1.2 : 1,
                      }}
                    />

                    {/* Background Pattern */}
                    <div
                      className={`absolute inset-0 opacity-[0.03] ${
                        exp.bgPattern === 'dots'
                          ? 'bg-[radial-gradient(circle_at_1px_1px,_currentColor_1px,_transparent_0)] bg-[length:20px_20px]'
                          : exp.bgPattern === 'grid'
                          ? 'bg-[linear-gradient(to_right,_currentColor_1px,_transparent_1px),_linear-gradient(to_bottom,_currentColor_1px,_transparent_1px)] bg-[length:20px_20px]'
                          : 'bg-[repeating-linear-gradient(45deg,_currentColor,_currentColor_1px,_transparent_1px,_transparent_10px)]'
                      } ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    />

                    <div className="relative z-10 space-y-6 md:space-y-8">
                      {/* Header with Stats */}
                      <div className="space-y-6">
                        {/* Company Badge & Status */}
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="flex-1 min-w-0">
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              className="flex items-center gap-3 mb-3"
                            >
                              <Building2
                                className={`w-5 h-5 ${
                                  darkMode ? 'text-slate-400' : 'text-gray-500'
                                }`}
                              />
                              <span
                                className={`text-sm md:text-base font-bold ${
                                  darkMode ? 'text-slate-400' : 'text-gray-500'
                                }`}
                              >
                                {exp.location}
                              </span>
                            </motion.div>

                            <motion.h3
                              className={`text-2xl md:text-3xl lg:text-4xl font-black mb-3 ${
                                darkMode ? 'text-white' : 'text-gray-900'
                              } group-hover:bg-gradient-to-r group-hover:${gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              {exp.role}
                            </motion.h3>

                            <motion.p
                              className={`text-lg md:text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              {exp.company}
                            </motion.p>

                            <motion.p
                              className={`text-sm md:text-base ${
                                darkMode ? 'text-slate-400' : 'text-gray-600'
                              } italic`}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              {exp.description}
                            </motion.p>
                          </div>

                          {exp.type === 'Current' && (
                            <motion.div
                              animate={{
                                scale: [1, 1.05, 1],
                                rotate: [-2, 2, -2],
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="relative"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur-md opacity-60" />
                              <div className="relative px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-black rounded-xl shadow-lg flex items-center gap-2 border-2 border-white/30">
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1, repeat: Infinity }}
                                >
                                  <Flame className="w-4 h-4" />
                                </motion.div>
                                ACTIVE NOW
                              </div>
                            </motion.div>
                          )}
                        </div>

                        {/* Duration & Stats Row */}
                        <div className="flex flex-wrap items-center gap-3">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl ${
                              darkMode ? 'bg-slate-800/80' : 'bg-white/80'
                            } backdrop-blur-sm border ${
                              darkMode ? 'border-slate-700' : 'border-gray-200'
                            } shadow-lg`}
                          >
                            <Calendar
                              className={`w-4 h-4 ${
                                darkMode ? 'text-cyan-400' : 'text-cyan-600'
                              }`}
                            />
                            <span
                              className={`text-sm font-bold ${
                                darkMode ? 'text-slate-300' : 'text-gray-700'
                              }`}
                            >
                              {exp.duration}
                            </span>
                          </motion.div>

                          {exp.stats.map((stat, idx) => (
                            <motion.div
                              key={stat.label}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 + idx * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className={`flex items-center gap-2 px-3 py-2 rounded-xl ${
                                darkMode ? 'bg-slate-800/60' : 'bg-gray-100/80'
                              } backdrop-blur-sm border ${
                                darkMode
                                  ? 'border-slate-700/50'
                                  : 'border-gray-200'
                              }`}
                            >
                              <stat.icon
                                className={`w-4 h-4 ${
                                  darkMode
                                    ? 'text-purple-400'
                                    : 'text-purple-600'
                                }`}
                              />
                              <span
                                className={`text-xs font-black ${
                                  darkMode ? 'text-white' : 'text-gray-900'
                                }`}
                              >
                                {stat.value}
                              </span>
                              <span
                                className={`text-xs font-medium ${
                                  darkMode ? 'text-slate-400' : 'text-gray-600'
                                }`}
                              >
                                {stat.label}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Premium Achievements */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Trophy
                              className={`w-6 h-6 md:w-7 md:h-7 ${
                                darkMode
                                  ? 'text-emerald-400'
                                  : 'text-emerald-600'
                              }`}
                            />
                          </motion.div>
                          <h4
                            className={`text-lg md:text-xl font-black ${
                              darkMode ? 'text-emerald-400' : 'text-emerald-600'
                            }`}
                          >
                            Key Achievements
                          </h4>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`ml-auto px-3 py-1 rounded-full text-xs font-bold ${
                              darkMode
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}
                          >
                            {exp.achievements.length} wins
                          </motion.div>
                        </div>

                        <div className="grid gap-3">
                          {exp.achievements.map((achievement, idx) => {
                            const AchievementIcon = achievement.icon;
                            const colorMap = {
                              cyan: darkMode
                                ? 'text-cyan-400'
                                : 'text-cyan-600',
                              yellow: darkMode
                                ? 'text-yellow-400'
                                : 'text-yellow-600',
                              green: darkMode
                                ? 'text-green-400'
                                : 'text-green-600',
                              purple: darkMode
                                ? 'text-purple-400'
                                : 'text-purple-600',
                              pink: darkMode
                                ? 'text-pink-400'
                                : 'text-pink-600',
                              orange: darkMode
                                ? 'text-orange-400'
                                : 'text-orange-600',
                              emerald: darkMode
                                ? 'text-emerald-400'
                                : 'text-emerald-600',
                              teal: darkMode
                                ? 'text-teal-400'
                                : 'text-teal-600',
                              blue: darkMode
                                ? 'text-blue-400'
                                : 'text-blue-600',
                            };

                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + idx * 0.05 }}
                                whileHover={{
                                  x: 8,
                                  scale: 1.02,
                                  boxShadow: darkMode
                                    ? '0 10px 30px -5px rgba(0,0,0,0.3)'
                                    : '0 10px 30px -5px rgba(0,0,0,0.1)',
                                }}
                                className={`flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl ${
                                  darkMode ? 'bg-slate-800/60' : 'bg-white/90'
                                } backdrop-blur-sm border-2 ${
                                  darkMode
                                    ? 'border-slate-700/50'
                                    : 'border-gray-200'
                                } hover:border-${
                                  achievement.color
                                }-500/50 transition-all duration-300 group/achievement cursor-pointer shadow-lg`}
                              >
                                <motion.div
                                  className={`p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${
                                    achievement.color === 'cyan'
                                      ? 'from-cyan-500/20 to-cyan-600/10'
                                      : achievement.color === 'yellow'
                                      ? 'from-yellow-500/20 to-yellow-600/10'
                                      : achievement.color === 'green'
                                      ? 'from-green-500/20 to-green-600/10'
                                      : achievement.color === 'purple'
                                      ? 'from-purple-500/20 to-purple-600/10'
                                      : achievement.color === 'pink'
                                      ? 'from-pink-500/20 to-pink-600/10'
                                      : achievement.color === 'orange'
                                      ? 'from-orange-500/20 to-orange-600/10'
                                      : achievement.color === 'emerald'
                                      ? 'from-emerald-500/20 to-emerald-600/10'
                                      : achievement.color === 'teal'
                                      ? 'from-teal-500/20 to-teal-600/10'
                                      : 'from-blue-500/20 to-blue-600/10'
                                  } flex-shrink-0 group-hover/achievement:scale-110 transition-transform`}
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <AchievementIcon
                                    className={`w-5 h-5 md:w-6 md:h-6 ${
                                      colorMap[achievement.color]
                                    }`}
                                  />
                                </motion.div>
                                <span
                                  className={`text-sm md:text-base font-medium ${
                                    darkMode
                                      ? 'text-slate-300'
                                      : 'text-gray-700'
                                  } group-hover/achievement:${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                  } transition-colors leading-relaxed flex-1`}
                                >
                                  {achievement.text}
                                </span>
                                <motion.div
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileHover={{ opacity: 1, scale: 1 }}
                                  className="flex-shrink-0"
                                >
                                  <CheckCircle
                                    className={`w-5 h-5 ${
                                      colorMap[achievement.color]
                                    }`}
                                  />
                                </motion.div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Premium Tech Stack */}
                      <div
                        className="space-y-4 pt-6 border-t-2 border-dashed"
                        style={{
                          borderColor: darkMode
                            ? 'rgba(148, 163, 184, 0.2)'
                            : 'rgba(209, 213, 219, 0.5)',
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          >
                            <Code
                              className={`w-6 h-6 ${
                                darkMode ? 'text-purple-400' : 'text-purple-600'
                              }`}
                            />
                          </motion.div>
                          <h5
                            className={`text-lg md:text-xl font-black ${
                              darkMode ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            Tech Stack
                          </h5>
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                          />
                        </div>

                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              whileHover={{
                                scale: 1.1,
                                y: -4,
                                boxShadow: darkMode
                                  ? '0 15px 30px -10px rgba(0,0,0,0.4)'
                                  : '0 15px 30px -10px rgba(0,0,0,0.2)',
                              }}
                              transition={{ delay: idx * 0.03 }}
                              className={`relative px-4 md:px-5 py-2 md:py-2.5 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold backdrop-blur-xl border-2 shadow-lg cursor-pointer overflow-hidden group/tech ${
                                darkMode
                                  ? 'bg-slate-800/80 border-slate-700/50 text-white hover:border-slate-600'
                                  : 'bg-white border-gray-200 text-gray-800 hover:border-gray-300'
                              }`}
                            >
                              <motion.div
                                className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover/tech:opacity-10 transition-opacity`}
                              />
                              <span className="relative z-10">{tech}</span>
                              <motion.div
                                className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 opacity-0 group-hover/tech:opacity-100"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Shine Effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                        initial={false}
                        animate={
                          isHovered
                            ? {
                                background: [
                                  'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                                  'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                                  'radial-gradient(circle at 0% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                                  'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                                ],
                              }
                            : {}
                        }
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>

                    {/* Corner Accents */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-5 blur-3xl rounded-full -translate-y-16 translate-x-16`}
                    />
                    <div
                      className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${gradient} opacity-5 blur-3xl rounded-full translate-y-16 -translate-x-16`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Ultra Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-24 md:mt-32 text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="relative inline-block"
          >
            {/* Glowing Background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`absolute inset-0 bg-gradient-to-r ${
                darkMode
                  ? 'from-cyan-500 via-blue-500 to-purple-600'
                  : 'from-cyan-600 via-blue-600 to-indigo-600'
              } blur-3xl opacity-60 rounded-3xl`}
            />

            <Link to="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: darkMode
                    ? '0 35px 70px -15px rgba(34, 211, 238, 0.6), 0 0 50px rgba(34, 211, 238, 0.3)'
                    : '0 35px 70px -15px rgba(34, 211, 238, 0.4), 0 0 50px rgba(34, 211, 238, 0.2)',
                }}
                whileTap={{ scale: 0.98 }}
                className={`relative group inline-flex items-center gap-4 px-10 md:px-16 py-5 md:py-7 bg-gradient-to-r ${
                  darkMode
                    ? 'from-cyan-500 via-blue-500 to-purple-600'
                    : 'from-cyan-600 via-blue-600 to-indigo-600'
                } text-white rounded-2xl md:rounded-3xl font-black text-lg md:text-2xl shadow-2xl border-2 md:border-4 border-white/30 backdrop-blur-xl overflow-hidden`}
              >
                {/* Animated Background Layers */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="relative z-10"
                >
                  <Zap className="w-7 h-7 md:w-9 md:h-9 drop-shadow-lg" />
                </motion.div>

                <span className="relative z-10 drop-shadow-lg">
                  Start Collaboration
                </span>

                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg" />
                </motion.div>

                {/* Particles Effect */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      x: [0, (Math.random() - 0.5) * 100],
                      y: [0, (Math.random() - 0.5) * 100],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    style={{
                      left: `${20 + i * 10}%`,
                      top: '50%',
                    }}
                  />
                ))}
              </motion.button>
            </Link>

            {/* Floating Icons Around Button */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2"
            >
              {/* <Star
                className={`w-8 h-8 md:w-10 md:h-10 ${
                  darkMode ? 'text-yellow-400' : 'text-yellow-500'
                }`}
                fill="currentColor"
              /> */}
            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2"
            >
              {/* <Crown
                className={`w-8 h-8 md:w-10 md:h-10 ${
                  darkMode ? 'text-purple-400' : 'text-purple-500'
                }`}
              /> */}
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`mt-6 md:mt-8 text-sm md:text-base ${
              darkMode ? 'text-slate-400' : 'text-gray-600'
            } font-medium`}
          >
            Let's build something amazing together 🚀
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
