import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Moon,
  Sun,
  Menu,
  X,
  Code2,
  Home,
  User,
  Layers,
  Briefcase,
  MessageSquare,
  Search,
  Zap,
  Sparkles,
  MoonStar,
  ChevronDown,
} from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Theme management
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'night');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Close search on outside click
  useEffect(() => {
    const handler = e => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        open
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const routes = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/about', name: 'About', icon: User },
    { path: '/skills', name: 'Skills', icon: Code2 },
    { path: '/projects', name: 'Projects', icon: Layers },
    { path: '/experience', name: 'Experience', icon: Briefcase },
    { path: '/feedback', name: 'Feedback', icon: MessageSquare },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-3xl shadow-2xl shadow-cyan-500/10 border-b border-cyan-500/20'
          : 'bg-slate-950/80 backdrop-blur-2xl border-b border-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Enhanced */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-3 group relative overflow-hidden p-2 -m-2 rounded-2xl hover:bg-cyan-500/10 transition-all backdrop-blur-sm"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-xl opacity-60 group-hover:opacity-90 transition-all"
                animate={{ scale: scrolled ? 1 : 1.1 }}
              />
              <div className="relative p-3 lg:p-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl shadow-2xl shadow-cyan-500/25 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center border border-cyan-400/30">
                <Code2 className="w-5 h-5 lg:w-6 lg:h-6 text-white drop-shadow-sm" />
              </div>
            </div>

            <div className="hidden sm:block min-w-0">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl lg:text-2xl font-black tracking-tight leading-none"
              >
                <span className="text-white">&lt;</span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent ml-1">
                  Badhon
                </span>
                <span className="text-white"> /&gt;</span>
              </motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs lg:text-sm text-cyan-300/80 font-medium mt-1 tracking-wide"
              >
                {/* Full Stack Developer */}
              </motion.div>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5">
            {routes.map((route, index) => {
              const Icon = route.icon;
              return (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) =>
                    `group relative px-5 py-3 rounded-2xl flex items-center gap-2.5 font-semibold text-sm tracking-wide overflow-hidden transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-600/15 border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/20 backdrop-blur-sm text-white'
                        : 'text-slate-300 hover:text-white hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:shadow-lg border border-transparent'
                    }`
                  }
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0"
                  >
                    <Icon size={19} />
                  </motion.div>
                  <span className="relative z-10">{route.name}</span>

                  {/* Active Indicator */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-20"
                    whileHover={{ opacity: 0.2 }}
                  />

                  {/* Animated Underline */}
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg opacity-0"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                </NavLink>
              );
            })}

            {/* Theme Toggle - Premium (এখন Hire Me button এর আগে) */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const themes = ['light', 'dark', 'night'];
                setTheme(themes[(themes.indexOf(theme) + 1) % 3]);
              }}
              className="p-3 rounded-2xl text-slate-300 hover:text-yellow-400 hover:bg-yellow-500/10 hover:shadow-lg shadow-yellow-500/20 border border-transparent hover:border-yellow-500/30 ml-2 transition-all backdrop-blur-sm"
              title={`Switch to ${
                theme === 'dark'
                  ? 'Night'
                  : theme === 'night'
                  ? 'Light'
                  : 'Dark'
              } mode`}
            >
              {theme === 'night' ? (
                <MoonStar size={20} />
              ) : theme === 'dark' ? (
                <Moon size={20} />
              ) : (
                <Sun size={20} />
              )}
            </motion.button>

            {/* Premium CTA (এখন Theme Toggle এর পরে) */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(34, 211, 238, 0.4)',
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="ml-2 px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold rounded-3xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 ring-2 ring-cyan-500/40 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <Zap size={18} className="animate-pulse" />
                Hire Me
                <Sparkles
                  size={16}
                  className="animate-[spin_3s_linear_infinite]"
                />
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 90 }}
            onClick={() => setOpen(prev => !prev)}
            className="lg:hidden p-3 rounded-2xl text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/20 hover:shadow-lg shadow-cyan-500/20 border border-transparent hover:border-cyan-500/30 transition-all backdrop-blur-sm"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <motion.div
          ref={mobileMenuRef}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: open ? 1 : 0,
            height: open ? 'auto' : 0,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="lg:hidden overflow-hidden border-t border-cyan-500/20 bg-slate-950/95 backdrop-blur-3xl"
        >
          <div className="py-6 space-y-2 px-4">
            {routes.map(route => {
              const Icon = route.icon;
              return (
                <NavLink
                  key={route.path}
                  to={route.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-4 p-5 rounded-3xl font-semibold text-base transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 text-white shadow-2xl shadow-cyan-500/20 border border-cyan-500/40 backdrop-blur-sm'
                        : 'text-slate-300 hover:text-white hover:bg-cyan-500/15 hover:shadow-xl hover:shadow-cyan-500/20 border border-transparent hover:border-cyan-500/30'
                    }`
                  }
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-11 h-11 rounded-2xl bg-slate-800/50 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-all"
                  >
                    <Icon
                      size={22}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </motion.div>
                  <span className="font-bold tracking-wide">{route.name}</span>
                  <ChevronDown
                    size={20}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </NavLink>
              );
            })}

            {/* Mobile Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const themes = ['light', 'dark', 'night'];
                setTheme(themes[(themes.indexOf(theme) + 1) % 3]);
              }}
              className="w-full flex items-center justify-between p-5 rounded-3xl font-semibold text-base text-slate-300 hover:text-white hover:bg-yellow-500/15 hover:shadow-xl hover:shadow-yellow-500/20 border border-transparent hover:border-yellow-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-slate-800/50 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-all">
                  {theme === 'night' ? (
                    <MoonStar
                      size={22}
                      className="group-hover:scale-110 transition-transform"
                    />
                  ) : theme === 'dark' ? (
                    <Moon
                      size={22}
                      className="group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <Sun
                      size={22}
                      className="group-hover:scale-110 transition-transform"
                    />
                  )}
                </div>
                <span className="font-bold tracking-wide">
                  {theme === 'dark'
                    ? 'Dark Mode'
                    : theme === 'night'
                    ? 'Night Mode'
                    : 'Light Mode'}
                </span>
              </div>
              <ChevronDown
                size={20}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>

            {/* Mobile CTA */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                navigate('/contact');
                setOpen(false);
              }}
              className="w-full mt-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-3xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 ring-2 ring-cyan-500/40 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-3">
                <Zap size={20} className="animate-pulse" />
                Start Project
                <Sparkles
                  size={18}
                  className="animate-[spin_3s_linear_infinite]"
                />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
