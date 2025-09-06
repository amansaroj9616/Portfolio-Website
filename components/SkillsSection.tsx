import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Globe, Brain, Settings, BarChart3 } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "JavaScript", "C++", "C", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["React", "Node.js", "Express", "MongoDB", "Next.js", "Tailwind CSS"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "NLP", "OpenCV", "CNN"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Tools & DevOps",
      skills: ["Docker", "AWS", "Git", "Linux", "Firebase", "Postman"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"],
      color: "from-teal-500 to-blue-500"
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
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20 mr-3`}>
                      <category.icon className={`h-6 w-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-xl text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-white mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Redux", "GraphQL", "Jest", "Cypress", "Webpack", "Babel", "Nginx", "Jenkins", "Kubernetes", "Redis"].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge 
                  variant="outline" 
                  className="border-purple-400/30 text-purple-300 hover:border-purple-400/60 hover:bg-purple-400/10 transition-all duration-200"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}