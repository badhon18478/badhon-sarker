import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Palette,
  Cloud,
  GitBranch,
  ChevronLeft,
  TrendingUp,
  Target,
  CheckCircle,
  Award,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: 'HTML5/CSS3', level: 98 },
        { name: 'JavaScript/ES6+', level: 95 },
        { name: 'React.js', level: 96 },
        { name: 'React Router', level: 94 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 97 },
      ],
      gradient: 'from-primary to-accent',
      bgGradient: 'from-primary/10 to-accent/10',
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: 'Node.js', level: 94 },
        { name: 'Express.js', level: 92 },
        { name: 'REST APIs', level: 95 },
        { name: 'Authentication', level: 93 },
        { name: 'Microservices', level: 88 },
      ],
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
    },
    {
      title: 'Database & Storage',
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'Firebase', level: 88 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Redis', level: 80 },
        { name: 'Database Design', level: 89 },
      ],
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10',
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: 'Figma', level: 88 },
        { name: 'Responsive Design', level: 96 },
        { name: 'User Experience', level: 90 },
        { name: 'Prototyping', level: 85 },
        { name: 'Wireframing', level: 87 },
      ],
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-500/10 to-orange-500/10',
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        { name: 'Git/GitHub', level: 96 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 83 },
        { name: 'Nginx', level: 78 },
      ],
      gradient: 'from-sky-500 to-blue-500',
      bgGradient: 'from-sky-500/10 to-blue-500/10',
    },
    {
      title: 'Tools & Soft Skills',
      icon: <GitBranch className="w-5 h-5" />,
      skills: [
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Communication', level: 92 },
        { name: 'Team Collaboration', level: 94 },
        { name: 'Project Management', level: 88 },
      ],
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-500/10 to-pink-500/10',
    },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Advanced Full-Stack',
      description:
        'Mastered MERN stack, cloud deployment, and microservices architecture',
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      year: '2023',
      title: 'Backend Specialization',
      description:
        'Deep dive into Node.js, databases, API design, and authentication',
      icon: <Server className="w-5 h-5" />,
    },
    {
      year: '2022',
      title: 'Frontend Frameworks',
      description:
        'React, Vue.js, state management, and modern development tools',
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      year: '2021',
      title: 'Web Fundamentals',
      description:
        'HTML, CSS, JavaScript, Git, and responsive design principles',
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  const certifications = [
    {
      title: 'React Developer',
      issuer: 'Meta',
      year: '2024',
      gradient: 'from-primary to-accent',
    },
    {
      title: 'Node.js Backend',
      issuer: 'Coursera',
      year: '2023',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Cloud Developer',
      issuer: 'AWS',
      year: '2023',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/home"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ChevronLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg shadow-primary/25">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Skills & Expertise
                </h1>
              </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A comprehensive skill set refined through years of hands-on
              experience in modern web development and software engineering.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-24">
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.08, duration: 0.5 }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2.5 bg-gradient-to-br ${category.gradient} rounded-xl text-white shadow-lg`}
                  >
                    {category.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.1 + skillIndex * 0.05,
                            ease: 'easeOut',
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Learning Timeline
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background shadow-lg shadow-primary/25" />

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                        {item.icon}
                      </div>
                      <span className="text-sm font-bold text-primary">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Credentials
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`relative overflow-hidden bg-gradient-to-br ${cert.gradient} p-6 rounded-2xl text-white shadow-xl`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative">
                  <Award className="w-8 h-8 mb-4 opacity-90" />
                  <div className="text-xl font-bold mb-1">{cert.title}</div>
                  <div className="text-sm opacity-90 mb-3">{cert.issuer}</div>
                  <div className="inline-flex items-center gap-1 text-xs font-medium bg-white/20 px-3 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Completed {cert.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
