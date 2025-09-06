import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: "MERN Development Intern",
      company: "Startrit Infratech",
      period: "2025",
      location: "Remote",
      type: "Internship",
      description: "Developing full-stack web applications using MongoDB, Express.js, React, and Node.js. Working on scalable solutions and implementing modern development practices.",
      highlights: [
        "Built responsive web applications using React and Node.js",
        "Implemented RESTful APIs and database optimization",
        "Collaborated with cross-functional teams using Agile methodologies",
        "Deployed applications on cloud platforms with CI/CD pipelines"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Git"]
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      period: "2023 - Present",
      location: "Global",
      type: "Volunteer",
      description: "Contributing to open-source projects in AI/ML and web development. Participating in community-driven development and learning from global developers.",
      highlights: [
        "Contributed to machine learning libraries and frameworks",
        "Fixed bugs and implemented new features in web applications",
        "Improved documentation and code quality",
        "Mentored new contributors in the community"
      ],
      technologies: ["Python", "TensorFlow", "React", "JavaScript", "GitHub"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Professional journey and contributions to the tech community
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-teal-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900"></div>

                {/* Content Card */}
                <div className="ml-20">
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl text-white mb-1">{exp.title}</h3>
                          <p className="text-lg text-blue-400">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2 mt-2 sm:mt-0">
                          <Badge 
                            variant="secondary"
                            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 w-fit"
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-white mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-slate-300 text-sm flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
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
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-blue-500/20 p-8">
            <h3 className="text-2xl text-white mb-4">Looking for Opportunities</h3>
            <p className="text-slate-300 mb-6">
              I'm actively seeking internships and full-time opportunities in software development, 
              AI/ML, and data science. Let's build something amazing together!
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
              <span>View Full Resume</span>
              <ExternalLink className="h-4 w-4" />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}