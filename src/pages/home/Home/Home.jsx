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
} from 'lucide-react';
import bgImg from '../../../assets/image.png';
const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
  const handleCVDownload = () => {
    // আপনার ফাইল আইডি: 1QLs3uI9L2WjO4u1Tc2Jm_yVItrMGC0Q4
    // গুগল ড্রাইভের সরাসরি ডাউনলোড লিঙ্ক ফরম্যাট:
    const cvUrl =
      'https://drive.google.com/uc?export=download&id=1QLs3uI9L2WjO4u1Tc2Jm_yVItrMGC0Q4';

    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('target', '_blank'); // নতুন ট্যাবে ওপেন হবে যদি ডাউনলোড শুরু না হয়
    link.download = 'Badhon_Sarker_FullStack_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    {
      icon: <Briefcase />,
      value: '50+',
      label: 'Projects',
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
    },
    {
      icon: <Users />,
      value: '30+',
      label: 'Clients',
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
    },
    {
      icon: <Clock />,
      value: '3+',
      label: 'Years',
      gradient: 'from-purple-400 via-pink-500 to-rose-600',
    },
    {
      icon: <Award />,
      value: '15+',
      label: 'Skills',
      gradient: 'from-orange-400 via-amber-500 to-yellow-600',
    },
  ];

  const techStack = [
    {
      name: 'React',
      icon: <Code2 />,
      color: 'from-cyan-400 to-blue-600',
      delay: 0,
    },
    {
      name: 'Node.js',
      icon: <Server />,
      color: 'from-green-400 to-emerald-600',
      delay: 0.1,
    },
    {
      name: 'MongoDB',
      icon: <Database />,
      color: 'from-green-500 to-teal-600',
      delay: 0.2,
    },
    {
      name: 'TypeScript',
      icon: <Terminal />,
      color: 'from-blue-400 to-indigo-600',
      delay: 0.3,
    },
    {
      name: 'Tailwind',
      icon: <Sparkles />,
      color: 'from-teal-400 to-cyan-600',
      delay: 0.4,
    },
    {
      name: 'Docker',
      icon: <Box />,
      color: 'from-blue-500 to-sky-600',
      delay: 0.5,
    },
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Crafting pixel-perfect, responsive web experiences',
      features: ['React/Next.js', 'Vue.js', 'Progressive Web Apps'],
      gradient: 'from-cyan-500 via-blue-500 to-purple-600',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Solutions',
      description: 'Robust APIs and scalable server architectures',
      features: ['Node.js/Express', 'REST/GraphQL', 'Microservices'],
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Design',
      description: 'Optimized data structures and queries',
      features: ['MongoDB', 'PostgreSQL', 'Redis'],
      gradient: 'from-purple-500 via-pink-500 to-rose-600',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'Seamless deployment and infrastructure',
      features: ['AWS/GCP', 'Docker/K8s', 'CI/CD'],
      gradient: 'from-orange-400 via-amber-500 to-yellow-600',
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-featured marketplace with real-time inventory, payment processing, and AI recommendations',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description:
        'Live data visualization platform processing millions of events per second',
      technologies: ['Vue.js', 'Socket.io', 'PostgreSQL', 'D3.js'],
      gradient: 'from-green-500 to-emerald-600',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Mouse Follow Effect */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-cyan-400/50 pointer-events-none z-50 mix-blend-screen"
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8 backdrop-blur-sm"
              >
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
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
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  Digital Magic
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-xl"
              >
                I transform complex ideas into elegant, scalable solutions using
                cutting-edge technologies and modern design principles.
              </motion.p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCVDownload}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full font-bold text-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Download className="group-hover:rotate-12 transition-transform" />
                    Download CV
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-cyan-500/50 rounded-full font-bold text-lg hover:bg-cyan-500/10 transition-all backdrop-blur-sm"
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
                    <div className="text-3xl font-black text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">
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
                <div className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-full animate-spin-slow" />
                <div className="absolute inset-10 border-2 border-dashed border-purple-500/20 rounded-full animate-spin-reverse" />

                {/* Image Container */}
                <div className="absolute inset-20 rounded-full overflow-hidden border-8 border-slate-900 shadow-2xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10">
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
                  className="absolute top-10 -right-5 bg-slate-900/90 border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
                >
                  <div className="bg-blue-500/20 p-2 rounded-lg text-cyan-400">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Frontend</div>
                    <div className="text-xs text-slate-400">React Expert</div>
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
                  className="absolute bottom-20 -left-10 bg-slate-900/90 border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
                >
                  <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                    <Server size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Backend</div>
                    <div className="text-xs text-slate-400">Node.js Master</div>
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-6">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold">What I Offer</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services & Expertise
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-6 py-3 rounded-full mb-6">
                <Layers className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-semibold">Portfolio</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Featured Work
                </span>
              </h2>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ gap: 12 }}
              className="hidden md:flex items-center gap-3 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
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
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all"
              >
                <div
                  className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="w-32 h-32 text-white/20 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-4 transition-all">
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 px-6 py-3 rounded-full mb-6">
              <Target className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-semibold">Workflow</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                My Process
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-3xl flex items-center justify-center shadow-2xl">
                    {React.cloneElement(item.icon, { className: 'w-10 h-10' })}
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-slate-900 border-4 border-orange-500 rounded-full flex items-center justify-center font-black text-lg">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>

                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent" />
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
            className="relative bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-600 rounded-[3rem] p-12 md:p-12 text-center overflow-hidden"
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
                <Rocket className="w-full h-full" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-black mb-6">
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
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Follow my journey and stay updated with my latest work
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: <Github />,
                name: 'GitHub',
                link: 'https://github.com/badhon18478',
                color: 'from-slate-600 to-slate-800',
              },
              {
                icon: <Linkedin />,
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/badhon-sarker1844/',
                color: 'from-blue-600 to-blue-800',
              },
              {
                icon: <Twitter />,
                name: 'Twitter',
                link: '#',
                color: 'from-sky-500 to-sky-700',
              },
              {
                icon: <Facebook />,
                name: 'Facebook',
                link: '#',
                color: 'from-blue-500 to-blue-700',
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
                className={`group relative bg-gradient-to-br ${social.color} rounded-2xl p-6 min-w-[160px] text-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    {React.cloneElement(social.icon, { className: 'w-8 h-8' })}
                  </div>
                  <div className="font-bold text-lg">{social.name}</div>
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
