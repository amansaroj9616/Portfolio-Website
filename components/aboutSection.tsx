import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Trophy, Award, Zap } from 'lucide-react';
import { ProfileImage } from './ProfileImage';

export function AboutSection() {
  const highlights = [
    { icon: GraduationCap, text: "B.Tech CSE, IIITDM Kurnool (2022-2026)" },
    { icon: Zap, text: "LeetCode Knight (550+ problems solved)" },
    { icon: Trophy, text: "Multiple Hackathon Winner" },
    { icon: Award, text: "₹50K Fellowship Grant Recipient" },
  ];

  // Multiple image sources for fallback
  const imageUrls = [
    "https://drive.google.com/uc?export=view&id=1TUzXHBtU4kHzNuCoWvAjDnNSfuzOBzJ2",
    "https://images.unsplash.com/photo-1681165232934-c09dfa5ee694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NjM4OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Passionate computer science student with a drive for innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 p-6">
              <ProfileImage
                src="https://drive.google.com/file/d/1TUzXHBtU4kHzNuCoWvAjDnNSfuzOBzJ2/view?usp=sharing"
                fallbackSrc={imageUrls[1]}
                alt="Aman Saroj - Software Engineer"
                className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover rounded-lg"
              />
            </Card>
          </motion.div>

          {/* Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl mb-4 text-white">
                Building the Future with Code & AI
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a passionate Computer Science student at IIITDM Kurnool with a deep fascination 
                for artificial intelligence and machine learning. My journey involves creating 
                intelligent systems that solve real-world problems and building full-stack 
                applications that make a difference.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in AI research, 
                participating in hackathons, or contributing to open-source projects. 
                I believe in the power of technology to transform lives and am committed 
                to being part of that transformation.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl text-white mb-4">Key Highlights</h4>
              <div className="grid gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      <highlight.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <span className="text-slate-300">{highlight.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Problem Solver", "AI Enthusiast", "Full-Stack Developer", "Open Source"].map((tag, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}