import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const skills = [
  { name: 'HTML5', color: 'hsl(14, 100%, 57%)' },
  { name: 'CSS3', color: 'hsl(204, 90%, 50%)' },
  { name: 'Tailwind', color: 'hsl(189, 94%, 43%)' },
  { name: 'JavaScript', color: 'hsl(50, 100%, 50%)' },
  { name: 'React', color: 'hsl(193, 95%, 68%)' },
  { name: 'Vue.js', color: 'hsl(153, 47%, 49%)' },
  { name: 'Node.js', color: 'hsl(120, 25%, 40%)' },
  { name: 'Express', color: 'hsl(0, 0%, 40%)' },
  { name: 'MongoDB', color: 'hsl(120, 50%, 30%)' },
  { name: 'Firebase', color: 'hsl(43, 100%, 50%)' },
  { name: 'Git', color: 'hsl(10, 70%, 50%)' },
  { name: 'GitHub', color: 'hsl(0, 0%, 20%)' },
];

export const SkillsPreview = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="px-6 py-3 bg-secondary rounded-full font-medium text-secondary-foreground hover:scale-105 transition-transform duration-300 cursor-default animate-scale-in"
              style={{
                animationDelay: `${index * 0.05}s`,
                borderLeft: `3px solid ${skill.color}`,
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/skills"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            View all skills
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
