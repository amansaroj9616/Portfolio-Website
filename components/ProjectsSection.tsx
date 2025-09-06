import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      title: "Krishi – AI-powered Farmer Platform",
      description: "An intelligent agricultural platform that uses machine learning to provide crop recommendations, disease detection, and yield prediction. Helps farmers make data-driven decisions to optimize their harvest.",
      image: "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBmYXJtfGVufDF8fHx8MTc1NjQ2MzM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "TensorFlow", "LLM", "React", "Node.js", "Express.js", "MongoDB", "OpenCV"],
      features: [
        "AI-powered crop disease detection",
        "Crop recommendations system",
        "Weather based alert system",
        "Service rental system",
        "Government scheme notification for Farmer",
        "E-Market place"
      ],
      category: "AI/ML",
      githubUrl: "https://github.com/aman-saroj/krishi-platform"
    },
    {
      title: "SmartScrapAI – AI News Summarizer",
      description: "An intelligent news aggregation and summarization platform that uses natural language processing to extract key insights from multiple news sources and present concise, unbiased summaries.",
      image: "https://images.unsplash.com/photo-1646583288948-24548aedffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV3c3xlbnwxfHx8fDE3NTY0NjMzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "NLTK", "React", "Express.js", "PostgreSQL", "Beautiful Soup"],
      features: [
        "Multi-source news aggregation",
        "AI-powered text summarization",
        "Sentiment analysis",
        "Category-based filtering"
      ],
      category: "AI/ML",
      githubUrl: "https://github.com/aman-saroj/smartscrap-ai"
    },
    {
      title: "AI driven Career Guidance Platform",
      description: "A comprehensive platform that uses AI to analyze student profiles, skills, and interests to provide personalized career recommendations and learning paths in the tech industry.",
      image: "https://images.unsplash.com/photo-1640163561337-b0d4161f7ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBndWlkYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NDUyNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Node.js", "Python", "Scikit-learn", "MongoDB", "Chart.js"],
      features: [
        "Skill assessment and gap analysis",
        "Personalized career recommendations",
        "Learning path generation",
        "Industry trend analysis",
        "Suggest suitable career paths",
        "Resume Analyzer"
      ],
      category: "Full-Stack",
      githubUrl: "https://github.com/aman-saroj/career-guidance-ai"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Showcasing innovative solutions that combine cutting-edge technology with real-world impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white backdrop-blur-sm"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-slate-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:bg-slate-700/50 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            onClick={() => window.open('https://github.com/aman-saroj', '_blank')}
          >
            View All Projects on GitHub
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}