import { Code2, Coffee, Lightbulb, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description:
      'Writing maintainable, readable, and efficient code is my priority.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Solutions',
    description: 'Finding innovative approaches to complex problems.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Building fast, optimized applications that users love.',
  },
  {
    icon: Coffee,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and best practices.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 border border-cyan-500/20 px-8 py-4 rounded-3xl mb-8 backdrop-blur-xl">
            <Rocket className="w-6 h-6 text-cyan-400 animate-pulse" />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent text-lg tracking-wide"
            >
              Get to Know Me
            </motion.span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-5xl font-black mb-8 leading-tight"
          >
            <span className="text-white">&lt;</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent ml-2">
              About
            </span>
            <span className="text-white"> /&gt;</span>
          </motion.h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="w-full aspect-square max-w-md mx-auto rounded-4xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-600/20 p-2 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
              <div className="w-full h-full rounded-4xl bg-slate-950/80 backdrop-blur-2xl border border-slate-800/50 flex items-center justify-center shadow-2xl shadow-slate-900/30">
                <div className="text-center p-12">
                  <div className="text-8xl mb-6 animate-pulse">👨‍💻</div>
                  <p className="text-slate-400 font-mono text-lg tracking-wide">
                    Your Photo Here
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.div
              className="absolute -top-6 -left-6 w-36 h-36 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent tracking-tight">
              Full-Stack Developer Who Loves What They Do
            </h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Hello! I'm a passionate web developer with expertise in both
                frontend and backend technologies. My journey started with
                HTML/CSS and evolved to modern frameworks.
              </p>
              <p>
                I specialize in building responsive, user-friendly applications
                using <strong>React</strong>, <strong>Node.js</strong>, MongoDB,
                and Tailwind CSS. Clean, scalable code is my priority.
              </p>
              <p>
                When not coding, I'm exploring new tech, contributing to
                open-source, or sharing knowledge.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="group bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-800/50 hover:border-cyan-500/30 shadow-2xl shadow-slate-900/20 hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer"
              >
                <p className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                  3+
                </p>
                <p className="text-slate-400 font-medium text-lg">
                  Years Experience
                </p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="group bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/30 shadow-2xl shadow-slate-900/20 hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer"
              >
                <p className="text-4xl font-black bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                  50+
                </p>
                <p className="text-slate-400 font-medium text-lg">
                  Projects Delivered
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-5xl font-black mb-16 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
            What Drives{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              Me
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: '0 25px 50px rgba(34, 211, 238, 0.2)',
                }}
                className="group bg-slate-950/70 backdrop-blur-2xl rounded-4xl p-10 border border-slate-800/50 shadow-2xl shadow-slate-900/30 hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 overflow-hidden relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/3 to-purple-600/5 group-hover:from-cyan-500/15 group-hover:via-blue-500/10 group-hover:to-purple-600/15 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl shadow-2xl shadow-cyan-500/30 mb-6 group-hover:scale-110 transition-all duration-300 mx-auto w-fit">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
