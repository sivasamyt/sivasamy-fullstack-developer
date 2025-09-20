import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with machine learning insights and predictive analytics.",
      tech: ["React", "TypeScript", "Python", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      description: "Interactive portfolio showcasing Three.js animations and WebGL effects.",
      tech: ["Three.js", "React", "Framer Motion", "WebGL"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 4,
      title: "Mobile Task Manager",
      description: "Cross-platform mobile app for project management with real-time collaboration.",
      tech: ["React Native", "Firebase", "TypeScript"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Secure voting platform built on Ethereum with smart contracts.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      description: "Real-time IoT device monitoring with data visualization and alerts.",
      tech: ["Node.js", "MQTT", "InfluxDB", "Grafana"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageTransition className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-cyber">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions built with modern technologies and creative problem-solving
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="glass border-glow hover:shadow-glow transition-all duration-500 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-4 right-4 bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      Featured
                    </motion.div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-cyber group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs rounded border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 glass border-glow hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:shadow-glow"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Projects;