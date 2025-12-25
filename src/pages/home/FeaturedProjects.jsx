import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with React, Node.js, and MongoDB',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management with real-time updates using Firebase',
    tags: ['Vue.js', 'Firebase', 'Tailwind', 'PWA'],
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'Modern responsive portfolio showcasing creative web development',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border card-shadow hover:border-primary/50 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={project.github}
                    className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg border border-border bg-background hover:bg-secondary transition-colors"
          >
            View All Projects
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
