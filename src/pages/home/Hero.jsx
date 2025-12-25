import {
  ArrowRight,
  Clock,
  Code2,
  Download,
  Layers,
  Server,
  ThumbsUp,
  User,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
// import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';
const Hero = () => {
  const [showDownloadToast, setShowDownloadToast] = useState(false);

  const handleCVDownload = () => {
    const cvContent = `
      BADHON SARKER
      Full Stack Developer
      
      CONTACT
      Email: badhon@example.com
      Phone: +880 1234 567890
      GitHub: github.com/badhonsarker
      LinkedIn: linkedin.com/in/badhonsarker
      
      SKILLS
      • React, React Router, Vue.js
      • Node.js, Express.js
      • MongoDB, Firebase
      • HTML5, CSS3, Tailwind CSS
      • Git, GitHub, CI/CD
      • REST APIs, GraphQL
    `;

    const blob = new Blob([cvContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Badhon_Sarker_FullStack_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    setShowDownloadToast(true);
    setTimeout(() => setShowDownloadToast(false), 3000);
  };

  return (
    <div className="overflow-hidden pt-20">
      <section className="relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] opacity-70" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Badhon Sarker
              </span>
            </h1>

            <p className="text-xl text-muted-foreground">
              I build modern web applications with React, Node.js, MongoDB, and
              Firebase. Passionate about creating scalable solutions that drive
              business growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCVDownload}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <Download size={20} />
                Download CV
              </motion.button>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 border-2 border-primary/30 px-8 py-4 rounded-full font-semibold hover:bg-primary/10 transition-all"
                >
                  Hire Me <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { value: '50+', label: 'Projects', icon: Layers },
                { value: '3+', label: 'Years Exp', icon: Clock },
                { value: '30+', label: 'Clients', icon: Users },
                { value: '100%', label: 'Satisfaction', icon: ThumbsUp },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-20"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                  <User size={120} className="text-primary" />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <Code2 size={24} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl">
                <Server size={24} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export { Hero };

//  <motion.div
//    initial={{ opacity: 0, scale: 0.9 }}
//    animate={{ opacity: 1, scale: 1 }}
//    transition={{ duration: 0.6, delay: 0.2 }}
//    className="relative"
//  >
//    <div className="bg-gradient-to-br from-card to-background/50 border border-border/50 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
//      <div className="flex items-center gap-4 mb-8">
//        <div className="p-3 bg-gradient-to-r from-primary to-purple-600 rounded-xl">
//          <Cpu className="w-8 h-8 text-white" />
//        </div>
//        <div>
//          <h3 className="text-2xl font-bold">Tech Stack</h3>
//          <p className="text-muted-foreground">
//            Modern & Scalable Technologies
//          </p>
//        </div>
//      </div>

//      <div className="space-y-6">
//        {techStack.map((tech, index) => (
//          <div key={index} className="space-y-2">
//            <div className="flex items-center justify-between">
//              <div className="flex items-center gap-3">
//                <div
//                  className={`p-2 rounded-lg bg-gradient-to-r ${tech.color} bg-opacity-20`}
//                >
//                  {tech.icon}
//                </div>
//                <span className="font-semibold">{tech.name}</span>
//              </div>
//              <span className="font-bold text-primary">{tech.level}%</span>
//            </div>
//            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
//              <motion.div
//                initial={{ width: 0 }}
//                animate={{ width: `${tech.level}%` }}
//                transition={{ duration: 1, delay: index * 0.1 }}
//                className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
//              />
//            </div>
//          </div>
//        ))}
//      </div>
//    </div>
//  </motion.div>;
