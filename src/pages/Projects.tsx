import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from "react-router-dom";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mework – Enterprise Workflow System",
      description:
        "Full-stack web application where I handled both frontend and backend. Built reusable Vue components, integrated APIs with Spring Boot services, and ensured clean architecture and high code quality.",
      tech: ["Vue.js", "Spring Boot", "TypeScript", "REST APIs"],
      image: "/images/meWork.jpg", 
      github: "",
      live: "https://global.mework.work",
      featured: true
    },
    {
      id: 2,
      title: "Partz World – WooCommerce eCommerce Platform",
      description:
        "Customized WordPress & WooCommerce platform with plugin development, dynamic pricing, payment gateway integrations, and fully responsive theme customization.",
      tech: ["WordPress", "PHP", "WooCommerce", "MySQL"],
      image: "/images/mobpardz.png",
      github: "",
      live: "https://pardzworld.com/",
      featured: true
    },
    {
      id: 3,
      title: "Parking Hero – Smart Parking Management",
      description:
        "React + Spring Boot based real-time parking management system with reusable components, Redux state management, and seamless API communication.",
      tech: ["React", "Redux", "Spring Boot", "REST APIs"],
      image: "/images/parkingHero.jpg",
      github: "",
      live: "https://parkinghero.net/",
      featured: false
    },
    {
      id: 4,
      title: "Dynafios – Role Based Business Platform",
      description:
        "Laravel backend system with Spatie role & permission management. Developed APIs, database migrations, and optimized MySQL queries for performance.",
      tech: ["Laravel", "MySQL", "Spatie", "REST APIs"],
      image: "/images/dynafios.jpg",
      github: "",
      live: "https://dynafios.com/",
      featured: false
    },
    {
      id: 5,
      title: "Softsuave - Company Website",
      description:
        "The site was built using PHP, and the services and blog pages were implemented using WordPress. I handled the backend development, database management, and implemented custom features to enhance the user experience.",
      tech: ["WordPress", "PHP", "MySQL"],
      image: "/images/softsuave.jpeg",
      github: "",
      live: "https://softsuave.com/",
      featured: false
    },
    {
      id: 6,
      title: "Crypto Payment Gateway",
      description:
        "Microservices-based crypto payment system. Built secure APIs, handled background jobs, and managed database migrations for scalable architecture.",
      tech: ["Laravel", "Microservices", "Queues", "MySQL"],
      image: "/images/crypto_payment.jpg",
      github: "",
      live: "",
      featured: false
    },
    {
      id: 7,
      title: "Simpliaxis – Training & Certification Platform",
      description:
        "Laravel + React platform with REST APIs, Redis caching, queue management, and WhatsApp notifications using Interakt for real-time communication.",
      tech: ["Laravel", "React", "Redis", "WhatsApp API"],
      image: "/images/simpliaxis.png",
      github: "",
      live: "https://www.simpliaxis.com/",
      featured: true
    },
    {
      id: 8,
      title: "Royal Crackers – Online Fireworks Store",
      description:
        "Laravel-based eCommerce website for a fireworks retailer with product catalog, order management, REST APIs, and optimized MySQL database design.",
      tech: ["Laravel", "MySQL", "REST APIs"],
      image: "/images/royalcrackers.jpeg",
      github: "",
      live: "https://royalcrackers.net/",
      featured: true
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
                    {project.github && (
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
                    )}
                    
                    {project.live && (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-primary hover:shadow-glow"
                        asChild
                      >
                        {/* <a href={project.live} target="_blank" rel="noopener noreferrer"> */}
                        <Link to="/contact">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                        {/* </a> */}
                      </Button>
                    )}
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