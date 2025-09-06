import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Github, Linkedin, Download, Send, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "aman.saroj@iiitdmkurnool.ac.in",
      href: "mailto:aman.saroj@iiitdmkurnool.ac.in",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aman-saroj",
      href: "https://linkedin.com/in/aman-saroj",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/aman-saroj",
      href: "https://github.com/aman-saroj",
      color: "from-gray-500 to-gray-600"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Kurnool, Andhra Pradesh, India"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210"
    },
    {
      icon: Mail,
      label: "Email",
      value: "aman.saroj@iiitdmkurnool.ac.in"
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
            Let's Connect!
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 p-8">
              <h3 className="text-2xl text-white mb-6">Send me a message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2">First Name</label>
                    <Input 
                      placeholder="Your first name"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Last Name</label>
                    <Input 
                      placeholder="Your last name"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Subject</label>
                  <Input 
                    placeholder="What's this about?"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 p-6">
              <h3 className="text-xl text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      <info.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 p-6">
              <h3 className="text-xl text-white mb-6">Connect with me</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${link.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                      <link.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white group-hover:text-blue-400 transition-colors">{link.label}</p>
                      <p className="text-slate-400 text-sm">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-blue-500/20 p-6 text-center">
                <h3 className="text-xl text-white mb-4">Interested in my work?</h3>
                <p className="text-slate-300 mb-6">
                  Download my resume to learn more about my experience and skills.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl text-white mb-4">
              Ready to build something amazing together?
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to chat about 
              technology and innovation, I'm always excited to connect with fellow developers, 
              entrepreneurs, and tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}