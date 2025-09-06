import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Code, Zap, Target, TrendingUp } from 'lucide-react';

export function CodingProfilesSection() {
  const profiles = [
    {
      platform: "LeetCode",
      username: "aman_saroj",
      rating: "1810",
      rank: "Knight",
      problemsSolved: "550+",
      contestRating: "1810",
      description: "Consistent problem solver with strong algorithmic skills",
      stats: [
        { label: "Problems Solved", value: "550+", icon: Code },
        { label: "Contest Rating", value: "1810", icon: TrendingUp },
        { label: "Global Rank", value: "Top 10%", icon: Target },
        { label: "Streak Record", value: "45 days", icon: Zap }
      ],
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-500/20 to-yellow-500/20"
    },
    {
      platform: "GeeksforGeeks",
      username: "aman_saroj_gfg",
      rating: "1650",
      rank: "5 Star",
      problemsSolved: "400+",
      contestRating: "1650",
      description: "Strong foundation in data structures and algorithms",
      stats: [
        { label: "Problems Solved", value: "400+", icon: Code },
        { label: "Contest Rating", value: "1650", icon: TrendingUp },
        { label: "Institute Rank", value: "Top 5", icon: Target },
        { label: "Articles Published", value: "8", icon: Zap }
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      platform: "CodeChef",
      username: "aman_chef",
      rating: "1580",
      rank: "3 Star",
      problemsSolved: "150+",
      contestRating: "1580",
      description: "Active in monthly contests and problem solving",
      stats: [
        { label: "Problems Solved", value: "150+", icon: Code },
        { label: "Max Rating", value: "1580", icon: TrendingUp },
        { label: "Global Rank", value: "Top 15%", icon: Target },
        { label: "Long Contests", value: "12", icon: Zap }
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const achievements = [
    "Knight on LeetCode (Top 10% globally)",
    "5 Star on GeeksforGeeks",
    "3 Star on CodeChef",
    "1100+ Total Problems Solved",
    "Regular Contest Participant",
    "Strong in Dynamic Programming & Graphs"
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
            Coding Profiles
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Competitive programming journey and algorithmic problem-solving skills
          </p>
        </motion.div>

        {/* Coding Platforms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {profiles.map((profile, index) => (
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
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl text-white mb-1">{profile.platform}</h3>
                      <p className="text-slate-400">@{profile.username}</p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        className={`bg-gradient-to-r ${profile.bgColor} border-none text-white mb-1`}
                      >
                        {profile.rank}
                      </Badge>
                      <div className={`text-lg bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                        {profile.rating}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {profile.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {profile.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center p-3 rounded-lg bg-slate-700/30">
                        <stat.icon className="h-5 w-5 mx-auto mb-2 text-slate-400" />
                        <div className={`text-lg bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* View Profile Button */}
                  <Button 
                    className={`w-full bg-gradient-to-r ${profile.color} hover:opacity-90 text-white transition-all duration-300`}
                  >
                    View Profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-blue-500/20 p-8">
            <h3 className="text-2xl text-white mb-6 text-center">Overall Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl text-blue-400 mb-2">1100+</div>
                <div className="text-slate-300">Total Problems</div>
              </div>
              <div>
                <div className="text-3xl text-purple-400 mb-2">1810</div>
                <div className="text-slate-300">Max Rating</div>
              </div>
              <div>
                <div className="text-3xl text-teal-400 mb-2">3</div>
                <div className="text-slate-300">Platforms</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">Competitive Programming Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 text-center">
                  <p className="text-slate-300">{achievement}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Problem Solving Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-white mb-6">Strong Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Dynamic Programming", "Graph Algorithms", "Tree Traversal", "Binary Search", "Greedy Algorithms", "Data Structures", "String Algorithms", "Mathematical Problems"].map((skill, index) => (
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
                  className="border-purple-400/30 text-purple-300 hover:border-purple-400/60 hover:bg-purple-400/10 transition-all duration-200 px-3 py-1"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}