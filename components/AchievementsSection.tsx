import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Award, Medal, Star, Calendar } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "JIGNASA Hackathon Winner",
      organization: "National Level Competition",
      year: "2025",
      description: "First place in national hackathon for innovative AI solution",
      type: "Hackathon",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Medal,
      title: "IIT Hyderabad E-Summit Runner-up",
      organization: "IIT Hyderabad",
      year: "2025",
      description: "Second place in entrepreneurship summit competition",
      type: "Competition",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Award,
      title: "DataWork'25 Winner",
      organization: "Data Science Competition",
      year: "2025",
      description: "Top performer in data analytics and visualization challenge",
      type: "Hackathon",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Star,
      title: "HACKSAGON'25 Champion",
      organization: "Regional Hackathon",
      year: "2025",
      description: "First place for innovative tech solution",
      type: "Hackathon",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "₹50K Fellowship Grant",
      organization: "Tech Innovation Program",
      year: "2024",
      description: "Received fellowship for outstanding academic performance and project work",
      type: "Fellowship",
      color: "from-red-500 to-orange-500"
    }
  ];

  const certifications = [
    {
      title: "Machine Learning Workshop",
      issuer: "IIT Hyderabad",
      year: "2024",
      credential: "ML-2024-IIT-H",
      skills: ["Machine Learning", "Python", "Data Science"]
    },
    {
      title: "Advanced Web Development",
      issuer: "IEEE Student Chapter",
      year: "2024",
      credential: "AWD-2024-IEEE",
      skills: ["React", "Node.js", "Full-Stack"]
    },
    {
      title: "AI Ethics & Responsible AI",
      issuer: "Stanford Online",
      year: "2024",
      credential: "AI-ETH-2024",
      skills: ["AI Ethics", "Responsible AI", "Machine Learning"]
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "AWS Academy",
      year: "2023",
      credential: "AWS-CF-2023",
      skills: ["AWS", "Cloud Computing", "DevOps"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Recognition for excellence in technology and innovation
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl text-white mb-8 flex items-center gap-2"
          >
            <Trophy className="h-6 w-6 text-yellow-400" />
            Achievements & Awards
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} bg-opacity-20`}>
                        <achievement.icon className={`h-6 w-6 text-white`} />
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant="secondary"
                          className="bg-slate-700/50 text-slate-300 mb-1"
                        >
                          {achievement.type}
                        </Badge>
                        <div className="text-sm text-slate-400 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {achievement.year}
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-lg text-white mb-2">{achievement.title}</h4>
                    <p className="text-blue-400 mb-3">{achievement.organization}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl text-white mb-8 flex items-center gap-2"
          >
            <Award className="h-6 w-6 text-blue-400" />
            Certifications & Workshops
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg text-white">{cert.title}</h4>
                      <div className="text-sm text-slate-400 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {cert.year}
                      </div>
                    </div>
                    
                    <p className="text-blue-400 mb-2">{cert.issuer}</p>
                    <p className="text-slate-400 text-sm mb-4">
                      Credential ID: {cert.credential}
                    </p>
                    
                    <div>
                      <h5 className="text-white text-sm mb-2">Skills Gained:</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="outline"
                            className="border-slate-600 text-slate-300 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-blue-500/20 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl text-blue-400 mb-2">5+</div>
                <div className="text-slate-300">Awards Won</div>
              </div>
              <div>
                <div className="text-3xl text-purple-400 mb-2">4+</div>
                <div className="text-slate-300">Certifications</div>
              </div>
              <div>
                <div className="text-3xl text-teal-400 mb-2">10+</div>
                <div className="text-slate-300">Hackathons</div>
              </div>
              <div>
                <div className="text-3xl text-green-400 mb-2">₹50K</div>
                <div className="text-slate-300">Fellowship</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}