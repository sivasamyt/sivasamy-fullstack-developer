import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ThreeScene from '@/components/ThreeScene';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <PageTransition className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient blur background */}
      <div className="absolute inset-0 gradient-blur" />
      
      {/* Three.js Scene */}
      <ThreeScene className="absolute inset-0 opacity-30" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl lg:text-7xl font-bold mb-6 text-shadow-glow"
            >
              <span className="text-cyber">Creative</span>
              <br />
              Developer
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              Crafting digital experiences with cutting-edge technologies and creative innovation
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Hire Me
                </Button>
              </Link>
              
              <Link to="/projects">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass border-glow hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="glass p-8 rounded-2xl hover-lift"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-3xl font-bold mb-6 text-cyber"
            >
              About Me
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed">
                🚀 <strong className="text-foreground">Full-Stack Developer</strong> with 3+ years of experience building scalable web applications
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                🎯 <strong className="text-foreground">Specializations:</strong> React, Laravel, Spring boot, Word presss, TypeScript and modern web technologies
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                🏆 <strong className="text-foreground">Achievements:</strong> Led 10+ successful projects, mentored junior developers, contributed to open-source
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                💡 <strong className="text-foreground">Passion:</strong> Creating immersive digital experiences that blend creativity with cutting-edge technology
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-6 pt-6 border-t border-white/10"
            >
              <div className="flex flex-wrap gap-2">
                {['React', 'Laravel', 'Spring Boot', 'Word Press', 'TypeScript'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Hero;