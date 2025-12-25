import {
  ArrowRight,
  Code2,
  Coffee,
  Heart,
  Lightbulb,
  Rocket,
  Target,
  Zap,
} from 'lucide-react';
import bgImage from '../assets/image.png';
import { motion } from 'framer-motion';
import React from 'react';
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
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-2xl text-slate-600 dark:text-slate-300">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              With over 3 years of experience in full-stack development, I've
              had the privilege of working on diverse projects ranging from
              e-commerce platforms to real-time analytics dashboards.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              My passion lies in creating seamless user experiences backed by
              robust, scalable architectures. I believe in writing clean,
              maintainable code and staying current with the latest
              technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {[
              {
                icon: <Target />,
                title: 'Mission',
                text: 'Deliver exceptional digital solutions that exceed expectations',
              },
              {
                icon: <Zap />,
                title: 'Approach',
                text: 'Agile methodology with focus on quality and innovation',
              },
              {
                icon: <Heart />,
                title: 'Passion',
                text: 'Continuously learning and pushing boundaries',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  {React.cloneElement(item.icon, {
                    className: 'w-6 h-6 text-white',
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-black mb-6">Let's Work Together!</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to bring your ideas to life?
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all">
            Get In Touch <ArrowRight className="inline ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
